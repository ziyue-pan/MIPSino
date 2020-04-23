import * as vscode from 'vscode';
// import {check} from './assembler/check';
import { assemble } from './assembler/assembler';

export function activate(context: vscode.ExtensionContext) {
	// console.log('Congratulations, your extension "mipsino" is now active!');
	let disposable = vscode.commands.registerCommand('mipsino.ToHex', () => {
		// vscode.window.showInformationMessage('No I am going to!');
		// const terminal = (<any>vscode.window).createTerminal({name:'MIPSino Terminal'});
		// terminal.show();
		var editor = vscode.window.activeTextEditor;
		var full_path = editor!.document.fileName;
		var file_name = full_path.replace(/^.*[\\\/]/, '');
		var file_dir = full_path.substring(0, full_path.lastIndexOf('\\') + 1);
		
		var assembled_path = assemble(file_dir, file_name);
	});
	context.subscriptions.push(disposable);
}
export function deactivate() { }
