import * as vscode from 'vscode';
import { Assemble } from './assembler/assembler';
import { Disassemble } from './disassembler/disassembler';


export function activate(context: vscode.ExtensionContext) {

	const collection = vscode.languages.createDiagnosticCollection('Assembly Error');

	
	let disposable = vscode.commands.registerCommand('mipsino.ToHex', () => {
		var editor = vscode.window.activeTextEditor;
		var file_name = editor!.document.fileName;
		var suffix = file_name.substring(file_name.lastIndexOf('.'), file_name.length);

		if(!editor){
			vscode.window.showErrorMessage('Assembly Failed! Empty Document!');
		} else if(!['.asm', '.s', '.mips'].includes(suffix)) {
			vscode.window.showErrorMessage(suffix + ' file can not be assembled!');
		} else {
			if(Assemble(editor.document, collection)) {
				vscode.window.showInformationMessage('Assembly Done!');
			} else {
				vscode.window.showErrorMessage('Assembly Failed!');
			}
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

	context.subscriptions.push(disposable);
	context.subscriptions.push(disassemble_disposable);
}

export function deactivate() { }
