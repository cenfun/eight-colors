type ColorHandler = (str: string) => string

interface IEightColors {
    black: ColorHandler;
    red: ColorHandler;
    green: ColorHandler;
    yellow: ColorHandler;
    blue: ColorHandler;
    magenta: ColorHandler;
    cyan: ColorHandler;
    white: ColorHandler;
}

interface BR extends IEightColors {
    bg: IEightColors
}

// console log
type LogHandler = (str: string) => void;
type ColorLogHandler = (...args: any[]) => string;

declare interface EightColors extends IEightColors {

    disabled: boolean;

    bg: IEightColors,

    br: BR,

    reset: ColorHandler;
    bold: ColorHandler;
    faint: ColorHandler;
    italic: ColorHandler;
    underline: ColorHandler;
    inverse: ColorHandler;
    hidden: ColorHandler;
    strike: ColorHandler;

    // remove color
    remove: ColorHandler;

    // console log
    log: LogHandler;

    logBlack: ColorLogHandler;
    logRed: ColorLogHandler;
    logGreen: ColorLogHandler;
    logYellow: ColorLogHandler;
    logBlue: ColorLogHandler;
    logMagenta: ColorLogHandler;
    logCyan: ColorLogHandler;
    logWhite: ColorLogHandler;

}

declare const EC: EightColors;

export = EC;