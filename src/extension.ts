import * as vscode from 'vscode';

function formatPathLine(editor: vscode.TextEditor, mode: 'relative' | 'absolute'): string {
	const doc = editor.document;
	const filePath = mode === 'relative'
		? vscode.workspace.asRelativePath(doc.uri)
		: doc.uri.fsPath;

	const lines = editor.selections.map(sel => {
		const start = sel.start.line + 1;
		const end = sel.end.line + 1;
		return start === end ? `${start}` : `${start}-${end}`;
	});

	if (lines.length === 1) {
		return `${filePath}:${lines[0]}`;
	}

	return lines.map(l => `${filePath}:${l}`).join('\n');
}

async function copyPathLine(mode: 'relative' | 'absolute') {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.showWarningMessage('No active editor');
		return;
	}

	const text = formatPathLine(editor, mode);
	await vscode.env.clipboard.writeText(text);
	vscode.window.showInformationMessage(`Copied: ${text}`);
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('whereami.copyRelative', () => copyPathLine('relative')),
		vscode.commands.registerCommand('whereami.copyAbsolute', () => copyPathLine('absolute'))
	);
}

export function deactivate() {}
