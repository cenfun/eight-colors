// starfall-cli config
// https://github.com/cenfun/starfall-cli

const fs = require('fs');
const path = require('path');

module.exports = {

    build: {

        before: (item, Util) => {
            console.log('before build');

            if (item.production) {
                item.devtool = false;
            }

            return 0;
        },

        afterAll: (o, Util) => {

            const dirFrom = path.resolve(__dirname, '../packages/eight-colors/dist');
            const dirTo = path.resolve(__dirname, '../dist');
            if (!fs.existsSync(dirTo)) {
                fs.mkdirSync(dirTo, {
                    recursive: true
                });
            }
            const files = fs.readdirSync(dirFrom);
            files.forEach((file) => {
                fs.copyFileSync(path.resolve(dirFrom, file), path.resolve(dirTo, file));
                console.log(`copied ${file} from ${dirFrom} to ${dirTo}`);
            });

        }
    }

};
