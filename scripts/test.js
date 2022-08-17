const EC = require('../lib/index.js');

//text color
console.log(EC.red('red string'));

//background color
console.log(EC.bg.red('red background'));

//bright color
console.log(EC.br.red('bright red string'));

//bright background color
console.log(EC.br.bg.red('bright red background'));

//style
console.log(EC.italic('italic text'));
console.log(EC.underline('underline text'));
console.log(EC.green(EC.underline('green underline text')));

//remove color
const redString = EC.red('red string');
console.log(redString);
const string = EC.remove(redString);
console.assert(string === 'red string');

//log color
EC.logColor('string', 'red');

EC.logGreen('log green');
EC.logRed('log red');
EC.logCyan('log cyan');
EC.logBlack('log black');
EC.logWhite('log white');

//check out all APIs
console.log(EC);

//print all APIs
const print = (parent, ls) => {
    if (typeof parent === 'function') {
        console.log(`${ls.join('.')}(String)`);
        return;
    }

    for (const k in parent) {
        print(parent[k], ls.concat(k));
    }

};

print(EC, ['EC']);
