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