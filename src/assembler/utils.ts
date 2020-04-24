export const inst_set: string[] = [
    'add', 'addi', 'and', 'or', 'ori', 'sll', 'srl',
    'sub', 'lui', 'slt', 'slti', 'beq', 'bne',
    'j', 'jal', 'jr', 'lw', 'sw',
];

export const directive_set: string[] = [
    '.byte', '.half', '.word', '.data', '.text'
];

export const reg_table: { [key: string]: string } = {
    '$zero': '00000', '$at': '00001', '$v0': '00010',
    '$v1': '00011', '$a0': '00100', '$a1': '00101',
    '$a2': '00110', '$a3': '00111', '$t0': '01000',
    '$t1': '01001', '$t2': '01010', '$t3': '01011',
    '$t4': '01100', '$t5': '01101', '$t6': '01110',
    '$t7': '01111', '$s0': '10000', '$s1': '10001',
    '$s2': '10010', '$s3': '10011', '$s4': '10100',
    '$s5': '10101', '$s6': '10110', '$s7': '10111',
    '$t8': '11000', '$t9': '11001', '$gp': '11100',
    '$sp': '11101', '$fp': '11110', '$ra': '11111'
};

export const opcode_table: { [key: string]: number } = {
    'add': 0x0, 'addi': 0x8, 'and': 0x0, 'or': 0x0,
    'ori': 0xd, 'sll': 0x0, 'srl': 0x0, 'sub': 0x0,
    'lui': 0xf, 'slt': 0x0, 'slti': 0xa, 'beq': 0x4,
    'bne': 0x5, 'j': 0x2, 'jal': 0x3, 'jr': 0x0,
    'lw': 0x23, 'sw': 0x2b
};

export const funct_table: { [key: string]: string } = {
    'add': '100000', 'and': '100100', 'or': '100101',
    'sll': '000000', 'srl': '000010', 'sub': '100010',
    'slt': '101010', 'jr': '001000'
};

