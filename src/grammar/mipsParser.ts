// Generated from src/grammar/mips.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { mipsListener } from "./mipsListener";

export class mipsParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly COMMENT = 79;
	public static readonly NEWLINE = 80;
	public static readonly IDEN = 81;
	public static readonly DIGIT = 82;
	public static readonly LETTER = 83;
	public static readonly WS = 84;
	public static readonly NUM = 85;
	public static readonly HEX_NUM = 86;
	public static readonly ALPHA = 87;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_inst = 2;
	public static readonly RULE_directive = 3;
	public static readonly RULE_pseudo = 4;
	public static readonly RULE_r_type = 5;
	public static readonly RULE_i_type = 6;
	public static readonly RULE_j_type = 7;
	public static readonly RULE_label = 8;
	public static readonly RULE_unsigned_imm = 9;
	public static readonly RULE_signed_imm = 10;
	public static readonly RULE_reg = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "inst", "directive", "pseudo", "r_type", "i_type", "j_type", 
		"label", "unsigned_imm", "signed_imm", "reg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.byte'", "'.half'", "'.word'", "'.data'", "'.text'", "'move'", 
		"','", "'bgt'", "'blt'", "'bge'", "'ble'", "'add'", "'addu'", "'and'", 
		"'sub'", "'subu'", "'or'", "'nor'", "'xor'", "'slt'", "'sll'", "'srl'", 
		"'sra'", "'addi'", "'addiu'", "'andi'", "'slti'", "'sltiu'", "'lui'", 
		"'ori'", "'xori'", "'lw'", "'('", "')'", "'lh'", "'lb'", "'sw'", "'sh'", 
		"'sb'", "'beq'", "'bne'", "'jalr'", "'jr'", "'j'", "'jal'", "':'", "'-'", 
		"'$zero'", "'$at'", "'$v0'", "'$v1'", "'$a0'", "'$a1'", "'$a2'", "'$a3'", 
		"'$t0'", "'$t1'", "'$t2'", "'$t3'", "'$t4'", "'$t5'", "'$t6'", "'$t7'", 
		"'$s0'", "'$s1'", "'$s2'", "'$s3'", "'$s4'", "'$s5'", "'$s6'", "'$s7'", 
		"'$t8'", "'$t9'", "'$gp'", "'$sp'", "'$fp'", "'$ra'", "'$0'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "COMMENT", "NEWLINE", "IDEN", "DIGIT", "LETTER", 
		"WS", "NUM", "HEX_NUM", "ALPHA",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mipsParser._LITERAL_NAMES, mipsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mipsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "mips.g4"; }

	// @Override
	public get ruleNames(): string[] { return mipsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return mipsParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(mipsParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, mipsParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 24;
				this.stat();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mipsParser.T__0) | (1 << mipsParser.T__1) | (1 << mipsParser.T__2) | (1 << mipsParser.T__3) | (1 << mipsParser.T__4) | (1 << mipsParser.T__5) | (1 << mipsParser.T__7) | (1 << mipsParser.T__8) | (1 << mipsParser.T__9) | (1 << mipsParser.T__10) | (1 << mipsParser.T__11) | (1 << mipsParser.T__12) | (1 << mipsParser.T__13) | (1 << mipsParser.T__14) | (1 << mipsParser.T__15) | (1 << mipsParser.T__16) | (1 << mipsParser.T__17) | (1 << mipsParser.T__18) | (1 << mipsParser.T__19) | (1 << mipsParser.T__20) | (1 << mipsParser.T__21) | (1 << mipsParser.T__22) | (1 << mipsParser.T__23) | (1 << mipsParser.T__24) | (1 << mipsParser.T__25) | (1 << mipsParser.T__26) | (1 << mipsParser.T__27) | (1 << mipsParser.T__28) | (1 << mipsParser.T__29) | (1 << mipsParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (mipsParser.T__31 - 32)) | (1 << (mipsParser.T__34 - 32)) | (1 << (mipsParser.T__35 - 32)) | (1 << (mipsParser.T__36 - 32)) | (1 << (mipsParser.T__37 - 32)) | (1 << (mipsParser.T__38 - 32)) | (1 << (mipsParser.T__39 - 32)) | (1 << (mipsParser.T__40 - 32)) | (1 << (mipsParser.T__41 - 32)) | (1 << (mipsParser.T__42 - 32)) | (1 << (mipsParser.T__43 - 32)) | (1 << (mipsParser.T__44 - 32)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (mipsParser.COMMENT - 79)) | (1 << (mipsParser.NEWLINE - 79)) | (1 << (mipsParser.IDEN - 79)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, mipsParser.RULE_stat);
		try {
			this.state = 46;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 29;
				this.inst();
				this.state = 30;
				this.match(mipsParser.NEWLINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 32;
				this.inst();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 33;
				this.label();
				this.state = 34;
				this.inst();
				this.state = 35;
				this.match(mipsParser.NEWLINE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 37;
				this.label();
				this.state = 38;
				this.inst();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 40;
				this.label();
				this.state = 41;
				this.match(mipsParser.NEWLINE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 43;
				this.label();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 44;
				this.match(mipsParser.NEWLINE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 45;
				this.match(mipsParser.COMMENT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inst(): InstContext {
		let _localctx: InstContext = new InstContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mipsParser.RULE_inst);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mipsParser.T__11:
			case mipsParser.T__12:
			case mipsParser.T__13:
			case mipsParser.T__14:
			case mipsParser.T__15:
			case mipsParser.T__16:
			case mipsParser.T__17:
			case mipsParser.T__18:
			case mipsParser.T__19:
			case mipsParser.T__20:
			case mipsParser.T__21:
			case mipsParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.r_type();
				}
				break;
			case mipsParser.T__23:
			case mipsParser.T__24:
			case mipsParser.T__25:
			case mipsParser.T__26:
			case mipsParser.T__27:
			case mipsParser.T__28:
			case mipsParser.T__29:
			case mipsParser.T__30:
			case mipsParser.T__31:
			case mipsParser.T__34:
			case mipsParser.T__35:
			case mipsParser.T__36:
			case mipsParser.T__37:
			case mipsParser.T__38:
			case mipsParser.T__39:
			case mipsParser.T__40:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.i_type();
				}
				break;
			case mipsParser.T__41:
			case mipsParser.T__42:
			case mipsParser.T__43:
			case mipsParser.T__44:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.j_type();
				}
				break;
			case mipsParser.T__5:
			case mipsParser.T__7:
			case mipsParser.T__8:
			case mipsParser.T__9:
			case mipsParser.T__10:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 51;
				this.pseudo();
				}
				break;
			case mipsParser.T__0:
			case mipsParser.T__1:
			case mipsParser.T__2:
			case mipsParser.T__3:
			case mipsParser.T__4:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 52;
				this.directive();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, mipsParser.RULE_directive);
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mipsParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				_localctx._op = this.match(mipsParser.T__0);
				this.state = 56;
				_localctx._data = this.unsigned_imm();
				}
				break;
			case mipsParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				_localctx._op = this.match(mipsParser.T__1);
				this.state = 58;
				_localctx._data = this.unsigned_imm();
				}
				break;
			case mipsParser.T__2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 59;
				_localctx._op = this.match(mipsParser.T__2);
				this.state = 60;
				_localctx._data = this.unsigned_imm();
				}
				break;
			case mipsParser.T__3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 61;
				_localctx._op = this.match(mipsParser.T__3);
				}
				break;
			case mipsParser.T__4:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 62;
				_localctx._op = this.match(mipsParser.T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pseudo(): PseudoContext {
		let _localctx: PseudoContext = new PseudoContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, mipsParser.RULE_pseudo);
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mipsParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				_localctx._op = this.match(mipsParser.T__5);
				this.state = 66;
				_localctx._rt = this.reg();
				this.state = 67;
				this.match(mipsParser.T__6);
				this.state = 68;
				_localctx._rs = this.reg();
				}
				break;
			case mipsParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
				_localctx._op = this.match(mipsParser.T__7);
				this.state = 71;
				_localctx._rs = this.reg();
				this.state = 72;
				this.match(mipsParser.T__6);
				this.state = 73;
				_localctx._rt = this.reg();
				this.state = 74;
				this.match(mipsParser.T__6);
				this.state = 75;
				_localctx._tag = this.match(mipsParser.IDEN);
				}
				break;
			case mipsParser.T__8:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 77;
				_localctx._op = this.match(mipsParser.T__8);
				this.state = 78;
				_localctx._rs = this.reg();
				this.state = 79;
				this.match(mipsParser.T__6);
				this.state = 80;
				_localctx._rt = this.reg();
				this.state = 81;
				this.match(mipsParser.T__6);
				this.state = 82;
				_localctx._tag = this.match(mipsParser.IDEN);
				}
				break;
			case mipsParser.T__9:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 84;
				_localctx._op = this.match(mipsParser.T__9);
				this.state = 85;
				_localctx._rs = this.reg();
				this.state = 86;
				this.match(mipsParser.T__6);
				this.state = 87;
				_localctx._rt = this.reg();
				this.state = 88;
				this.match(mipsParser.T__6);
				this.state = 89;
				_localctx._tag = this.match(mipsParser.IDEN);
				}
				break;
			case mipsParser.T__10:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 91;
				_localctx._op = this.match(mipsParser.T__10);
				this.state = 92;
				_localctx._rs = this.reg();
				this.state = 93;
				this.match(mipsParser.T__6);
				this.state = 94;
				_localctx._rt = this.reg();
				this.state = 95;
				this.match(mipsParser.T__6);
				this.state = 96;
				_localctx._tag = this.match(mipsParser.IDEN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public r_type(): R_typeContext {
		let _localctx: R_typeContext = new R_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mipsParser.RULE_r_type);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mipsParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				_localctx._op = this.match(mipsParser.T__11);
				this.state = 101;
				_localctx._rd = this.reg();
				this.state = 102;
				this.match(mipsParser.T__6);
				this.state = 103;
				_localctx._rs = this.reg();
				this.state = 104;
				this.match(mipsParser.T__6);
				this.state = 105;
				_localctx._rt = this.reg();
				}
				break;
			case mipsParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				_localctx._op = this.match(mipsParser.T__12);
				this.state = 108;
				_localctx._rd = this.reg();
				this.state = 109;
				this.match(mipsParser.T__6);
				this.state = 110;
				_localctx._rs = this.reg();
				this.state = 111;
				this.match(mipsParser.T__6);
				this.state = 112;
				_localctx._rt = this.reg();
				}
				break;
			case mipsParser.T__13:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				_localctx._op = this.match(mipsParser.T__13);
				this.state = 115;
				_localctx._rd = this.reg();
				this.state = 116;
				this.match(mipsParser.T__6);
				this.state = 117;
				_localctx._rs = this.reg();
				this.state = 118;
				this.match(mipsParser.T__6);
				this.state = 119;
				_localctx._rt = this.reg();
				}
				break;
			case mipsParser.T__14:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 121;
				_localctx._op = this.match(mipsParser.T__14);
				this.state = 122;
				_localctx._rd = this.reg();
				this.state = 123;
				this.match(mipsParser.T__6);
				this.state = 124;
				_localctx._rs = this.reg();
				this.state = 125;
				this.match(mipsParser.T__6);
				this.state = 126;
				_localctx._rt = this.reg();
				}
				break;
			case mipsParser.T__15:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 128;
				_localctx._op = this.match(mipsParser.T__15);
				this.state = 129;
				_localctx._rd = this.reg();
				this.state = 130;
				this.match(mipsParser.T__6);
				this.state = 131;
				_localctx._rs = this.reg();
				this.state = 132;
				this.match(mipsParser.T__6);
				this.state = 133;
				_localctx._rt = this.reg();
				}
				break;
			case mipsParser.T__16:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 135;
				_localctx._op = this.match(mipsParser.T__16);
				this.state = 136;
				_localctx._rd = this.reg();
				this.state = 137;
				this.match(mipsParser.T__6);
				this.state = 138;
				_localctx._rs = this.reg();
				this.state = 139;
				this.match(mipsParser.T__6);
				this.state = 140;
				_localctx._rt = this.reg();
				}
				break;
			case mipsParser.T__17:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 142;
				_localctx._op = this.match(mipsParser.T__17);
				this.state = 143;
				_localctx._rd = this.reg();
				this.state = 144;
				this.match(mipsParser.T__6);
				this.state = 145;
				_localctx._rs = this.reg();
				this.state = 146;
				this.match(mipsParser.T__6);
				this.state = 147;
				_localctx._rt = this.reg();
				}
				break;
			case mipsParser.T__18:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 149;
				_localctx._op = this.match(mipsParser.T__18);
				this.state = 150;
				_localctx._rd = this.reg();
				this.state = 151;
				this.match(mipsParser.T__6);
				this.state = 152;
				_localctx._rs = this.reg();
				this.state = 153;
				this.match(mipsParser.T__6);
				this.state = 154;
				_localctx._rt = this.reg();
				}
				break;
			case mipsParser.T__19:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 156;
				_localctx._op = this.match(mipsParser.T__19);
				this.state = 157;
				_localctx._rd = this.reg();
				this.state = 158;
				this.match(mipsParser.T__6);
				this.state = 159;
				_localctx._rs = this.reg();
				this.state = 160;
				this.match(mipsParser.T__6);
				this.state = 161;
				_localctx._rt = this.reg();
				}
				break;
			case mipsParser.T__20:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 163;
				_localctx._op = this.match(mipsParser.T__20);
				this.state = 164;
				_localctx._rd = this.reg();
				this.state = 165;
				this.match(mipsParser.T__6);
				this.state = 166;
				_localctx._rt = this.reg();
				this.state = 167;
				this.match(mipsParser.T__6);
				this.state = 168;
				_localctx._sa = this.unsigned_imm();
				}
				break;
			case mipsParser.T__21:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 170;
				_localctx._op = this.match(mipsParser.T__21);
				this.state = 171;
				_localctx._rd = this.reg();
				this.state = 172;
				this.match(mipsParser.T__6);
				this.state = 173;
				_localctx._rt = this.reg();
				this.state = 174;
				this.match(mipsParser.T__6);
				this.state = 175;
				_localctx._sa = this.unsigned_imm();
				}
				break;
			case mipsParser.T__22:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 177;
				_localctx._op = this.match(mipsParser.T__22);
				this.state = 178;
				_localctx._rd = this.reg();
				this.state = 179;
				this.match(mipsParser.T__6);
				this.state = 180;
				_localctx._rt = this.reg();
				this.state = 181;
				this.match(mipsParser.T__6);
				this.state = 182;
				_localctx._sa = this.unsigned_imm();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i_type(): I_typeContext {
		let _localctx: I_typeContext = new I_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, mipsParser.RULE_i_type);
		try {
			this.state = 302;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mipsParser.T__23:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 186;
				_localctx._op = this.match(mipsParser.T__23);
				this.state = 187;
				_localctx._rt = this.reg();
				this.state = 188;
				this.match(mipsParser.T__6);
				this.state = 189;
				_localctx._rs = this.reg();
				this.state = 190;
				this.match(mipsParser.T__6);
				this.state = 191;
				_localctx._simm = this.signed_imm();
				}
				break;
			case mipsParser.T__24:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 193;
				_localctx._op = this.match(mipsParser.T__24);
				this.state = 194;
				_localctx._rt = this.reg();
				this.state = 195;
				this.match(mipsParser.T__6);
				this.state = 196;
				_localctx._rs = this.reg();
				this.state = 197;
				this.match(mipsParser.T__6);
				this.state = 198;
				_localctx._uimm = this.unsigned_imm();
				}
				break;
			case mipsParser.T__25:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 200;
				_localctx._op = this.match(mipsParser.T__25);
				this.state = 201;
				_localctx._rt = this.reg();
				this.state = 202;
				this.match(mipsParser.T__6);
				this.state = 203;
				_localctx._rs = this.reg();
				this.state = 204;
				this.match(mipsParser.T__6);
				this.state = 205;
				_localctx._uimm = this.unsigned_imm();
				}
				break;
			case mipsParser.T__26:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 207;
				_localctx._op = this.match(mipsParser.T__26);
				this.state = 208;
				_localctx._rt = this.reg();
				this.state = 209;
				this.match(mipsParser.T__6);
				this.state = 210;
				_localctx._rs = this.reg();
				this.state = 211;
				this.match(mipsParser.T__6);
				this.state = 212;
				_localctx._simm = this.signed_imm();
				}
				break;
			case mipsParser.T__27:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 214;
				_localctx._op = this.match(mipsParser.T__27);
				this.state = 215;
				_localctx._rt = this.reg();
				this.state = 216;
				this.match(mipsParser.T__6);
				this.state = 217;
				_localctx._rs = this.reg();
				this.state = 218;
				this.match(mipsParser.T__6);
				this.state = 219;
				_localctx._uimm = this.unsigned_imm();
				}
				break;
			case mipsParser.T__28:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 221;
				_localctx._op = this.match(mipsParser.T__28);
				this.state = 222;
				_localctx._rt = this.reg();
				this.state = 223;
				this.match(mipsParser.T__6);
				this.state = 224;
				_localctx._uimm = this.unsigned_imm();
				}
				break;
			case mipsParser.T__29:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 226;
				_localctx._op = this.match(mipsParser.T__29);
				this.state = 227;
				_localctx._rt = this.reg();
				this.state = 228;
				this.match(mipsParser.T__6);
				this.state = 229;
				_localctx._rs = this.reg();
				this.state = 230;
				this.match(mipsParser.T__6);
				this.state = 231;
				_localctx._uimm = this.unsigned_imm();
				}
				break;
			case mipsParser.T__30:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 233;
				_localctx._op = this.match(mipsParser.T__30);
				this.state = 234;
				_localctx._rt = this.reg();
				this.state = 235;
				this.match(mipsParser.T__6);
				this.state = 236;
				_localctx._rs = this.reg();
				this.state = 237;
				this.match(mipsParser.T__6);
				this.state = 238;
				_localctx._uimm = this.unsigned_imm();
				}
				break;
			case mipsParser.T__31:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 240;
				_localctx._op = this.match(mipsParser.T__31);
				this.state = 241;
				_localctx._rt = this.reg();
				this.state = 242;
				this.match(mipsParser.T__6);
				this.state = 243;
				_localctx._offset = this.signed_imm();
				this.state = 244;
				this.match(mipsParser.T__32);
				this.state = 245;
				_localctx._base = this.reg();
				this.state = 246;
				this.match(mipsParser.T__33);
				}
				break;
			case mipsParser.T__34:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 248;
				_localctx._op = this.match(mipsParser.T__34);
				this.state = 249;
				_localctx._rt = this.reg();
				this.state = 250;
				this.match(mipsParser.T__6);
				this.state = 251;
				_localctx._offset = this.signed_imm();
				this.state = 252;
				this.match(mipsParser.T__32);
				this.state = 253;
				_localctx._base = this.reg();
				this.state = 254;
				this.match(mipsParser.T__33);
				}
				break;
			case mipsParser.T__35:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 256;
				_localctx._op = this.match(mipsParser.T__35);
				this.state = 257;
				_localctx._rt = this.reg();
				this.state = 258;
				this.match(mipsParser.T__6);
				this.state = 259;
				_localctx._offset = this.signed_imm();
				this.state = 260;
				this.match(mipsParser.T__32);
				this.state = 261;
				_localctx._base = this.reg();
				this.state = 262;
				this.match(mipsParser.T__33);
				}
				break;
			case mipsParser.T__36:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 264;
				_localctx._op = this.match(mipsParser.T__36);
				this.state = 265;
				_localctx._rt = this.reg();
				this.state = 266;
				this.match(mipsParser.T__6);
				this.state = 267;
				_localctx._offset = this.signed_imm();
				this.state = 268;
				this.match(mipsParser.T__32);
				this.state = 269;
				_localctx._base = this.reg();
				this.state = 270;
				this.match(mipsParser.T__33);
				}
				break;
			case mipsParser.T__37:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 272;
				_localctx._op = this.match(mipsParser.T__37);
				this.state = 273;
				_localctx._rt = this.reg();
				this.state = 274;
				this.match(mipsParser.T__6);
				this.state = 275;
				_localctx._offset = this.signed_imm();
				this.state = 276;
				this.match(mipsParser.T__32);
				this.state = 277;
				_localctx._base = this.reg();
				this.state = 278;
				this.match(mipsParser.T__33);
				}
				break;
			case mipsParser.T__38:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 280;
				_localctx._op = this.match(mipsParser.T__38);
				this.state = 281;
				_localctx._rt = this.reg();
				this.state = 282;
				this.match(mipsParser.T__6);
				this.state = 283;
				_localctx._offset = this.signed_imm();
				this.state = 284;
				this.match(mipsParser.T__32);
				this.state = 285;
				_localctx._base = this.reg();
				this.state = 286;
				this.match(mipsParser.T__33);
				}
				break;
			case mipsParser.T__39:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 288;
				_localctx._op = this.match(mipsParser.T__39);
				this.state = 289;
				_localctx._rs = this.reg();
				this.state = 290;
				this.match(mipsParser.T__6);
				this.state = 291;
				_localctx._rt = this.reg();
				this.state = 292;
				this.match(mipsParser.T__6);
				this.state = 293;
				_localctx._tag = this.match(mipsParser.IDEN);
				}
				break;
			case mipsParser.T__40:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 295;
				_localctx._op = this.match(mipsParser.T__40);
				this.state = 296;
				_localctx._rs = this.reg();
				this.state = 297;
				this.match(mipsParser.T__6);
				this.state = 298;
				_localctx._rt = this.reg();
				this.state = 299;
				this.match(mipsParser.T__6);
				this.state = 300;
				_localctx._tag = this.match(mipsParser.IDEN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public j_type(): J_typeContext {
		let _localctx: J_typeContext = new J_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, mipsParser.RULE_j_type);
		try {
			this.state = 312;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mipsParser.T__41:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				_localctx._op = this.match(mipsParser.T__41);
				this.state = 305;
				_localctx._rs = this.reg();
				}
				break;
			case mipsParser.T__42:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 306;
				_localctx._op = this.match(mipsParser.T__42);
				this.state = 307;
				_localctx._rs = this.reg();
				}
				break;
			case mipsParser.T__43:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 308;
				_localctx._op = this.match(mipsParser.T__43);
				this.state = 309;
				_localctx._tag = this.match(mipsParser.IDEN);
				}
				break;
			case mipsParser.T__44:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 310;
				_localctx._op = this.match(mipsParser.T__44);
				this.state = 311;
				_localctx._tag = this.match(mipsParser.IDEN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, mipsParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(mipsParser.IDEN);
			this.state = 315;
			this.match(mipsParser.T__45);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsigned_imm(): Unsigned_immContext {
		let _localctx: Unsigned_immContext = new Unsigned_immContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mipsParser.RULE_unsigned_imm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			_la = this._input.LA(1);
			if (!(_la === mipsParser.NUM || _la === mipsParser.HEX_NUM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signed_imm(): Signed_immContext {
		let _localctx: Signed_immContext = new Signed_immContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mipsParser.RULE_signed_imm);
		try {
			this.state = 322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mipsParser.T__46:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.match(mipsParser.T__46);
				this.state = 320;
				this.unsigned_imm();
				}
				break;
			case mipsParser.NUM:
			case mipsParser.HEX_NUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.unsigned_imm();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reg(): RegContext {
		let _localctx: RegContext = new RegContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mipsParser.RULE_reg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (mipsParser.T__47 - 48)) | (1 << (mipsParser.T__48 - 48)) | (1 << (mipsParser.T__49 - 48)) | (1 << (mipsParser.T__50 - 48)) | (1 << (mipsParser.T__51 - 48)) | (1 << (mipsParser.T__52 - 48)) | (1 << (mipsParser.T__53 - 48)) | (1 << (mipsParser.T__54 - 48)) | (1 << (mipsParser.T__55 - 48)) | (1 << (mipsParser.T__56 - 48)) | (1 << (mipsParser.T__57 - 48)) | (1 << (mipsParser.T__58 - 48)) | (1 << (mipsParser.T__59 - 48)) | (1 << (mipsParser.T__60 - 48)) | (1 << (mipsParser.T__61 - 48)) | (1 << (mipsParser.T__62 - 48)) | (1 << (mipsParser.T__63 - 48)) | (1 << (mipsParser.T__64 - 48)) | (1 << (mipsParser.T__65 - 48)) | (1 << (mipsParser.T__66 - 48)) | (1 << (mipsParser.T__67 - 48)) | (1 << (mipsParser.T__68 - 48)) | (1 << (mipsParser.T__69 - 48)) | (1 << (mipsParser.T__70 - 48)) | (1 << (mipsParser.T__71 - 48)) | (1 << (mipsParser.T__72 - 48)) | (1 << (mipsParser.T__73 - 48)) | (1 << (mipsParser.T__74 - 48)) | (1 << (mipsParser.T__75 - 48)) | (1 << (mipsParser.T__76 - 48)) | (1 << (mipsParser.T__77 - 48)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Y\u0149\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x06\x02\x1C\n\x02\r\x02\x0E\x02\x1D\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x031\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x048\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05B\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06e\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xBB\n" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0131\n" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u013B\n\t\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\u0145\n\f\x03\r\x03" +
		"\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x04\x03\x02WX\x03\x02" +
		"2P\x02\u016E\x02\x1B\x03\x02\x02\x02\x040\x03\x02\x02\x02\x067\x03\x02" +
		"\x02\x02\bA\x03\x02\x02\x02\nd\x03\x02\x02\x02\f\xBA\x03\x02\x02\x02\x0E" +
		"\u0130\x03\x02\x02\x02\x10\u013A\x03\x02\x02\x02\x12\u013C\x03\x02\x02" +
		"\x02\x14\u013F\x03\x02\x02\x02\x16\u0144\x03\x02\x02\x02\x18\u0146\x03" +
		"\x02\x02\x02\x1A\x1C\x05\x04\x03\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1D\x03" +
		"\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x03\x03" +
		"\x02\x02\x02\x1F \x05\x06\x04\x02 !\x07R\x02\x02!1\x03\x02\x02\x02\"1" +
		"\x05\x06\x04\x02#$\x05\x12\n\x02$%\x05\x06\x04\x02%&\x07R\x02\x02&1\x03" +
		"\x02\x02\x02\'(\x05\x12\n\x02()\x05\x06\x04\x02)1\x03\x02\x02\x02*+\x05" +
		"\x12\n\x02+,\x07R\x02\x02,1\x03\x02\x02\x02-1\x05\x12\n\x02.1\x07R\x02" +
		"\x02/1\x07Q\x02\x020\x1F\x03\x02\x02\x020\"\x03\x02\x02\x020#\x03\x02" +
		"\x02\x020\'\x03\x02\x02\x020*\x03\x02\x02\x020-\x03\x02\x02\x020.\x03" +
		"\x02\x02\x020/\x03\x02\x02\x021\x05\x03\x02\x02\x0228\x05\f\x07\x0238" +
		"\x05\x0E\b\x0248\x05\x10\t\x0258\x05\n\x06\x0268\x05\b\x05\x0272\x03\x02" +
		"\x02\x0273\x03\x02\x02\x0274\x03\x02\x02\x0275\x03\x02\x02\x0276\x03\x02" +
		"\x02\x028\x07\x03\x02\x02\x029:\x07\x03\x02\x02:B\x05\x14\v\x02;<\x07" +
		"\x04\x02\x02<B\x05\x14\v\x02=>\x07\x05\x02\x02>B\x05\x14\v\x02?B\x07\x06" +
		"\x02\x02@B\x07\x07\x02\x02A9\x03\x02\x02\x02A;\x03\x02\x02\x02A=\x03\x02" +
		"\x02\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02B\t\x03\x02\x02\x02CD\x07" +
		"\b\x02\x02DE\x05\x18\r\x02EF\x07\t\x02\x02FG\x05\x18\r\x02Ge\x03\x02\x02" +
		"\x02HI\x07\n\x02\x02IJ\x05\x18\r\x02JK\x07\t\x02\x02KL\x05\x18\r\x02L" +
		"M\x07\t\x02\x02MN\x07S\x02\x02Ne\x03\x02\x02\x02OP\x07\v\x02\x02PQ\x05" +
		"\x18\r\x02QR\x07\t\x02\x02RS\x05\x18\r\x02ST\x07\t\x02\x02TU\x07S\x02" +
		"\x02Ue\x03\x02\x02\x02VW\x07\f\x02\x02WX\x05\x18\r\x02XY\x07\t\x02\x02" +
		"YZ\x05\x18\r\x02Z[\x07\t\x02\x02[\\\x07S\x02\x02\\e\x03\x02\x02\x02]^" +
		"\x07\r\x02\x02^_\x05\x18\r\x02_`\x07\t\x02\x02`a\x05\x18\r\x02ab\x07\t" +
		"\x02\x02bc\x07S\x02\x02ce\x03\x02\x02\x02dC\x03\x02\x02\x02dH\x03\x02" +
		"\x02\x02dO\x03\x02\x02\x02dV\x03\x02\x02\x02d]\x03\x02\x02\x02e\v\x03" +
		"\x02\x02\x02fg\x07\x0E\x02\x02gh\x05\x18\r\x02hi\x07\t\x02\x02ij\x05\x18" +
		"\r\x02jk\x07\t\x02\x02kl\x05\x18\r\x02l\xBB\x03\x02\x02\x02mn\x07\x0F" +
		"\x02\x02no\x05\x18\r\x02op\x07\t\x02\x02pq\x05\x18\r\x02qr\x07\t\x02\x02" +
		"rs\x05\x18\r\x02s\xBB\x03\x02\x02\x02tu\x07\x10\x02\x02uv\x05\x18\r\x02" +
		"vw\x07\t\x02\x02wx\x05\x18\r\x02xy\x07\t\x02\x02yz\x05\x18\r\x02z\xBB" +
		"\x03\x02\x02\x02{|\x07\x11\x02\x02|}\x05\x18\r\x02}~\x07\t\x02\x02~\x7F" +
		"\x05\x18\r\x02\x7F\x80\x07\t\x02\x02\x80\x81\x05\x18\r\x02\x81\xBB\x03" +
		"\x02\x02\x02\x82\x83\x07\x12\x02\x02\x83\x84\x05\x18\r\x02\x84\x85\x07" +
		"\t\x02\x02\x85\x86\x05\x18\r\x02\x86\x87\x07\t\x02\x02\x87\x88\x05\x18" +
		"\r\x02\x88\xBB\x03\x02\x02\x02\x89\x8A\x07\x13\x02\x02\x8A\x8B\x05\x18" +
		"\r\x02\x8B\x8C\x07\t\x02\x02\x8C\x8D\x05\x18\r\x02\x8D\x8E\x07\t\x02\x02" +
		"\x8E\x8F\x05\x18\r\x02\x8F\xBB\x03\x02\x02\x02\x90\x91\x07\x14\x02\x02" +
		"\x91\x92\x05\x18\r\x02\x92\x93\x07\t\x02\x02\x93\x94\x05\x18\r\x02\x94" +
		"\x95\x07\t\x02\x02\x95\x96\x05\x18\r\x02\x96\xBB\x03\x02\x02\x02\x97\x98" +
		"\x07\x15\x02\x02\x98\x99\x05\x18\r\x02\x99\x9A\x07\t\x02\x02\x9A\x9B\x05" +
		"\x18\r\x02\x9B\x9C\x07\t\x02\x02\x9C\x9D\x05\x18\r\x02\x9D\xBB\x03\x02" +
		"\x02\x02\x9E\x9F\x07\x16\x02\x02\x9F\xA0\x05\x18\r\x02\xA0\xA1\x07\t\x02" +
		"\x02\xA1\xA2\x05\x18\r\x02\xA2\xA3\x07\t\x02\x02\xA3\xA4\x05\x18\r\x02" +
		"\xA4\xBB\x03\x02\x02\x02\xA5\xA6\x07\x17\x02\x02\xA6\xA7\x05\x18\r\x02" +
		"\xA7\xA8\x07\t\x02\x02\xA8\xA9\x05\x18\r\x02\xA9\xAA\x07\t\x02\x02\xAA" +
		"\xAB\x05\x14\v\x02\xAB\xBB\x03\x02\x02\x02\xAC\xAD\x07\x18\x02\x02\xAD" +
		"\xAE\x05\x18\r\x02\xAE\xAF\x07\t\x02\x02\xAF\xB0\x05\x18\r\x02\xB0\xB1" +
		"\x07\t\x02\x02\xB1\xB2\x05\x14\v\x02\xB2\xBB\x03\x02\x02\x02\xB3\xB4\x07" +
		"\x19\x02\x02\xB4\xB5\x05\x18\r\x02\xB5\xB6\x07\t\x02\x02\xB6\xB7\x05\x18" +
		"\r\x02\xB7\xB8\x07\t\x02\x02\xB8\xB9\x05\x14\v\x02\xB9\xBB\x03\x02\x02" +
		"\x02\xBAf\x03\x02\x02\x02\xBAm\x03\x02\x02\x02\xBAt\x03\x02\x02\x02\xBA" +
		"{\x03\x02\x02\x02\xBA\x82\x03\x02\x02\x02\xBA\x89\x03\x02\x02\x02\xBA" +
		"\x90\x03\x02\x02\x02\xBA\x97\x03\x02\x02\x02\xBA\x9E\x03\x02\x02\x02\xBA" +
		"\xA5\x03\x02\x02\x02\xBA\xAC\x03\x02\x02\x02\xBA\xB3\x03\x02\x02\x02\xBB" +
		"\r\x03\x02\x02\x02\xBC\xBD\x07\x1A\x02\x02\xBD\xBE\x05\x18\r\x02\xBE\xBF" +
		"\x07\t\x02\x02\xBF\xC0\x05\x18\r\x02\xC0\xC1\x07\t\x02\x02\xC1\xC2\x05" +
		"\x16\f\x02\xC2\u0131\x03\x02\x02\x02\xC3\xC4\x07\x1B\x02\x02\xC4\xC5\x05" +
		"\x18\r\x02\xC5\xC6\x07\t\x02\x02\xC6\xC7\x05\x18\r\x02\xC7\xC8\x07\t\x02" +
		"\x02\xC8\xC9\x05\x14\v\x02\xC9\u0131\x03\x02\x02\x02\xCA\xCB\x07\x1C\x02" +
		"\x02\xCB\xCC\x05\x18\r\x02\xCC\xCD\x07\t\x02\x02\xCD\xCE\x05\x18\r\x02" +
		"\xCE\xCF\x07\t\x02\x02\xCF\xD0\x05\x14\v\x02\xD0\u0131\x03\x02\x02\x02" +
		"\xD1\xD2\x07\x1D\x02\x02\xD2\xD3\x05\x18\r\x02\xD3\xD4\x07\t\x02\x02\xD4" +
		"\xD5\x05\x18\r\x02\xD5\xD6\x07\t\x02\x02\xD6\xD7\x05\x16\f\x02\xD7\u0131" +
		"\x03\x02\x02\x02\xD8\xD9\x07\x1E\x02\x02\xD9\xDA\x05\x18\r\x02\xDA\xDB" +
		"\x07\t\x02\x02\xDB\xDC\x05\x18\r\x02\xDC\xDD\x07\t\x02\x02\xDD\xDE\x05" +
		"\x14\v\x02\xDE\u0131\x03\x02\x02\x02\xDF\xE0\x07\x1F\x02\x02\xE0\xE1\x05" +
		"\x18\r\x02\xE1\xE2\x07\t\x02\x02\xE2\xE3\x05\x14\v\x02\xE3\u0131\x03\x02" +
		"\x02\x02\xE4\xE5\x07 \x02\x02\xE5\xE6\x05\x18\r\x02\xE6\xE7\x07\t\x02" +
		"\x02\xE7\xE8\x05\x18\r\x02\xE8\xE9\x07\t\x02\x02\xE9\xEA\x05\x14\v\x02" +
		"\xEA\u0131\x03\x02\x02\x02\xEB\xEC\x07!\x02\x02\xEC\xED\x05\x18\r\x02" +
		"\xED\xEE\x07\t\x02\x02\xEE\xEF\x05\x18\r\x02\xEF\xF0\x07\t\x02\x02\xF0" +
		"\xF1\x05\x14\v\x02\xF1\u0131\x03\x02\x02\x02\xF2\xF3\x07\"\x02\x02\xF3" +
		"\xF4\x05\x18\r\x02\xF4\xF5\x07\t\x02\x02\xF5\xF6\x05\x16\f\x02\xF6\xF7" +
		"\x07#\x02\x02\xF7\xF8\x05\x18\r\x02\xF8\xF9\x07$\x02\x02\xF9\u0131\x03" +
		"\x02\x02\x02\xFA\xFB\x07%\x02\x02\xFB\xFC\x05\x18\r\x02\xFC\xFD\x07\t" +
		"\x02\x02\xFD\xFE\x05\x16\f\x02\xFE\xFF\x07#\x02\x02\xFF\u0100\x05\x18" +
		"\r\x02\u0100\u0101\x07$\x02\x02\u0101\u0131\x03\x02\x02\x02\u0102\u0103" +
		"\x07&\x02\x02\u0103\u0104\x05\x18\r\x02\u0104\u0105\x07\t\x02\x02\u0105" +
		"\u0106\x05\x16\f\x02\u0106\u0107\x07#\x02\x02\u0107\u0108\x05\x18\r\x02" +
		"\u0108\u0109\x07$\x02\x02\u0109\u0131\x03\x02\x02\x02\u010A\u010B\x07" +
		"\'\x02\x02\u010B\u010C\x05\x18\r\x02\u010C\u010D\x07\t\x02\x02\u010D\u010E" +
		"\x05\x16\f\x02\u010E\u010F\x07#\x02\x02\u010F\u0110\x05\x18\r\x02\u0110" +
		"\u0111\x07$\x02\x02\u0111\u0131\x03\x02\x02\x02\u0112\u0113\x07(\x02\x02" +
		"\u0113\u0114\x05\x18\r\x02\u0114\u0115\x07\t\x02\x02\u0115\u0116\x05\x16" +
		"\f\x02\u0116\u0117\x07#\x02\x02\u0117\u0118\x05\x18\r\x02\u0118\u0119" +
		"\x07$\x02\x02\u0119\u0131\x03\x02\x02\x02\u011A\u011B\x07)\x02\x02\u011B" +
		"\u011C\x05\x18\r\x02\u011C\u011D\x07\t\x02\x02\u011D\u011E\x05\x16\f\x02" +
		"\u011E\u011F\x07#\x02\x02\u011F\u0120\x05\x18\r\x02\u0120\u0121\x07$\x02" +
		"\x02\u0121\u0131\x03\x02\x02\x02\u0122\u0123\x07*\x02\x02\u0123\u0124" +
		"\x05\x18\r\x02\u0124\u0125\x07\t\x02\x02\u0125\u0126\x05\x18\r\x02\u0126" +
		"\u0127\x07\t\x02\x02\u0127\u0128\x07S\x02\x02\u0128\u0131\x03\x02\x02" +
		"\x02\u0129\u012A\x07+\x02\x02\u012A\u012B\x05\x18\r\x02\u012B\u012C\x07" +
		"\t\x02\x02\u012C\u012D\x05\x18\r\x02\u012D\u012E\x07\t\x02\x02\u012E\u012F" +
		"\x07S\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\xBC\x03\x02\x02\x02\u0130" +
		"\xC3\x03\x02\x02\x02\u0130\xCA\x03\x02\x02\x02\u0130\xD1\x03\x02\x02\x02" +
		"\u0130\xD8\x03\x02\x02\x02\u0130\xDF\x03\x02\x02\x02\u0130\xE4\x03\x02" +
		"\x02\x02\u0130\xEB\x03\x02\x02\x02\u0130\xF2\x03\x02\x02\x02\u0130\xFA" +
		"\x03\x02\x02\x02\u0130\u0102\x03\x02\x02\x02\u0130\u010A\x03\x02\x02\x02" +
		"\u0130\u0112\x03\x02\x02\x02\u0130\u011A\x03\x02\x02\x02\u0130\u0122\x03" +
		"\x02\x02\x02\u0130\u0129\x03\x02\x02\x02\u0131\x0F\x03\x02\x02\x02\u0132" +
		"\u0133\x07,\x02\x02\u0133\u013B\x05\x18\r\x02\u0134\u0135\x07-\x02\x02" +
		"\u0135\u013B\x05\x18\r\x02\u0136\u0137\x07.\x02\x02\u0137\u013B\x07S\x02" +
		"\x02\u0138\u0139\x07/\x02\x02\u0139\u013B\x07S\x02\x02\u013A\u0132\x03" +
		"\x02\x02\x02\u013A\u0134\x03\x02\x02\x02\u013A\u0136\x03\x02\x02\x02\u013A" +
		"\u0138\x03\x02\x02\x02\u013B\x11\x03\x02\x02\x02\u013C\u013D\x07S\x02" +
		"\x02\u013D\u013E\x070\x02\x02\u013E\x13\x03\x02\x02\x02\u013F\u0140\t" +
		"\x02\x02\x02\u0140\x15\x03\x02\x02\x02\u0141\u0142\x071\x02\x02\u0142" +
		"\u0145\x05\x14\v\x02\u0143\u0145\x05\x14\v\x02\u0144\u0141\x03\x02\x02" +
		"\x02\u0144\u0143\x03\x02\x02\x02\u0145\x17\x03\x02\x02\x02\u0146\u0147" +
		"\t\x03\x02\x02\u0147\x19\x03\x02\x02\x02\v\x1D07Ad\xBA\u0130\u013A\u0144";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mipsParser.__ATN) {
			mipsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mipsParser._serializedATN));
		}

		return mipsParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_prog; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	public inst(): InstContext | undefined {
		return this.tryGetRuleContext(0, InstContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(mipsParser.NEWLINE, 0); }
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(mipsParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_stat; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterStat) {
			listener.enterStat(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitStat) {
			listener.exitStat(this);
		}
	}
}


export class InstContext extends ParserRuleContext {
	public r_type(): R_typeContext | undefined {
		return this.tryGetRuleContext(0, R_typeContext);
	}
	public i_type(): I_typeContext | undefined {
		return this.tryGetRuleContext(0, I_typeContext);
	}
	public j_type(): J_typeContext | undefined {
		return this.tryGetRuleContext(0, J_typeContext);
	}
	public pseudo(): PseudoContext | undefined {
		return this.tryGetRuleContext(0, PseudoContext);
	}
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_inst; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterInst) {
			listener.enterInst(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitInst) {
			listener.exitInst(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public _op!: Token;
	public _data!: Unsigned_immContext;
	public unsigned_imm(): Unsigned_immContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_immContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_directive; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
}


export class PseudoContext extends ParserRuleContext {
	public _op!: Token;
	public _rt!: RegContext;
	public _rs!: RegContext;
	public _tag!: Token;
	public reg(): RegContext[];
	public reg(i: number): RegContext;
	public reg(i?: number): RegContext | RegContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegContext);
		} else {
			return this.getRuleContext(i, RegContext);
		}
	}
	public IDEN(): TerminalNode | undefined { return this.tryGetToken(mipsParser.IDEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_pseudo; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterPseudo) {
			listener.enterPseudo(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitPseudo) {
			listener.exitPseudo(this);
		}
	}
}


export class R_typeContext extends ParserRuleContext {
	public _op!: Token;
	public _rd!: RegContext;
	public _rs!: RegContext;
	public _rt!: RegContext;
	public _sa!: Unsigned_immContext;
	public reg(): RegContext[];
	public reg(i: number): RegContext;
	public reg(i?: number): RegContext | RegContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegContext);
		} else {
			return this.getRuleContext(i, RegContext);
		}
	}
	public unsigned_imm(): Unsigned_immContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_immContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_r_type; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterR_type) {
			listener.enterR_type(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitR_type) {
			listener.exitR_type(this);
		}
	}
}


