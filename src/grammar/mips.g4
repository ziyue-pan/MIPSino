grammar mips;

prog: stat+;

stat:
	inst NEWLINE
	| inst
	| label inst NEWLINE
	| label inst
	| label NEWLINE
	| label
	| NEWLINE
	| COMMENT;

inst: r_type | i_type | j_type | pseudo | directive;

directive:
	op = '.byte' data = unsigned_imm
	| op = '.half' data = unsigned_imm
	| op = '.word' data = unsigned_imm
	| op = '.data'
	| op = '.text';

pseudo:
	op = 'move' rt = reg ',' rs = reg
	| op = 'bgt' rs = reg ',' rt = reg ',' tag = IDEN
	| op = 'blt' rs = reg ',' rt = reg ',' tag = IDEN
	| op = 'bge' rs = reg ',' rt = reg ',' tag = IDEN
	| op = 'ble' rs = reg ',' rt = reg ',' tag = IDEN;

r_type:
	op = 'add' rd = reg ',' rs = reg ',' rt = reg
	| op = 'addu' rd = reg ',' rs = reg ',' rt = reg
	| op = 'and' rd = reg ',' rs = reg ',' rt = reg
	| op = 'sub' rd = reg ',' rs = reg ',' rt = reg
	| op = 'subu' rd = reg ',' rs = reg ',' rt = reg
	| op = 'or' rd = reg ',' rs = reg ',' rt = reg
	| op = 'nor' rd = reg ',' rs = reg ',' rt = reg
	| op = 'xor' rd = reg ',' rs = reg ',' rt = reg
	| op = 'slt' rd = reg ',' rs = reg ',' rt = reg
	| op = 'sll' rd = reg ',' rt = reg ',' sa = unsigned_imm
	| op = 'srl' rd = reg ',' rt = reg ',' sa = unsigned_imm
	| op = 'sra' rd = reg ',' rt = reg ',' sa = unsigned_imm;

i_type:
	op = 'addi' rt = reg ',' rs = reg ',' simm = signed_imm
	| op = 'addiu' rt = reg ',' rs = reg ',' uimm = unsigned_imm
	| op = 'andi' rt = reg ',' rs = reg ',' uimm = unsigned_imm
	| op = 'slti' rt = reg ',' rs = reg ',' simm = signed_imm
	| op = 'sltiu' rt = reg ',' rs = reg ',' uimm = unsigned_imm
	| op = 'lui' rt = reg ',' uimm = unsigned_imm
	| op = 'ori' rt = reg ',' rs = reg ',' uimm = unsigned_imm
	| op = 'xori' rt = reg ',' rs = reg ',' uimm = unsigned_imm
	| op = 'lw' rt = reg ',' offset = signed_imm '(' base = reg ')'
	| op = 'lh' rt = reg ',' offset = signed_imm '(' base = reg ')'
	| op = 'lb' rt = reg ',' offset = signed_imm '(' base = reg ')'
	| op = 'sw' rt = reg ',' offset = signed_imm '(' base = reg ')'
	| op = 'sh' rt = reg ',' offset = signed_imm '(' base = reg ')'
	| op = 'sb' rt = reg ',' offset = signed_imm '(' base = reg ')'
	| op = 'beq' rs = reg ',' rt = reg ',' tag = IDEN
	| op = 'bne' rs = reg ',' rt = reg ',' tag = IDEN;

j_type:
	op = 'jalr' rs = reg
	| op = 'jr' rs = reg
	| op = 'j' tag = IDEN
	| op = 'jal' tag = IDEN;

COMMENT: '#' .*? NEWLINE -> skip;
NEWLINE: [\r\n]+;

label: IDEN ':';

IDEN: LETTER ( LETTER | DIGIT )* ;

DIGIT: [0-9];
LETTER: [a-zA-Z_];


WS: [ \t]+ -> skip;
NUM: '0' | [1-9][0-9]*;
HEX_NUM: '0' [xX][a-fA-F0-9]+;
ALPHA: [a-zA-Z]+;

unsigned_imm: NUM | HEX_NUM;
signed_imm: '-' unsigned_imm | unsigned_imm;

reg:
	'$zero'
	| '$at'
	| '$v0'
	| '$v1'
	| '$a0'
	| '$a1'
	| '$a2'
	| '$a3'
	| '$t0'
	| '$t1'
	| '$t2'
	| '$t3'
	| '$t4'
	| '$t5'
	| '$t6'
	| '$t7'
	| '$s0'
	| '$s1'
	| '$s2'
	| '$s3'
	| '$s4'
	| '$s5'
	| '$s6'
	| '$s7'
	| '$t8'
	| '$t9'
	| '$gp'
	| '$sp'
	| '$fp'
	| '$ra'
	| '$0';

