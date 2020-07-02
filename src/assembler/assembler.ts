import * as fs from 'fs';
import * as vscode from 'vscode';


import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { mipsLexer } from '../grammar/mipsLexer';

import { mipsParser } from "../grammar/mipsParser";
import { mipsListener } from "../grammar/mipsListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import {
    R_typeContext, I_typeContext, J_typeContext, LabelContext, DirectiveContext, PseudoContext,
} from "../grammar/mipsParser";

import { reg_table, funct_table, opcode_table, resered_word } from './asm_utils';



function ToBin(dec: number, width: number): string {
    if (dec >= 0) {
        return (dec >>> 0).toString(2).padStart(width, '0');
    } else {
        return (dec >>> 0).toString(2).substring(32 - width, 32);
    }
}


class FirstScan implements mipsListener {
    diag_line: number[] = [];
    diag_msg: string[] = [];
    program_counter: number = 0;
    legal: boolean = true;

    label_table: Map<string, number> = new Map();
    enterLabel(ctx: LabelContext) {
        if (resered_word.includes(ctx.IDEN().text)) {
            this.legal = false;
            this.diag_line.push(ctx.start.line);
            this.diag_msg.push('Reserved Words Cannot be Labels: ' + ctx.IDEN().text);
        } else if (this.label_table.has(ctx.IDEN().text)) {
            this.legal = false;
            this.diag_line.push(ctx.start.line);
            this.diag_msg.push('Duplicate Labels: ' + ctx.IDEN().text);
        } else {
            this.label_table.set(ctx.IDEN().text, this.program_counter);
        }
    }

    enterDirective(ctx: DirectiveContext) {
        var op = ctx._op.text;
        if (op) {
            if (op === '.byte') {
                this.program_counter += 1;
            } else if (op === '.half') {
                this.program_counter += 2;
            } else if (op === '.word') {
                this.program_counter += 4;
            }
        }
    }

    enterPseudo(ctx: PseudoContext) {
        var op = ctx._op.text;
        if (op) {
            if (op === 'move') {
                this.program_counter += 4;
            } else if (['bgt', 'bge', 'ble', 'blt'].includes(op)) {
                this.program_counter += 8;
            }
        }
    }

    enterR_type(ctx: R_typeContext) {
        var op = ctx._op.text;
        if (op) {
            this.program_counter += 4;
        }
    }

    enterI_type(ctx: I_typeContext) {
        var op = ctx._op.text;
        if (op) {
            this.program_counter += 4;
        }
    }

    enterJ_type(ctx: J_typeContext) {
        var op = ctx._op.text;
        if (op) {
            this.program_counter += 4;
        }
    }

}

class SecondScan implements mipsListener {
    program_counter: number = 0;
    label_table: Map<string, number> = new Map();
    output: string[] = [];
    legal: boolean = true;
    diag_line: number[] = [];
    diag_msg: string[] = [];

    enterDirective(ctx: DirectiveContext) {
        if (this.legal) {
            var op = ctx._op.text;
            if (op === '.word') {
                var data = ctx._data.text;
                this.output.push(parseInt(data, 2).toString(16).padStart(8, '0'));
                this.program_counter + 4;
            } else if (op === '.byte') {
                this.program_counter + 1;
            } else if (op === '.half') {
                this.program_counter + 2;
            }
        }
    }

