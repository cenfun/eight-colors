/**
 * Eight Colors
 */

export type ColorHandler = (str: string) => string

export const black: ColorHandler;
export const red: ColorHandler;
export const green: ColorHandler;
export const yellow: ColorHandler;
export const blue: ColorHandler;
export const magenta: ColorHandler;
export const cyan: ColorHandler;
export const white: ColorHandler;

type BG = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white
}

export const bg: BG;

type BR = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,

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
export function log(...args: string[]): void;

export type ColorName = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
export function logColor<T extends string[]>(...args: [...T, ColorName]): string;

export type ColorLogHandler = (...args: string[]) => string;

export const logBlack: ColorLogHandler;
export const logRed: ColorLogHandler;
export const logGreen: ColorLogHandler;
export const logYellow: ColorLogHandler;
export const logBlue: ColorLogHandler;
export const logMagenta: ColorLogHandler;
export const logCyan: ColorLogHandler;
export const logWhite: ColorLogHandler;