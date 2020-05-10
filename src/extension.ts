import * as vscode from 'vscode';
import * as Net from 'net';
import { WorkspaceFolder, DebugConfiguration, ProviderResult, CancellationToken } from 'vscode';
import { MockDebugSession } from './simulator/debugger';
import { Assemble } from './assembler/assembler';
import { Disassemble } from './disassembler/disassembler';
import { updateDiagnostic } from './check/diagnostic';


const runMode: 'external' | 'server' | 'inline' = 'inline';

export function activate(context: vscode.ExtensionContext) {
	const collections = vscode.languages.createDiagnosticCollection('Assembly Error');
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
				if (updateDiagnostic(editor!.document, collections)) {
					var assembled_path = Assemble(file_dir, file_name);
					vscode.window.showInformationMessage('Assembly Done!');
					vscode.workspace.openTextDocument(assembled_path).then(doc => {
						vscode.window.showTextDocument(doc);
					});
				} else {
					vscode.window.showErrorMessage('Assembly Failed!');
				}
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

	if (vscode.window.activeTextEditor) {
		updateDiagnostic(vscode.window.activeTextEditor.document, collections);
	}
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor((editor) => {
		if (editor) {
			updateDiagnostic(editor.document, collections);
		}
	}));


	context.subscriptions.push(assemble_disposable);
	context.subscriptions.push(disassemble_disposable);






	// runtime dispose
	context.subscriptions.push(vscode.commands.registerCommand('extension.mock-debug.getProgramName', config => {
		return vscode.window.showInputBox({
			placeHolder: "Please enter the name of a markdown file in the workspace folder",
			value: "untitled-1.asm"
		});
	}));

	// register a configuration provider for 'mock' debug type
	const provider = new MockConfigurationProvider();
	context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider('mock', provider));

	// register a dynamic configuration provider for 'mock' debug type
	context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider('mock', {
		provideDebugConfigurations(folder: WorkspaceFolder | undefined): ProviderResult<DebugConfiguration[]> {
			return [
				{
					name: "Dynamic Launch",
					request: "launch",
					type: "node",
					program: "${file}"
				},
				{
					name: "Another Dynamic Launch",
					request: "launch",
					type: "node",
					program: "${file}"
				},
				{
					name: "Mock Launch",
					request: "launch",
					type: "node",
					program: "${file}"
				}
			];
		}
	}));

	// debug adapters can be run in different ways by using a vscode.DebugAdapterDescriptorFactory:
	let factory: vscode.DebugAdapterDescriptorFactory;
	switch (runMode) {
		case 'server':
			// run the debug adapter as a server inside the extension and communicating via a socket
			factory = new MockDebugAdapterDescriptorFactory();
			break;

		case 'inline':
			// run the debug adapter inside the extension and directly talk to it
			factory = new InlineDebugAdapterFactory();
			break;

		case 'external': default:
			// run the debug adapter as a separate process
			factory = new DebugAdapterExecutableFactory();
			break;
	}

	context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory('mock', factory));
	if ('dispose' in factory) {
		context.subscriptions.push(factory);
	}

}



export function deactivate() { }




class MockConfigurationProvider implements vscode.DebugConfigurationProvider {

	/**
	 * Massage a debug configuration just before a debug session is being launched,
	 * e.g. add all missing attributes to the debug configuration.
	 */
	resolveDebugConfiguration(folder: WorkspaceFolder | undefined, config: DebugConfiguration, token?: CancellationToken): ProviderResult<DebugConfiguration> {

		// if launch.json is missing or empty
		if (!config.type && !config.request && !config.name) {
			const editor = vscode.window.activeTextEditor;
			if (editor && ['s', 'asm', 'mips'].includes(editor.document.fileName.split('.').pop()!)) {
				config.type = 'mock';
				config.name = 'Launch';
				config.request = 'launch';
				config.program = '${file}';
				config.stopOnEntry = true;
			}
		}

		if (!config.program) {
			return vscode.window.showErrorMessage("Simulation Failed, it is not the MIPS code!").then(_ => {
				return undefined;	// abort launch
			});
		}

		return config;
	}
}

class DebugAdapterExecutableFactory implements vscode.DebugAdapterDescriptorFactory {

	// The following use of a DebugAdapter factory shows how to control what debug adapter executable is used.
	// Since the code implements the default behavior, it is absolutely not neccessary and we show it here only for educational purpose.

	createDebugAdapterDescriptor(_session: vscode.DebugSession, executable: vscode.DebugAdapterExecutable | undefined): ProviderResult<vscode.DebugAdapterDescriptor> {
		// param "executable" contains the executable optionally specified in the package.json (if any)

		// use the executable specified in the package.json if it exists or determine it based on some other information (e.g. the session)
		if (!executable) {
			const command = "absolute path to my DA executable";
			const args = [
				"some args",
				"another arg"
			];
			const options = {
				cwd: "working directory for executable",
				env: { "VAR": "some value" }
			};
			executable = new vscode.DebugAdapterExecutable(command, args, options);
		}

		// make VS Code launch the DA executable
		return executable;
	}
}

class MockDebugAdapterDescriptorFactory implements vscode.DebugAdapterDescriptorFactory {

	private server?: Net.Server;

	createDebugAdapterDescriptor(session: vscode.DebugSession, executable: vscode.DebugAdapterExecutable | undefined): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {

		if (!this.server) {
			// start listening on a random port
			this.server = Net.createServer(socket => {
				const session = new MockDebugSession();
				session.setRunAsServer(true);
				session.start(<NodeJS.ReadableStream>socket, socket);
			}).listen(0);
		}

		// make VS Code connect to debug server
		return new vscode.DebugAdapterServer((<Net.AddressInfo>this.server.address()).port);
	}

	dispose() {
		if (this.server) {
			this.server.close();
		}
	}
}

class InlineDebugAdapterFactory implements vscode.DebugAdapterDescriptorFactory {

	createDebugAdapterDescriptor(_session: vscode.DebugSession): ProviderResult<vscode.DebugAdapterDescriptor> {
		return new vscode.DebugAdapterInlineImplementation(new MockDebugSession());
	}
}
