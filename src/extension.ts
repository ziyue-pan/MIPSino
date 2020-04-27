import * as vscode from 'vscode';
// import {check} from './assembler/check';
import { Assemble } from './assembler/assembler';
import { Disassemble } from './disassembler/disassembler';

export function activate(context: vscode.ExtensionContext) {
	let assemble_disposable = vscode.commands.registerCommand('mipsino.ToHex', () => {
		// vscode.window.showInformationMessage('No I am going to!');
		// const terminal = (<any>vscode.window).createTerminal({name:'MIPSino Terminal'});
		// terminal.show();
		var editor = vscode.window.activeTextEditor;
		var full_path = editor!.document.fileName;
		var file_name = full_path.replace(/^.*[\\\/]/, '');
		var file_dir = full_path.substring(0, full_path.lastIndexOf('\\') + 1);
		try {
			var suffix = file_name.substring(file_name.lastIndexOf('.'), file_name.length);
			if (['.asm', '.s', '.mips'].includes(suffix)) {
				var assembled_path = Assemble(file_dir, file_name);
				vscode.window.showInformationMessage('Assembly Done!');
				vscode.workspace.openTextDocument(assembled_path).then(doc => {
					vscode.window.showTextDocument(doc);
				});
			} else {
				vscode.window.showErrorMessage(suffix + ' file can not be assembled');
			}
		} catch (e) {
			console.log('Error:', e.stack);
		}
	});
	let disassemble_disposable = vscode.commands.registerCommand('mipsino.ToAsm', () => {
		var editor = vscode.window.activeTextEditor;
		var full_path = editor!.document.fileName;
		var file_name = full_path.replace(/^.*[\\\/]/, '');
		var file_dir = full_path.substring(0, full_path.lastIndexOf('\\') + 1);
		try {
			var suffix = file_name.substring(file_name.lastIndexOf('.'), file_name.length);
			if (suffix === '.hex') {
				var disassembled_path = Disassemble(file_dir, file_name);
				vscode.window.showInformationMessage('Disassembly Done!');
				vscode.workspace.openTextDocument(disassembled_path).then(doc => {
					vscode.window.showTextDocument(doc);
				});
			} else {
				vscode.window.showErrorMessage(suffix + ' file can not be disassembled');
			}
		} catch (e) {
			console.log('Error:', e.stack);
		}
	});
	context.subscriptions.push(assemble_disposable);
	context.subscriptions.push(disassemble_disposable);
}
export function deactivate() { }
