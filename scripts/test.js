
module.exports = (EC) => {

    // print all APIs
    const print = (parent, list, paths) => {

        for (const k in parent) {
            const item = parent[k];
            if (typeof item === 'function') {
                list.push(`${paths.concat(k).join('.')}(str)`);
                continue;
            }

            print(item, list, paths.concat(k));

        }

    };

    const list = [];
    print(EC, list, ['EC']);
    console.log(list);

    // text color
    console.log(EC.red('red string'));

    // background color
    console.log(EC.bg.red('red background'));

    // bright color
    console.log(EC.br.red('bright red string'));

    // bright background color
    console.log(EC.br.bg.red('bright red background'));

    // style
    console.log(EC.italic('italic text'));
    console.log(EC.underline('underline text'));
    console.log(EC.green(EC.underline('green underline text')));

    // remove color
    const redString = EC.red('red string');
    console.log(redString);
    const string = EC.remove(redString);
    console.assert(string === 'red string');

    // log color
    const res = EC.logRed('string1', 'string2');
    console.assert(EC.remove(res) === 'string1 string2');

    EC.logGreen('log green');
    EC.logRed('log red');
    EC.logCyan('log cyan');
    EC.logBlack('log black');
    EC.logWhite('log white');

    EC.log('log 2 arguments', '2');
    EC.logGreen('logGreen 2 arguments', '2');
    EC.logMagenta('logMagenta 3 arguments', '2', '3');

};
