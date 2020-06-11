import * as fs from 'fs';
import { reg_table, opcode_table, funct_table } from './dis_utils';

enum field_set { data, text };

function ToDec(bin: string): number {
    if (bin[0] === '0') {
        return parseInt(bin, 2);
    } else {
        var rst = parseInt(bin, 2);
        rst <<= 16;
        rst >>= 16;
        return rst;
    }
}

// main disassembling function
export function Disassemble(file_dir: string, file_name: string): string {
    var full_path = file_dir + file_name;
    var disassembled_path = file_dir + file_name.substring(0, file_name.lastIndexOf('.')) + '.asm';

    try {
        var in_str = fs.readFileSync(full_path, 'utf-8');
        var in_arr = in_str.split(/\n/);
        var asm_out: string[] = [];
        var label_table = new Map<number, string>();

        in_arr.forEach((val, idx) => {
            var code = parseInt(val, 16).toString(2).padStart(32, '0');
            var oper = opcode_table[code.substr(0, 6)];
            if (oper === 'jal' || oper === 'j') {
                var target = parseInt(code.substr(6, 26) + '00', 2);
                label_table.set(target, 'TARGET_0x' + target.toString(16));
            } else if (oper === 'beq' || oper === 'bne') {
                var offset = ToDec(code.substr(16, 16));
                var label = 4 * idx + 4 + offset;
                label_table.set(label, 'LABEL_0x' + label.toString(16));
            }
        });

        // label_table.forEach((val, key) => {
        //     console.log(val, key);
        // });
        // console.log('');

        in_arr.forEach((val, idx) => {
            if (label_table.has(4 * idx)) {
                asm_out.push(label_table.get(4 * idx)! + ':');
            }
            var code = parseInt(val, 16).toString(2).padStart(32, '0');
            var opcode = code.substr(0, 6);
            if (opcode === '000000') {
                var funct = code.substr(26, 6);
                if (['add', 'and', 'or', 'sub', 'slt', 'xor', 'nor', 'addu', 'subu'].includes(funct_table[funct])) {
                    var rs = reg_table[code.substr(6, 5)];
                    var rt = reg_table[code.substr(11, 5)];
                    var rd = reg_table[code.substr(16, 5)];
                    asm_out.push(funct_table[funct] + '   \t' + rd + ',\t' + rs + ',\t' + rt);
                } else if (['sll', 'srl', 'sra'].includes(funct_table[funct])) {
                    var rt = reg_table[code.substr(11, 5)];
                    var rd = reg_table[code.substr(16, 5)];
                    var shamt = code.substr(21, 5);
                    asm_out.push(funct_table[funct] + '\t' + rd + ',\t' + rt + ',\t' + shamt);
                } else if (funct_table[funct] === 'jr') {
                    var rs = reg_table[code.substr(6, 5)];
                    asm_out.push('jr ' + rs);
                } else if (funct_table[funct] === 'jalr') {
                    var rs = reg_table[code.substr(6, 5)];
                    var rd = reg_table[code.substr(16, 5)];
                    asm_out.push('jalr ' + rd + ',\t' + rs);
                }
            } else {
                if (['addiu', 'ori', 'xori', 'sltiu', 'andi'].includes(opcode_table[opcode])) {
                    var rs = reg_table[code.substr(6, 5)];
                    var rt = reg_table[code.substr(11, 5)];
                    var imm = parseInt(code.substr(16, 16), 2);
                    asm_out.push(opcode_table[opcode] + '\t' + rt + ',\t' + rs + ',\t' + imm);  
                } else if(['addi', 'slti'].includes(opcode_table[opcode])){
                    var rs = reg_table[code.substr(6, 5)];
                    var rt = reg_table[code.substr(11, 5)];
                    var imm = ToDec(code.substr(16, 16)); 
                    asm_out.push(opcode_table[opcode] + '\t' + rt + ',\t' + rs + ',\t' + imm);
                } else if (['beq', 'bne'].includes(opcode_table[opcode])) {
                    var rs = reg_table[code.substr(6, 5)];
                    var rt = reg_table[code.substr(11, 5)];
                    var label = label_table.get(ToDec(code.substr(16, 16)) + 4 * idx + 4);
                    asm_out.push(opcode_table[opcode] + '\t' + rs + ',\t' + rt + ',\t' + label);
                } else if (['j', 'jal'].includes(opcode_table[opcode])) {
                    var target = parseInt(code.substr(6, 26), 2);
                    asm_out.push(opcode_table[opcode] + '  \t' + label_table.get(target * 4));
                } else if (['lw', 'sw', 'lb', 'sb', 'lh', 'sh'].includes(opcode_table[opcode])) {
                    var base = reg_table[code.substr(6, 5)];
                    var rt = reg_table[code.substr(11, 5)];
                    var offset = ToDec(code.substr(16, 16));
                    asm_out.push(opcode_table[opcode] + '\t' + rt + ',\t' + offset + '(' + base + ')');
                } else if (opcode_table[opcode] === 'lui') {
                    var rt = reg_table[code.substr(11, 5)];
                    var imm = ToDec(code.substr(16, 16)) << 16;
                    asm_out.push('lui\t' + rt + ',\t' + imm);
                }     
            }
        });
               
        var outstream = fs.createWriteStream(disassembled_path);
        outstream.on('error', (err) => {
            throw err;
        });
        var idx: number = 0;
        asm_out.forEach((val) => {
            if (val.substr(val.length - 1, 1) === ':') {
                outstream.write(val + '\n');
            } else {
                outstream.write(val + '\t\t# PC-Value:\t' + idx + '\n');
                idx += 4;
            }
        });
        outstream.end();
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return disassembled_path;
}
