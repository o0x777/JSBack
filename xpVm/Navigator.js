function Navigator() {
    this.appCodeName = 'Mozilla';
    this.appName = 'Netscape';
    this.appVersion = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36';
    this.bluetooth = function Bluetooth(){};
    this.canShare = function canShare() { return '[native code]' };
    this.toString = function () { return "function Navigator() { [native code] }" }
}

Navigator.prototype = Navigator;
Navigator.prototype.constructor = Navigator;

navigator = new Navigator()

console.log(navigator.toString())
