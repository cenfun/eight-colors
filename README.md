# Eight Colors
> Eight colors for the console

![](/scripts/eight-colors.png)
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
const res = EC.logColor('string1', 'string2', 'red');
console.assert(EC.remove(res) === 'string1 string2');

EC.logGreen('log green');
EC.logRed('log red');
EC.logCyan('log cyan');
EC.logBlack('log black');
EC.logWhite('log white');

EC.log('log 2 arguments', '2');
EC.logGreen('logGreen 2 arguments', '2');
EC.logMagenta('logMagenta 3 arguments', '2', '3');

```
![](/scripts/screenshots.png)

## APIs
```js
EC.black(str)
EC.red(str)
EC.green(str)
EC.yellow(str)
EC.blue(str)
EC.magenta(str)
EC.cyan(str)
EC.white(str)

EC.bg.black(str)
EC.bg.red(str)
EC.bg.green(str)
EC.bg.yellow(str)
EC.bg.blue(str)
EC.bg.magenta(str)
EC.bg.cyan(str)
EC.bg.white(str)

EC.br.black(str)
EC.br.red(str)
EC.br.green(str)
EC.br.yellow(str)
EC.br.blue(str)
EC.br.magenta(str)
EC.br.cyan(str)
EC.br.white(str)

EC.br.bg.black(str)
EC.br.bg.red(str)
EC.br.bg.green(str)
EC.br.bg.yellow(str)
EC.br.bg.blue(str)
EC.br.bg.magenta(str)
EC.br.bg.cyan(str)
EC.br.bg.white(str)

EC.reset(str)
EC.bold(str)
EC.faint(str)
EC.italic(str)
EC.underline(str)
EC.inverse(str)
EC.hidden(str)
EC.strike(str)

EC.remove(str)

EC.log(str)
EC.logColor(str, ColorName)

EC.logBlack(str)
EC.logRed(str)
EC.logGreen(str)
EC.logYellow(str)
EC.logBlue(str)
EC.logMagenta(str)
EC.logCyan(str)
EC.logWhite(str)
```

## Browser Console
Usage is the same as above, and provides an additional UMD bundle (1.35 KB)
```html
<script src="path-to/eight-colors/dist/eight-colors.js"></script>
<script>
    const EC = window['eight-colors'];
    console.log(EC.red('red string'));
</script>
```
![](/scripts/browser.png)

* firefox does not support 

## Links
- [https://en.wikipedia.org/wiki/ANSI_escape_code](https://en.wikipedia.org/wiki/ANSI_escape_code)
- [https://handwiki.org/wiki/ANSI_escape_code](https://handwiki.org/wiki/ANSI_escape_code)

## CHANGELOG

* 1.1.1
    - fixed types

* 1.1.0
    - added types

* 1.0.3
    - fixed API multiple arguments

* 1.0.2
    - added browser bundle

* 1.0.1
    - added log color API

* 1.0.0