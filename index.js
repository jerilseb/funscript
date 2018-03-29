const fs = require("fs");
const walker = require("./walker");

let contents = fs.readFileSync("input.fs", "utf-8");

var globalEnv = new walker.env();

globalEnv.def("time", function(func) {
  try {
    console.time("time");
    return func();
  } finally {
    console.timeEnd("time");
  }
});

const chars = require("./lexer")(contents);
const tokens = require("./tokenizer")(chars);
const ast = require("./parser")(tokens);

fs.writeFileSync("ast.json", JSON.stringify(ast, null, "  "));

walker.evaluate(globalEnv, ast);
