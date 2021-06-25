const {obj} = require('../src/appendChain.js')
Object.appendChain = obj.appendChain
function WindowProperties() {
    return "function WindowProperties() { [native code] }"
}
function Window() {
    this.PERSISTENT = 1;
    this.TEMPORARY = 0;
    return "function Window() { [native code] }"
}
Window.prototype = WindowProperties;
Window.prototype.constructor = Window;

window = new Window()

Object.appendChain(window, WindowProperties)

console.log(window.__proto__)
console.log(window)
console.log(window.constructor)

