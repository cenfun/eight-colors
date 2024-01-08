/**
 * Eight Colors
 */
export function black(str: string): string;
export function red(str: string): string;
export function green(str: string): string;
export function yellow(str: string): string;
export function blue(str: string): string;
export function magenta(str: string): string;
export function cyan(str: string): string;
export function white(str: string): string;

export type bg = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white
}

export type br = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,

    bg
}

export function reset(str: string): string;
export function bold(str: string): string;
export function faint(str: string): string;
export function italic(str: string): string;
export function underline(str: string): string;
export function inverse(str: string): string;
export function hidden(str: string): string;
export function strike(str: string): string;

// remove color
export function remove(str: string): string;

// console log
export function log(...args: string[]): void;

export type ColorName = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
export function logColor<T extends string[]>(...args: [...T, ColorName]): string;

export function logBlack(...args: string[]): string;
export function logRed(...args: string[]): string;
export function logGreen(...args: string[]): string;
export function logYellow(...args: string[]): string;
export function logBlue(...args: string[]): string;
export function logMagenta(...args: string[]): string;
export function logCyan(...args: string[]): string;
export function logWhite(...args: string[]): string;

export type EC = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,

    bg,
    br,

    reset,
    bold,
    faint,
    italic,
    underline,
    inverse,
    hidden,
    strike,

    remove,

    log,

    logBlack,
    logRed,
    logGreen,
    logYellow,
    logBlue,
    logMagenta,
    logCyan,
    logWhite
}

export default EC;