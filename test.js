const EC = require("./index.js");

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