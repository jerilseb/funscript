const fs = require("fs");

let contents = fs.readFileSync("input.fs", "utf-8");

const lexer = require("./lexer")(contents);
const tokenizer = require("./tokenizer")(lexer);

while (!tokenizer.eof()) {
  console.log(tokenizer.next());
}
