import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// console.log('Congratulations, your extension "mipsino" is now active!');
	let disposable = vscode.commands.registerCommand('mipsino.ToHex', () => {
		// vscode.window.showInformationMessage('No I am going to!');
		// const terminal = (<any>vscode.window).createTerminal({name:'MIPSino Terminal'});
		// terminal.show();
		var filePath = vscode.window.activeTextEditor?.document.fileName;
		console.log(filePath);
	});
	context.subscriptions.push(disposable);
}
export function deactivate() { }
