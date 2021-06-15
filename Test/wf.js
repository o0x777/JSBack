(function verify(bufferarray) {
    for (e=bufferarray, n = e.length, l = [0, 0, 0, 0], a = new Uint8Array(5+n), s = 3; 0 <= s; s--) {
        l[s] = n % 256,
        n >>>= 8;
    }
})();


(function verify() {
    for (n = 697, l = [0, 0, 0, 0], s = 3; 0 <= s; s--) {
        l[s] = n % 256,
        n >>>= 8;
    }
    console.log(l);
})();