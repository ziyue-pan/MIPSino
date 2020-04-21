"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    // console.log('Congratulations, your extension "mipsino" is now active!');
    let disposable = vscode.commands.registerCommand('mipsino.ToHex', () => {
        var _a;
        // vscode.window.showInformationMessage('No I am going to!');
        // const terminal = (<any>vscode.window).createTerminal({name:'MIPSino Terminal'});
        // terminal.show();
        var filePath = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.fileName;
        console.log(filePath);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map