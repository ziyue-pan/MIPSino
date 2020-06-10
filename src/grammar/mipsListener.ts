// Generated from src/grammar/mips.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./mipsParser";
import { StatContext } from "./mipsParser";
import { InstContext } from "./mipsParser";
import { DirectiveContext } from "./mipsParser";
import { PseudoContext } from "./mipsParser";
import { R_typeContext } from "./mipsParser";
import { I_typeContext } from "./mipsParser";
import { J_typeContext } from "./mipsParser";
import { LabelContext } from "./mipsParser";
import { IdenContext } from "./mipsParser";
import { Unsigned_immContext } from "./mipsParser";
import { Signed_immContext } from "./mipsParser";
import { RegContext } from "./mipsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `mipsParser`.
 */
export interface mipsListener extends ParseTreeListener {
	diag_line?: number[];
	diag_msg?: string[];
	program_counter: number;
	legal?: boolean;
	label_table: Map<string, number>;
	output?: string[];
	/**
	 * Enter a parse tree produced by `mipsParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.inst`.
	 * @param ctx the parse tree
	 */
	enterInst?: (ctx: InstContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.inst`.
	 * @param ctx the parse tree
	 */
	exitInst?: (ctx: InstContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.pseudo`.
	 * @param ctx the parse tree
	 */
	enterPseudo?: (ctx: PseudoContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.pseudo`.
	 * @param ctx the parse tree
	 */
	exitPseudo?: (ctx: PseudoContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.r_type`.
	 * @param ctx the parse tree
	 */
	enterR_type?: (ctx: R_typeContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.r_type`.
	 * @param ctx the parse tree
	 */
	exitR_type?: (ctx: R_typeContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.i_type`.
	 * @param ctx the parse tree
	 */
	enterI_type?: (ctx: I_typeContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.i_type`.
	 * @param ctx the parse tree
	 */
	exitI_type?: (ctx: I_typeContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.j_type`.
	 * @param ctx the parse tree
	 */
	enterJ_type?: (ctx: J_typeContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.j_type`.
	 * @param ctx the parse tree
	 */
	exitJ_type?: (ctx: J_typeContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.iden`.
	 * @param ctx the parse tree
	 */
	enterIden?: (ctx: IdenContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.iden`.
	 * @param ctx the parse tree
	 */
	exitIden?: (ctx: IdenContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.unsigned_imm`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_imm?: (ctx: Unsigned_immContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.unsigned_imm`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_imm?: (ctx: Unsigned_immContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.signed_imm`.
	 * @param ctx the parse tree
	 */
	enterSigned_imm?: (ctx: Signed_immContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.signed_imm`.
	 * @param ctx the parse tree
	 */
	exitSigned_imm?: (ctx: Signed_immContext) => void;

	/**
	 * Enter a parse tree produced by `mipsParser.reg`.
	 * @param ctx the parse tree
	 */
	enterReg?: (ctx: RegContext) => void;
	/**
	 * Exit a parse tree produced by `mipsParser.reg`.
	 * @param ctx the parse tree
	 */
	exitReg?: (ctx: RegContext) => void;
}

