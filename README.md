# Eight Colors
> Eight colors for the console
## Install
```
npm i eight-colors
```

## Features
* Eight Colors: black, red, green, yellow, blue, magenta, cyan, white
* Background and Bright
* Styles: reset, bold, faint, italic, underline, inverse, hidden, strike
* Remove colors
* Log colors


## Usage
```js
const EC = require("eight-colors");

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

```
![](/scripts/screenshots.png)

## All APIs
```js
EC.black(String)
EC.red(String)
EC.green(String)
EC.yellow(String)
EC.blue(String)
EC.magenta(String)
EC.cyan(String)
EC.white(String)

EC.bg.black(String)
EC.bg.red(String)
EC.bg.green(String)
EC.bg.yellow(String)
EC.bg.blue(String)
EC.bg.magenta(String)
EC.bg.cyan(String)
EC.bg.white(String)

EC.br.black(String)
EC.br.red(String)
EC.br.green(String)
EC.br.yellow(String)
EC.br.blue(String)
EC.br.magenta(String)
EC.br.cyan(String)
EC.br.white(String)

EC.br.bg.black(String)
EC.br.bg.red(String)
EC.br.bg.green(String)
EC.br.bg.yellow(String)
EC.br.bg.blue(String)
EC.br.bg.magenta(String)
EC.br.bg.cyan(String)
EC.br.bg.white(String)

EC.reset(String)
EC.bold(String)
EC.faint(String)
EC.italic(String)
EC.underline(String)
EC.inverse(String)
EC.hidden(String)
EC.strike(String)

EC.remove(String)

EC.log(String)
EC.logColor(String, Color)

EC.logBlack(String)
EC.logRed(String)
EC.logGreen(String)
EC.logYellow(String)
EC.logBlue(String)
EC.logMagenta(String)
EC.logCyan(String)
EC.logWhite(String)
```


![](/scripts/eight-colors.png)

## Link
- [https://en.wikipedia.org/wiki/ANSI_escape_code](https://en.wikipedia.org/wiki/ANSI_escape_code)
- [https://handwiki.org/wiki/ANSI_escape_code](https://handwiki.org/wiki/ANSI_escape_code)

## Changelog

* 1.0.1
    * added log color API

* 1.0.0