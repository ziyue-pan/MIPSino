import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { legal_inst, legal_regs } from './check_utils';
import { no_param, one_param, two_param, three_param } from './check_utils';

function isLabel(word: string): boolean {
    return word.substr(word.length - 1) === ':';
}

function isLegalLabel(label: string): boolean {
    var start = label.charAt(0);
    var mid = label.substr(1, label.length - 2);
    return /[a-zA-Z]|_/i.test(start) && /^\w*$/.test(mid);
}

function isLegalInstruction(first_word: string): boolean {
    return legal_inst.includes(first_word);
}

export function updateDiagnostic(doc: vscode.TextDocument, collection: vscode.DiagnosticCollection): boolean {
    var legal: boolean = true;
    if (doc) {
        var filepath = doc.uri.fsPath;
        var filename = path.basename(doc.uri.fsPath);
        var suffix = filename.substring(filename.lastIndexOf('.'), filename.length);
        if (['.asm', '.s', '.mips'].includes(suffix)) {
            // get the diagnostic
            let diagnostic: vscode.Diagnostic[] = [];

            // parse the file input
            var in_str = fs.readFileSync(filepath, 'utf-8');
            var in_arr = in_str.replace(/\t/g, ' ').split(/\n/);

            var label_set: string[] = [];
            in_arr.forEach((line, line_idx) => {
                // parse out the comments
                var comment_slice = line.search('#');
                if (comment_slice >= 0) {
                    in_arr[line_idx] = line.slice(0, comment_slice);
                }
                if (in_arr[line_idx].replace(/\s/g, '').length) {
                    var words = in_arr[line_idx].replace(/:/g, ':,').split(/,/);
                    for (let i = 0; i < words.length;) {
                        var word = words[i].trim();
                        if (word.replace(/\s/g, '').length) {
                            if (isLabel(word)) {
                                if (!isLegalLabel(word)) {
                                    legal = false;
                                    diagnostic.push(new vscode.Diagnostic(
                                        doc.lineAt(line_idx).range,
                                        'Illegal label: unsupported alphabets',
                                        vscode.DiagnosticSeverity.Error
                                    ));
                                    break;
                                } else {
                                    label_set.push(word.substr(0, word.length - 1));
                                    i++;
                                }
                            } else {
                                break;
                            }
                        } else {
                            i++;
                        }

                    }
                }
            });


            in_arr.forEach((line, line_idx) => {
                // check wheather has contents
                if (in_arr[line_idx].replace(/\s/g, '').length) {
                    var words = in_arr[line_idx].replace(/:/g, ':,').split(/,/);
                    for (let i = 0; i < words.length;) {
                        var word = words[i].trim();

                        // is label
                        if (isLabel(word)) {
                            i++;
                        } else if (word.replace(/\s/g, '').length) {    // not label but has something
                            if (!(isLegalInstruction(word.split(/\s+/)[0]))) {    // not in utils
                                legal = false;
                                diagnostic.push(new vscode.Diagnostic(
                                    doc.lineAt(line_idx).range,
                                    'No such instruction: ' + word.split(/\s+/)[0],
                                    vscode.DiagnosticSeverity.Error
                                ));
                                break;
                            } else if (no_param.includes(word.split(/\s+/)[0])) {
                                if (word.split(/\s+/).length > 1 || i !== words.length - 1) {
                                    legal = false;
                                    diagnostic.push(new vscode.Diagnostic(
                                        doc.lineAt(line_idx).range,
                                        'Too many arguments, no extra parameters expected for instruction: ' + word.split(/\s+/)[0],
                                        vscode.DiagnosticSeverity.Error
                                    ));
                                    break;
                                }
                                i++;
                            } else if (one_param.includes(word.split(/\s+/)[0])) {  // one parameter
                                var len = word.split(/\s+/).length;
                                if (len !== 2 || i !== words.length - 1) {
                                    legal = false;
                                    diagnostic.push(new vscode.Diagnostic(
                                        doc.lineAt(line_idx).range,
                                        'Incompatible arguments, expect 1 parameter for instruction: ' + word.split(/\s+/)[0],
                                        vscode.DiagnosticSeverity.Error
                                    ));
                                    break;
                                } else {
                                    var key = word.split(/\s+/)[0];
                                    var param = word.split(/\s+/)[1];
                                    if ((key === 'j' || key === 'jal') && !label_set.includes(param)) {
                                        legal = false;
                                        diagnostic.push(new vscode.Diagnostic(
                                            doc.lineAt(line_idx).range,
                                            'Unavailable target: ' + param,
                                            vscode.DiagnosticSeverity.Error
                                        ));
                                        break;
                                    } else if (key === 'jr' && !legal_regs.includes(param)) {
                                        legal = false;
                                        diagnostic.push(new vscode.Diagnostic(
                                            doc.lineAt(line_idx).range,
                                            'Unavailable register: ' + param,
                                            vscode.DiagnosticSeverity.Error
                                        ));
                                        break;
                                    } else if (['.byte', '.half', '.word'].includes(key) && isNaN(parseInt(param))) {
                                        legal = false;
                                        diagnostic.push(new vscode.Diagnostic(
                                            doc.lineAt(line_idx).range,
                                            param + ' is not a number',
                                            vscode.DiagnosticSeverity.Error
                                        ));
                                        break;
                                    }
                                }
                                i++;
                            } else if (two_param.includes(word.split(/\s+/)[0])) {
                                i += 2;
                            } else if (three_param.includes(word.split(/\s+/)[0])) {
                                i += 3;
                            }
                        } else {
                            i++;
                        }
                    }
                }
            });
            collection.set(doc.uri, diagnostic);
        } else {
            collection.clear();
        }

    } else {
        collection.clear();
    }
    return legal;
}