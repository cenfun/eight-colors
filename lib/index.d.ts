/**
 * Eight Colors
 */

type ColorHandler = (str: string) => string

export const black: ColorHandler;
export const red: ColorHandler;
export const green: ColorHandler;
export const yellow: ColorHandler;
export const blue: ColorHandler;
export const magenta: ColorHandler;
export const cyan: ColorHandler;
export const white: ColorHandler;

type BG = {
    black: ColorHandler;
    red: ColorHandler;
    green: ColorHandler;
    yellow: ColorHandler;
    blue: ColorHandler;
    magenta: ColorHandler;
    cyan: ColorHandler;
    white: ColorHandler;
}

export const bg: BG;

type BR = {
    black: ColorHandler;
    red: ColorHandler;
    green: ColorHandler;
    yellow: ColorHandler;
    blue: ColorHandler;
    magenta: ColorHandler;
    cyan: ColorHandler;
    white: ColorHandler;

    bg: BG
}

export const br: BR;

export const reset: ColorHandler;
export const bold: ColorHandler;
export const faint: ColorHandler;
export const italic: ColorHandler;
export const underline: ColorHandler;
export const inverse: ColorHandler;
export const hidden: ColorHandler;
export const strike: ColorHandler;

// remove color
export const remove: ColorHandler;

// console log
type LogHandler = (str: string) => void;
export const log: LogHandler;

type ColorLogHandler = (...args: any[]) => string;

export const logBlack: ColorLogHandler;
export const logRed: ColorLogHandler;
export const logGreen: ColorLogHandler;
export const logYellow: ColorLogHandler;
export const logBlue: ColorLogHandler;
export const logMagenta: ColorLogHandler;
export const logCyan: ColorLogHandler;
export const logWhite: ColorLogHandler;

type EightColors = {
    black: ColorHandler;
    red: ColorHandler;
    green: ColorHandler;
    yellow: ColorHandler;
    blue: ColorHandler;
    magenta: ColorHandler;
    cyan: ColorHandler;
    white: ColorHandler;

    bg: BG,
    br: BR,

    reset: ColorHandler;
    bold: ColorHandler;
    faint: ColorHandler;
    italic: ColorHandler;
    underline: ColorHandler;
    inverse: ColorHandler;
    hidden: ColorHandler;
    strike: ColorHandler;

    remove: ColorHandler;

    log: LogHandler,

    logBlack: ColorLogHandler,
    logRed: ColorLogHandler,
    logGreen: ColorLogHandler,
    logYellow: ColorLogHandler,
    logBlue: ColorLogHandler,
    logMagenta: ColorLogHandler,
    logCyan: ColorLogHandler,
    logWhite: ColorLogHandler,
}

declare const EC: EightColors

export default EC;