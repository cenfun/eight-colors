# Eight Colors
> Eight colors for the terminal console

## Install
```
npm i eight-colors
```

## APIs
* 8 colors: black, red, green, yellow, blue, magenta, cyan, white
* other: reset, bold, faint, italic, underline, inverse, hidden, strike
* remove color: remove

## Usage
```js
const EC = require("eight-colors");

//normal font color
console.log(EC.red("red string"));

//background color
console.log(EC.bg.red("red background"));

//bright 
console.log(EC.br.red("bright red string"));

//bright background
console.log(EC.br.bg.red("bright red background"));

const redString = EC.red("red string");
console.log(redString);

//remove color
const string = EC.remove(redString);
console.log(string === "red string");

```

## Changelog

* 1.0.0