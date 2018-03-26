const fs = require("fs");

let contents = fs.readFileSync("input.fs", "utf-8");

const chars = require("./lexer")(contents);
const tokens = require("./tokenizer")(chars);
const program = require("./parser")(tokens);

console.log(program);
