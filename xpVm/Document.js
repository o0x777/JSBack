function Document() {
    Document.prototype.toString = function () {return "function Document() { [native code] }"}
}

Document.prototype.constructor = Object;

document = new Document();
console.log(document.toString())
