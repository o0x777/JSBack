const fs = require('fs');
const {VM} = require('vm2')
const vm = new VM();

const data = fs.readFileSync("./src/code.js", "utf-8");
// console.log(data.toString())
debugger;
vm.run(data);
debugger;
