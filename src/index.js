const fs = require('fs');
const { VM } = require('vm2')
const vm = new VM();


const Environment = fs.readFileSync("../src/window.js", "utf-8");
const codeJs = fs.readFileSync("../src/code.js", "utf-8");
var data = Environment + codeJs;
debugger;
vm.run(data);
debugger;
