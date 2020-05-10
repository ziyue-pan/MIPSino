export const legal_inst: string[] = [
    'add', 'addi', 'and', 'or', 'ori', 'sll', 'srl',
    'sub', 'lui', 'slt', 'slti', 'beq', 'bne', 'j',
    'jal', 'jr', 'lw', 'sw', 'xor', 'nor', 'sra',
    'xori', 'lb', 'sb', 'lh', 'sh', 'jalr', '.byte',
    '.half', '.word', '.data', '.text', 'bgt', 'bge',
    'blt', 'ble', 'move'
];

export const legal_regs: string[] = [
    '$zero', '$at', '$v0', '$v1', '$a0', '$a1', '$a2',
    '$a3', '$t0', '$t1', '$t2', '$t3', '$t4', '$t5',
    '$t6', '$t7', '$s0', '$s1', '$s2', '$s3', '$s4',
    '$s5', '$s6', '$s7', '$t8', '$t9', '$gp', '$sp',
    '$fp', '$ra', '$0'
];

// only one instruction
export const no_param: string[] = [
    '.data', '.text'
];

// got only one parameter
export const one_param: string[] = [
    'j', 'jal', 'jr', '.byte', '.half', '.word'
];

// got one quote
export const two_param: string[] = [
    'lui', 'jalr', 'lw', 'sw', 'move', 'lb', 'sb', 'lh', 'sh'
];

// got two quotes
export const three_param: string[] = [
    'add', 'and', 'addi', 'or', 'ori', 'sll', 'srl',
    'sub', 'slt', 'slti', 'beq', 'bne', 'xor', 'nor',
    'sra', 'xori', 'bgt', 'bge', 'blt', 'ble'
];