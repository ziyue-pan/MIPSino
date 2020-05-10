import * as vscode from 'vscode';
import * as path from 'path';

export function updateDiagnostic(doc: vscode.TextDocument, collection: vscode.DiagnosticCollection): boolean {
    var legal: boolean = true;
    if (doc) {
        var filename = path.basename(doc.uri.fsPath);
        var suffix = filename.substring(filename.lastIndexOf('.'), filename.length);
        if (['.asm', '.s', '.mips'].includes(suffix)) {
            
        } else {
            collection.clear();
        }

    } else {
        collection.clear();
    }


    return legal;
}