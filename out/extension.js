"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "mipsino" is now active!');
    let disposable = vscode.commands.registerCommand('mipsino.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from MIPSino!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map