    enterPseudo(ctx: PseudoContext) {
        if (this.legal) {
            var op = ctx._op.text;
            if (op) {
                if (op === 'move') {
                    var rs = reg_table[ctx._rs.text];
                    var rt = reg_table[ctx._rt.text];
                    var code = '000000' + rs + '00000' + rt + '00000100101';
                    this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    this.program_counter += 4;
                } else if (!this.label_table.has(ctx._tag.text!)) {
                    this.legal = false;
                    this.diag_line.push(ctx.start.line);
                    this.diag_msg.push('Unmachted Label: ' + ctx._tag.text!);
                } else {
                    if (op === 'bgt') {
                        var rs = reg_table[ctx._rs.text];
                        var rt = reg_table[ctx._rt.text];
                        var addr = this.label_table.get(ctx._tag.text!);
                        var code1 = '000000' + rt + rs + '0000100000101010';
                        this.output.push(parseInt(code1, 2).toString(16).padStart(8, '0'));
                        var code2 = '0001010000100000' + ToBin(((addr! - this.program_counter) - 4), 16);
                        this.output.push(parseInt(code2, 2).toString(16).padStart(8, '0'));
                        this.program_counter += 8;
                    } else if (op === 'blt') {
                        var rs = reg_table[ctx._rs.text];
                        var rt = reg_table[ctx._rt.text];
                        var addr = this.label_table.get(ctx._tag.text!);
                        var code1 = '000000' + rs + rt + '0000100000101010';
                        this.output.push(parseInt(code1, 2).toString(16).padStart(8, '0'));
                        var code2 = '0001010000100000' + ToBin(((addr! - this.program_counter) - 4), 16);
                        this.output.push(parseInt(code2, 2).toString(16).padStart(8, '0'));
                        this.program_counter += 8;
                    } else if (op === 'bge') {
                        var rs = reg_table[ctx._rs.text];
                        var rt = reg_table[ctx._rt.text];
                        var addr = this.label_table.get(ctx._tag.text!);
                        var code1 = '000000' + rt + rs + '0000100000101010';
                        this.output.push(parseInt(code1, 2).toString(16).padStart(8, '0'));
                        var code2 = '0001000000100000' + ToBin(((addr! - this.program_counter) - 4), 16);
                        this.output.push(parseInt(code2, 2).toString(16).padStart(8, '0'));
                        this.program_counter += 8;
                    } else if (op === 'ble') {
                        var rs = reg_table[ctx._rs.text];
                        var rt = reg_table[ctx._rt.text];
                        var addr = this.label_table.get(ctx._tag.text!);
                        var code1 = '000000' + rs + rt + '0000100000101010';
                        this.output.push(parseInt(code1, 2).toString(16).padStart(8, '0'));
                        var code2 = '0001000000100000' + ToBin(((addr! - this.program_counter) - 4), 16);
                        this.output.push(parseInt(code2, 2).toString(16).padStart(8, '0'));
                        this.program_counter += 8;
                    }
                }
            }
        }
    }

    enterR_type(ctx: R_typeContext) {
        if (this.legal) {
            var op = ctx._op.text;
            if (op) {
                if (['and', 'addu', 'add', 'or', 'sub', 'slt', 'xor', 'nor', 'subu'].includes(op)) {
                    var rd = reg_table[ctx._rd.text];
                    var rs = reg_table[ctx._rs.text];
                    var rt = reg_table[ctx._rt.text];
                    var code = '000000' + rs + rt + rd + '00000' + funct_table[op];
                    this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                } else if (['sll', 'srl', 'sra'].includes(op)) {
                    var rd = reg_table[ctx._rd.text];
                    var rt = reg_table[ctx._rt.text];
                    var shamt = parseInt(ctx._sa.text).toString(2).padStart(5, '0');
                    var code = '00000000000' + rt + rd + shamt + funct_table[op];
                    this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                }
                this.program_counter += 4;
            }
        }
    }

    enterI_type(ctx: I_typeContext) {
        if (this.legal) {
            var op = ctx._op.text;
            if (op) {
                if (['addi', 'slti'].includes(op)) {
                    var rt = reg_table[ctx._rt.text];
                    var rs = reg_table[ctx._rs.text];
                    var imm = parseInt(ctx._simm.text).toString(2).padStart(16, '0');
                    var code = opcode_table[op] + rs + rt + imm;
                    this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                } else if (['addiu', 'andi', 'sltiu', 'ori', 'xori'].includes(op)) {
                    var rt = reg_table[ctx._rt.text];
                    var rs = reg_table[ctx._rs.text];
                    var imm = parseInt(ctx._uimm.text).toString(2).padStart(16, '0');
                    var code = opcode_table[op] + rs + rt + imm;
                    this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                } else if (op === 'lui') {
                    var rt = reg_table[ctx._rt.text];
                    var imm = parseInt(ctx._uimm.text).toString(2).padStart(16, '0');
                    var code = '00111100000' + rt + imm;
                    this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                } else if (['lw', 'sw', 'lb', 'sb', 'lh', 'sh'].includes(op)) {
                    var rt = reg_table[ctx._rt.text];
                    var base = reg_table[ctx._base.text];
                    var offset = parseInt(ctx._offset.text).toString(2).padStart(16, '0');
                    var code = opcode_table[op] + base + rt + offset;
                    this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                } else if (op === 'beq' || op === 'bne') {
                    if (this.label_table.has(ctx._tag.text!)) {
                        var rt = reg_table[ctx._rt.text];
                        var rs = reg_table[ctx._rs.text];
                        var addr = this.label_table.get(ctx._tag.text!);
                        var code = opcode_table[op] + rs + rt + ToBin(((addr! - this.program_counter) - 4), 16);
                        this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    } else {
                        this.legal = false;
                        this.diag_line.push(ctx.start.line);
                        this.diag_msg.push('Unmachted Label: ' + ctx._tag.text!);
                    }
                }
                this.program_counter += 4;
            }
        }
    }

