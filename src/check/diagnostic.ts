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
            in_arr.forEach((line, line_idx) => {
                // parse out the comments
                var comment_slice = line.search('#');
                if (comment_slice >= 0) {
                    in_arr[line_idx] = line.slice(0, comment_slice);
                }

                // check wheather has contents
                if (in_arr[line_idx].replace(/\s/g, '').length) {
                    var words = in_arr[line_idx].replace(/:/g, ':,').split(/,/);
                    for (let i = 0; i < words.length;) {
                        var word = words[i].trim();

                        // is label
                        if (isLabel(word)) {
                            if (!isLegalLabel(word)) {
                                legal = false;
                                diagnostic.push(new vscode.Diagnostic(
                                    doc.lineAt(line_idx).range,
                                    'Illegal label: unsupported alphabets',
                                    vscode.DiagnosticSeverity.Error
                                ));
                                break;
                            }
                            i++;
                        } else if (word.replace(/\s/g, '').length) {    // not label but has something
                            if (!(isLegalInstruction(word.split(' ')[0]))) {    // not in utils
                                legal = false;
                                diagnostic.push(new vscode.Diagnostic(
                                    doc.lineAt(line_idx).range,
                                    'No such instruction: ' + word.split(' ')[0],
                                    vscode.DiagnosticSeverity.Error
                                ));
                                break;
                            } else if (no_param.includes(word.split(' ')[0])) {
                                i++;
                            } else if (one_param.includes(word.split(' ')[0])) {
                                i++;
                            } else if (two_param.includes(word.split(' ')[0])) {
                                i += 2;
                            } else if (three_param.includes(word.split(' ')[0])) {
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