export class I_typeContext extends ParserRuleContext {
	public _op!: Token;
	public _rt!: RegContext;
	public _rs!: RegContext;
	public _simm!: Signed_immContext;
	public _uimm!: Unsigned_immContext;
	public _offset!: Signed_immContext;
	public _base!: RegContext;
	public _tag!: Token;
	public reg(): RegContext[];
	public reg(i: number): RegContext;
	public reg(i?: number): RegContext | RegContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegContext);
		} else {
			return this.getRuleContext(i, RegContext);
		}
	}
	public signed_imm(): Signed_immContext | undefined {
		return this.tryGetRuleContext(0, Signed_immContext);
	}
	public unsigned_imm(): Unsigned_immContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_immContext);
	}
	public IDEN(): TerminalNode | undefined { return this.tryGetToken(mipsParser.IDEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_i_type; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterI_type) {
			listener.enterI_type(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitI_type) {
			listener.exitI_type(this);
		}
	}
}


export class J_typeContext extends ParserRuleContext {
	public _op!: Token;
	public _rs!: RegContext;
	public _tag!: Token;
	public reg(): RegContext | undefined {
		return this.tryGetRuleContext(0, RegContext);
	}
	public IDEN(): TerminalNode | undefined { return this.tryGetToken(mipsParser.IDEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_j_type; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterJ_type) {
			listener.enterJ_type(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitJ_type) {
			listener.exitJ_type(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public IDEN(): TerminalNode { return this.getToken(mipsParser.IDEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_label; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class Unsigned_immContext extends ParserRuleContext {
	public NUM(): TerminalNode | undefined { return this.tryGetToken(mipsParser.NUM, 0); }
	public HEX_NUM(): TerminalNode | undefined { return this.tryGetToken(mipsParser.HEX_NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_unsigned_imm; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterUnsigned_imm) {
			listener.enterUnsigned_imm(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitUnsigned_imm) {
			listener.exitUnsigned_imm(this);
		}
	}
}


export class Signed_immContext extends ParserRuleContext {
	public unsigned_imm(): Unsigned_immContext {
		return this.getRuleContext(0, Unsigned_immContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_signed_imm; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterSigned_imm) {
			listener.enterSigned_imm(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitSigned_imm) {
			listener.exitSigned_imm(this);
		}
	}
}


export class RegContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mipsParser.RULE_reg; }
	// @Override
	public enterRule(listener: mipsListener): void {
		if (listener.enterReg) {
			listener.enterReg(this);
		}
	}
	// @Override
	public exitRule(listener: mipsListener): void {
		if (listener.exitReg) {
			listener.exitReg(this);
		}
	}
}


