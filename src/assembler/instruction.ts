export const inst_set: string[] = [
    'add', 'addi', 'and', 'or', 'ori', 'sll', 'srl',
    'sub', 'lui', 'slt', 'slti', 'beq', 'bne',
    'j', 'jal', 'jr', 'lw', 'sw',
];

export const opcode_table: { [key: string]: number } = {
    'add': 0x0, 'addi': 0x8, 'and': 0x0, 'or': 0x0,
    'ori': 0xd, 'sll': 0x0, 'srl': 0x0, 'sub': 0x0,
    'lui': 0xf, 'slt': 0x0, 'slti': 0xa, 'beq': 0x4,
    'bne': 0x5, 'j': 0x2, 'jal': 0x3, 'jr': 0x0,
    'lw': 0x23, 'sw': 0x2b
};

export const funct_table: { [key: string]: number } = {
    'add': 0x20, 'and': 0x24, 'or': 0x25, 'sll': 0x0,
    'srl': 0x2, 'sub': 0x22, 'slt': 0x2a, 'jr': 0x8
};