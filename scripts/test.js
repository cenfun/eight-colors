
module.exports = (EC) => {

    // print all APIs
    const print = (parent, paths) => {

        const list = [];
        const subs = [];
        for (const k in parent) {
            const item = parent[k];
            if (typeof item === 'function') {
                list.push(`${paths.concat(k).join('.')}(str)`);
                continue;
            }
            subs.push({
                item,
                k
            });
        }

        console.log(list);

        subs.forEach((it) => {
            const { item, k } = it;
            print(item, paths.concat(k));
        });

    };

    print(EC, ['EC']);

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

    EC.logRed('log red');
    EC.logGreen('log green');
    EC.logYellow('log yellow');
    EC.logCyan('log cyan');
    EC.logWhite('log white');

    EC.log('log 2 arguments', EC.red('2'));
    EC.logGreen('logGreen 2 arguments', '2');
    EC.logMagenta('logMagenta 3 arguments', EC.red('2'), '3');

    // disabled color
    EC.disabled = true;
    EC.logRed('disabled = true log default');
    EC.disabled = false;
    EC.logRed('disabled = false log red');

};