    enterJ_type(ctx: J_typeContext) {
        if (this.legal) {
            var op = ctx._op.text;
            if (op) {
                if (op === 'jalr') {
                    var rs = reg_table[ctx._rs.text];
                    var code = '000000' + rs + '00000' + '11111' + '00000001001';
                    this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                } else if (op === 'jr') {
                    var rs = reg_table[ctx._rs.text];
                    var code = '000000' + rs + '1000'.padStart(21, '0');
                    this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                } else if (op === 'j' || op === 'jal') {
                    if (this.label_table.has(ctx._tag.text!)) {
                        var addr = this.label_table.get(ctx._tag.text!)!.toString(2).padStart(26, '0');
                        var code = opcode_table[op] + addr;
                        this.output.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    } else {
                        this.legal = false;
                        this.diag_line.push(ctx.start.line);
                        this.diag_msg.push('Unmachted Label: ' + ctx._tag.text!);
                    }
                }
                this.program_counter += 4;
            }
        }
    }
}

export function Assemble(doc: vscode.TextDocument, collection: vscode.DiagnosticCollection): boolean {
    var legal: boolean = true;

    var full_path = doc.fileName;
    var input = fs.readFileSync(full_path, 'utf-8');

    let input_stream = new ANTLRInputStream(input);
    let lexer = new mipsLexer(input_stream);
    let token_stream = new CommonTokenStream(lexer);
    let parser = new mipsParser(token_stream);

    let diagnostic: vscode.Diagnostic[] = [];

    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
            let new_diag = new vscode.Diagnostic(
                doc.lineAt(line - 1).range,
                msg,
                vscode.DiagnosticSeverity.Error
            );
            diagnostic.push(new_diag);
        }
    });

    let tree = parser.prog();

    let first_scan: mipsListener = new FirstScan();
    let walker = new ParseTreeWalker();

    walker.walk(first_scan, tree);
    legal = parser.numberOfSyntaxErrors === 0 && first_scan.legal!;
    for (var i = 0; i < first_scan.diag_line!.length; i++) {
        let new_diag = new vscode.Diagnostic(
            doc.lineAt(first_scan.diag_line![i] - 1).range,
            first_scan.diag_msg![i],
            vscode.DiagnosticSeverity.Error
        );
        diagnostic.push(new_diag);
    }

    if (legal) {
        let second_scan: mipsListener = new SecondScan();
        second_scan.label_table = first_scan.label_table;
        walker.walk(second_scan, tree);
        if (second_scan.legal!) {
            var final_path = full_path.substring(0, full_path.lastIndexOf('.')) + '.hex';
            var out_stream = fs.createWriteStream(final_path);
            out_stream.on('error', (err) => {
                throw err;
            });
            second_scan.output!.forEach((val) => {
                out_stream.write(val + '\n');
            });
            out_stream.end();
            collection.clear();
            vscode.workspace.openTextDocument(final_path).then(doc => {
                vscode.window.showTextDocument(doc);
            });
        } else {
            for (var i = 0; i < second_scan.diag_line!.length; i++) {
                let new_diag = new vscode.Diagnostic(
                    doc.lineAt(second_scan.diag_line![i] - 1).range,
                    second_scan.diag_msg![i],
                    vscode.DiagnosticSeverity.Error
                );
                diagnostic.push(new_diag);
            }
            console.log('error!');
            collection.set(doc.uri, diagnostic);
        }
    } else {
        console.log('error!');
        collection.set(doc.uri, diagnostic);
    }

    return legal;
}



// diag_line?: number[];
// diag_msg?: string[];
// program_counter: number;
// legal?: boolean;
// label_table: Map<string, number>;
// output?: string[];
