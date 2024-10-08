// https://en.wikipedia.org/wiki/ANSI_escape_code
// https://handwiki.org/wiki/ANSI_escape_code

// eight colors
// 0 - 7
const eightColors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];

const EC = {};

const {
    env = {},
    argv = []
} = typeof process === 'undefined' ? {} : process;

const isDisabled = 'NO_COLOR' in env || argv.includes('--no-color');
const isForced = 'FORCE_COLOR' in env || argv.includes('--color');

let _disabled = false;
if (isDisabled) {
    _disabled = true;
} else if (isForced) {
    _disabled = true;
}

Object.defineProperty(EC, 'disabled', {
    get: function() {
        return _disabled;
    },
    set: function(v) {
        _disabled = v;
    }
});

const add = (start, str, end) => {
    if (_disabled) {
        return str;
    }
    return `\x1b[${start}m${str}\x1b[${end}m`;
};

// text color
eightColors.forEach((name, i) => {
    EC[name] = (str) => {
        return add(`3${i}`, str, '39');
    };
});

// background color
EC.bg = {};
eightColors.forEach((name, i) => {
    EC.bg[name] = (str) => {
        return add(`4${i}`, str, '49');
    };
});

// bright color
EC.br = {};
eightColors.forEach((name, i) => {
    EC.br[name] = (str) => {
        return add(`9${i}`, str, '39');
    };
});

// bright background color
EC.br.bg = {};
eightColors.forEach((name, i) => {
    EC.br.bg[name] = (str) => {
        return add(`10${i}`, str, '49');
    };
});


// styles
EC.reset = (str) => {
    return add('0', str, '0');
};
EC.bold = (str) => {
    return add('1', str, '21');
};
EC.faint = (str) => {
    return add('2', str, '22');
};
EC.italic = (str) => {
    return add('3', str, '23');
};
EC.underline = (str) => {
    return add('4', str, '24');
};
EC.inverse = (str) => {
    return add('7', str, '27');
};
EC.hidden = (str) => {
    return add('8', str, '28');
};
EC.strike = (str) => {
    return add('9', str, '29');
};

// remove color
EC.remove = (str) => {
    return `${str}`.replace(/\033\[(\d+)m/g, '');
};

// log hook
EC.log = function(str) {
    if (arguments.length > 1) {
        str = Array.from(arguments).join(' ');
    }
    console.log(str);
};

eightColors.forEach((color) => {
    const api = `log${color.charAt(0).toUpperCase()}${color.slice(1)}`;
    EC[api] = function() {
        const args = Array.from(arguments);
        const handler = EC[color];
        // merge to string first, browser do NOT support apply arguments
        // and remove previous color
        const str = handler(EC.remove(args.join(' ')));
        EC.log(str);
        return str;
    };
});

module.exports = EC;
