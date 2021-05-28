// superbed.cn


var md5 = function (string, key, raw) {
    if (!key) {
        if (!raw) {
            return func.hexMD5(string);
        }
        return func.rawMD5(string);
    }
    if (!raw) {
        return func.hexHMACMD5(key, string);
    }
    return func.rawHMACMD5(key, string);
}
var func = {
    /**
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    safeAdd: function (x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xffff);
    },

    /**
     * Bitwise rotate a 32-bit number to the left.
     */
    bitRotateLeft: function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    },

    /*
     * These functions implement the four basic operations the algorithm uses.
     */
    md5cmn: function (q, a, b, x, s, t) {
        return func.safeAdd(func.bitRotateLeft(func.safeAdd(func.safeAdd(a, q), func.safeAdd(x, t)), s), b);
    },
    md5ff: function (a, b, c, d, x, s, t) {
        return func.md5cmn((b & c) | (~b & d), a, b, x, s, t);
    },
    md5gg: function (a, b, c, d, x, s, t) {
        return func.md5cmn((b & d) | (c & ~d), a, b, x, s, t);
    },
    md5hh: function (a, b, c, d, x, s, t) {
        return func.md5cmn(b ^ c ^ d, a, b, x, s, t);
    },
    md5ii: function (a, b, c, d, x, s, t) {
        return func.md5cmn(c ^ (b | ~d), a, b, x, s, t);
    },

    /**
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */
    binlMD5: function (x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << (len % 32);
        x[((len + 64) >>> 9 << 4) + 14] = len;

        var i;
        var olda;
        var oldb;
        var oldc;
        var oldd;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = func.md5ff(a, b, c, d, x[i], 7, -680876936);
            d = func.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = func.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = func.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = func.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = func.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = func.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = func.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = func.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = func.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = func.md5ff(c, d, a, b, x[i + 10], 17, -42063);
            b = func.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = func.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = func.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = func.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = func.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

            a = func.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = func.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = func.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = func.md5gg(b, c, d, a, x[i], 20, -373897302);
            a = func.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = func.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = func.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = func.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = func.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = func.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = func.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = func.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = func.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = func.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = func.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = func.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = func.md5hh(a, b, c, d, x[i + 5], 4, -378558);
            d = func.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = func.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = func.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = func.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = func.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = func.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = func.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = func.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = func.md5hh(d, a, b, c, x[i], 11, -358537222);
            c = func.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = func.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = func.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = func.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = func.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = func.md5hh(b, c, d, a, x[i + 2], 23, -995338651);

            a = func.md5ii(a, b, c, d, x[i], 6, -198630844);
            d = func.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = func.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = func.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = func.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = func.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = func.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = func.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = func.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = func.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = func.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = func.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = func.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = func.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = func.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = func.md5ii(b, c, d, a, x[i + 9], 21, -343485551);

            a = func.safeAdd(a, olda);
            b = func.safeAdd(b, oldb);
            c = func.safeAdd(c, oldc);
            d = func.safeAdd(d, oldd);
        }
        return [a, b, c, d];
    },

    /**
     * Convert an array of little-endian words to a string
     */
    binl2rstr: function (input) {
        var i;
        var output = '';
        var length32 = input.length * 32;
        for (i = 0; i < length32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff);
        }
        return output;
    },

    /**
     * Convert a raw string to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */
    rstr2binl: function (input) {
        var i;
        var output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        var length8 = input.length * 8;
        for (i = 0; i < length8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32);
        }
        return output;
    },

    /**
     * Calculate the MD5 of a raw string
     */
    rstrMD5: function (s) {
        return func.binl2rstr(func.binlMD5(func.rstr2binl(s), s.length * 8));
    },

    /**
     * Calculate the HMAC-MD5, of a key and some data (raw strings)
     */
    rstrHMACMD5: function (key, data) {
        var i;
        var bkey = func.rstr2binl(key);
        var ipad = [];
        var opad = [];
        var hash;
        ipad[15] = opad[15] = undefined;
        if (bkey.length > 16) {
            bkey = func.binlMD5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5c5c5c5c;
        }
        hash = func.binlMD5(ipad.concat(func.rstr2binl(data)), 512 + data.length * 8);
        return func.binl2rstr(func.binlMD5(opad.concat(hash), 512 + 128));
    },

    /**
     * Convert a raw string to a hex string
     */
    rstr2hex: function (input) {
        var hexTab = '0123456789abcdef';
        var output = '';
        var x;
        var i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
        }
        return output;
    },

    /**
     * Encode a string as utf-8
     */
    str2rstrUTF8: function (input) {
        return unescape(encodeURIComponent(input));
    },

    /*
     * Take string arguments and return either raw or hex encoded strings
     */
    rawMD5: function (s) {
        return func.rstrMD5(func.str2rstrUTF8(s));
    },
    hexMD5: function (s) {
        return func.rstr2hex(func.rawMD5(s));
    },
    rawHMACMD5: function (k, d) {
        return func.rstrHMACMD5(func.str2rstrUTF8(k), func.str2rstrUTF8(d));
    },
    hexHMACMD5: function (k, d) {
        return func.rstr2hex(func.rawHMACMD5(k, d));
    }
};


var _0x23dbaa = Math["round"](Math['random']() * 0x3b9aca00);
console.log(_0x23dbaa);
var timestramp = new Date().getTime(),
timestramp = timestramp.toString().slice(0, 10);
console.log(timestramp);
var content = (undefined + '_' + timestramp + '_') + _0x23dbaa;
console.log(content);
res = md5(content);
console.log(res)
