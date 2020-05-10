import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import {inst_set, directive_set, pseudo_set, reg_set} from '../assembler/asm_utils';


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
                        var word = words[i];

                        // is label
                        if (word.trim().substr(word.length - 1) === ':') {
                            var label = word.trim();
                            var start = label.charAt(0);
                            var mid = label.substr(1, label.length - 2);
                            if (!(/[a-zA-Z]|_/i.test(start) && /^\w*$/.test(mid))) {
                                legal = false;
                                diagnostic.push(new vscode.Diagnostic(
                                    doc.lineAt(line_idx).range,
                                    'Illegal label: unsupported alphabets',
                                    vscode.DiagnosticSeverity.Error
                                ));
                                break;
                            }
                            i++;
                        } else if(){

                        }
                    }
                }
            });
        } else {
            collection.clear();
        }

    } else {
        collection.clear();
    }


    return legal;
}