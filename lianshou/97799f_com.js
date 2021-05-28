var window = {};
var md5;
!function(e, t) {
    "use strict";
    "undefined" != typeof window && "function" == typeof define && define.amd ? define(t) : "undefined" != typeof module && module.exports ? module.exports = t() : e.exports ? e.exports = t() : e.recognition = t()
}(this, function() {
    "use strict";
    function u(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] + t[3],
        r[2] += r[3] >>> 16,
        r[3] &= 65535,
        r[2] += e[2] + t[2],
        r[1] += r[2] >>> 16,
        r[2] &= 65535,
        r[1] += e[1] + t[1],
        r[0] += r[1] >>> 16,
        r[1] &= 65535,
        r[0] += e[0] + t[0],
        r[0] &= 65535,
        [r[0] << 16 | r[1], r[2] << 16 | r[3]]
    }
    function d(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] * t[3],
        r[2] += r[3] >>> 16,
        r[3] &= 65535,
        r[2] += e[2] * t[3],
        r[1] += r[2] >>> 16,
        r[2] &= 65535,
        r[2] += e[3] * t[2],
        r[1] += r[2] >>> 16,
        r[2] &= 65535,
        r[1] += e[1] * t[3],
        r[0] += r[1] >>> 16,
        r[1] &= 65535,
        r[1] += e[2] * t[2],
        r[0] += r[1] >>> 16,
        r[1] &= 65535,
        r[1] += e[3] * t[1],
        r[0] += r[1] >>> 16,
        r[1] &= 65535,
        r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
        r[0] &= 65535,
        [r[0] << 16 | r[1], r[2] << 16 | r[3]]
    }
    function f(e, t) {
        return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : [e[1] << (t -= 32) | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t]
    }
    function p(e, t) {
        return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
    }
    function g(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
    }
    function A(e) {
        return e = g(e, [0, e[0] >>> 1]),
        e = d(e, [4283543511, 3981806797]),
        e = g(e, [0, e[0] >>> 1]),
        e = d(e, [3301882366, 444984403]),
        e = g(e, [0, e[0] >>> 1])
    }
    function h(e, t) {
        for (var r = (e = e || "").length % 16, i = e.length - r, n = [0, t = t || 0], a = [0, t], o = [0, 0], h = [0, 0], s = [2277735313, 289559509], l = [1291169091, 658871167], c = 0; c < i; c += 16)
            o = [255 & e.charCodeAt(c + 4) | (255 & e.charCodeAt(c + 5)) << 8 | (255 & e.charCodeAt(c + 6)) << 16 | (255 & e.charCodeAt(c + 7)) << 24, 255 & e.charCodeAt(c) | (255 & e.charCodeAt(c + 1)) << 8 | (255 & e.charCodeAt(c + 2)) << 16 | (255 & e.charCodeAt(c + 3)) << 24],
            h = [255 & e.charCodeAt(c + 12) | (255 & e.charCodeAt(c + 13)) << 8 | (255 & e.charCodeAt(c + 14)) << 16 | (255 & e.charCodeAt(c + 15)) << 24, 255 & e.charCodeAt(c + 8) | (255 & e.charCodeAt(c + 9)) << 8 | (255 & e.charCodeAt(c + 10)) << 16 | (255 & e.charCodeAt(c + 11)) << 24],
            o = d(o, s),
            o = f(o, 31),
            o = d(o, l),
            n = g(n, o),
            n = f(n, 27),
            n = u(n, a),
            n = u(d(n, [0, 5]), [0, 1390208809]),
            h = d(h, l),
            h = f(h, 33),
            h = d(h, s),
            a = g(a, h),
            a = f(a, 31),
            a = u(a, n),
            a = u(d(a, [0, 5]), [0, 944331445]);
        switch (o = [0, 0],
        h = [0, 0],
        r) {
        case 15:
            h = g(h, p([0, e.charCodeAt(c + 14)], 48));
        case 14:
            h = g(h, p([0, e.charCodeAt(c + 13)], 40));
        case 13:
            h = g(h, p([0, e.charCodeAt(c + 12)], 32));
        case 12:
            h = g(h, p([0, e.charCodeAt(c + 11)], 24));
        case 11:
            h = g(h, p([0, e.charCodeAt(c + 10)], 16));
        case 10:
            h = g(h, p([0, e.charCodeAt(c + 9)], 8));
        case 9:
            h = g(h, [0, e.charCodeAt(c + 8)]),
            h = d(h, l),
            h = f(h, 33),
            h = d(h, s),
            a = g(a, h);
        case 8:
            o = g(o, p([0, e.charCodeAt(c + 7)], 56));
        case 7:
            o = g(o, p([0, e.charCodeAt(c + 6)], 48));
        case 6:
            o = g(o, p([0, e.charCodeAt(c + 5)], 40));
        case 5:
            o = g(o, p([0, e.charCodeAt(c + 4)], 32));
        case 4:
            o = g(o, p([0, e.charCodeAt(c + 3)], 24));
        case 3:
            o = g(o, p([0, e.charCodeAt(c + 2)], 16));
        case 2:
            o = g(o, p([0, e.charCodeAt(c + 1)], 8));
        case 1:
            o = g(o, [0, e.charCodeAt(c)]),
            o = d(o, s),
            o = f(o, 31),
            o = d(o, l),
            n = g(n, o)
        }
        return n = g(n, [0, e.length]),
        a = g(a, [0, e.length]),
        n = u(n, a),
        a = u(a, n),
        n = A(n),
        a = A(a),
        n = u(n, a),
        a = u(a, n),
        ("00000000" + (n[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (n[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
    }
    function s(e, t) {
        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach)
            e.forEach(t);
        else if (e.length === +e.length)
            for (var r = 0, i = e.length; r < i; r++)
                t(e[r], r, e);
        else
            for (var n in e)
                e.hasOwnProperty(n) && t(e[n], n, e)
    }
    function l(e, i) {
        var n = [];
        return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(i) : (s(e, function(e, t, r) {
            n.push(i(e, t, r))
        }),
        n)
    }
    function i(e) {
        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
    }
    var e = {
        preprocessor: null,
        audio: {
            timeout: 1e3,
            excludeIOS11: !0
        },
        fonts: {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            userDefinedFonts: [],
            extendedJsFonts: !1
        },
        screen: {
            detectScreenOrientation: !0
        },
        plugins: {
            sortPluginsFor: [/palemoon/i],
            excludeIE: !1
        },
        extraComponents: [],
        excludes: {
            enumerateDevices: !0,
            pixelRatio: !0,
            doNotTrack: !0,
            fontsFlash: !0
        },
        NOT_AVAILABLE: "not available",
        ERROR: "error",
        EXCLUDED: "excluded"
    }
      , r = function() {
        return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
    }
      , n = function(e) {
        var t = [window.screen.width, window.screen.height];
        return e.screen.detectScreenOrientation && t.sort().reverse(),
        t
    }
      , a = function(e) {
        if (window.screen.availWidth && window.screen.availHeight) {
            var t = [window.screen.availHeight, window.screen.availWidth];
            return e.screen.detectScreenOrientation && t.sort().reverse(),
            t
        }
        return e.NOT_AVAILABLE
    }
      , o = function(e) {
        if (null == navigator.plugins)
            return e.NOT_AVAILABLE;
        for (var t = [], r = 0, i = navigator.plugins.length; r < i; r++)
            navigator.plugins[r] && t.push(navigator.plugins[r]);
        return S(e) && (t = t.sort(function(e, t) {
            return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
        })),
        l(t, function(e) {
            var t = l(e, function(e) {
                return [e.type, e.suffixes]
            });
            return [e.name, e.description, t]
        })
    }
      , c = function(t) {
        var e = [];
        return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window ? e = l(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function(e) {
            try {
                return new window.ActiveXObject(e),
                e
            } catch (e) {
                return t.ERROR
            }
        }) : e.push(t.NOT_AVAILABLE),
        e = navigator.plugins ? e.concat(o(t)) : e
    }
      , S = function(e) {
        for (var t = !1, r = 0, i = e.plugins.sortPluginsFor.length; r < i; r++) {
            var n = e.plugins.sortPluginsFor[r];
            if (navigator.userAgent.match(n)) {
                t = !0;
                break
            }
        }
        return t
    }
      , m = function(t) {
        try {
            return !!window.sessionStorage
        } catch (e) {
            return t.ERROR
        }
    }
      , y = function(t) {
        try {
            return !!window.localStorage
        } catch (e) {
            return t.ERROR
        }
    }
      , E = function(t) {
        try {
            return !!window.indexedDB
        } catch (e) {
            return t.ERROR
        }
    }
      , T = function(e) {
        return navigator.hardwareConcurrency || e.NOT_AVAILABLE
    }
      , C = function(e) {
        return navigator.cpuClass || e.NOT_AVAILABLE
    }
      , v = function(e) {
        return navigator.platform || e.NOT_AVAILABLE
    }
      , w = function(e) {
        return navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack || e.NOT_AVAILABLE
    }
      , t = function() {
        var t, e = 0;
        void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
        try {
            document.createEvent("TouchEvent"),
            t = !0
        } catch (e) {
            t = !1
        }
        return [e, t, "ontouchstart"in window]
    }
      , B = function(e) {
        var t = []
          , r = document.createElement("canvas");
        r.width = 2e3,
        r.height = 200,
        r.style.display = "inline";
        var i = r.getContext("2d");
        return i.rect(0, 0, 10, 10),
        i.rect(2, 2, 6, 6),
        t.push("canvas winding:" + (!1 === i.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
        i.textBaseline = "alphabetic",
        i.fillStyle = "#f60",
        i.fillRect(125, 1, 62, 20),
        i.fillStyle = "#069",
        e.dontUseFakeFontInCanvas ? i.font = "11pt Arial" : i.font = "11pt no-real-font-123",
        i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
        i.fillStyle = "rgba(102, 204, 0, 0.2)",
        i.font = "18pt Arial",
        i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
        i.globalCompositeOperation = "multiply",
        i.fillStyle = "rgb(255,0,255)",
        i.beginPath(),
        i.arc(50, 50, 50, 0, 2 * Math.PI, !0),
        i.closePath(),
        i.fill(),
        i.fillStyle = "rgb(0,255,255)",
        i.beginPath(),
        i.arc(100, 50, 50, 0, 2 * Math.PI, !0),
        i.closePath(),
        i.fill(),
        i.fillStyle = "rgb(255,255,0)",
        i.beginPath(),
        i.arc(75, 100, 50, 0, 2 * Math.PI, !0),
        i.closePath(),
        i.fill(),
        i.fillStyle = "rgb(255,0,255)",
        i.arc(75, 75, 75, 0, 2 * Math.PI, !0),
        i.arc(75, 75, 25, 0, 2 * Math.PI, !0),
        i.fill("evenodd"),
        r.toDataURL && t.push("canvas fp:" + r.toDataURL()),
        t
    }
      , R = function() {
        function e(e) {
            return a.clearColor(0, 0, 0, 1),
            a.enable(a.DEPTH_TEST),
            a.depthFunc(a.LEQUAL),
            a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
            "[" + e[0] + ", " + e[1] + "]"
        }
        var a = U();
        if (!a)
            return null;
        var o = []
          , t = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, t);
        var r = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
        a.bufferData(a.ARRAY_BUFFER, r, a.STATIC_DRAW),
        t.itemSize = 3,
        t.numItems = 3;
        var i = a.createProgram()
          , n = a.createShader(a.VERTEX_SHADER);
        a.shaderSource(n, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
        a.compileShader(n);
        r = a.createShader(a.FRAGMENT_SHADER);
        a.shaderSource(r, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
        a.compileShader(r),
        a.attachShader(i, n),
        a.attachShader(i, r),
        a.linkProgram(i),
        a.useProgram(i),
        i.vertexPosAttrib = a.getAttribLocation(i, "attrVertex"),
        i.offsetUniform = a.getUniformLocation(i, "uniformOffset"),
        a.enableVertexAttribArray(i.vertexPosArray),
        a.vertexAttribPointer(i.vertexPosAttrib, t.itemSize, a.FLOAT, !1, 0, 0),
        a.uniform2f(i.offsetUniform, 1, 1),
        a.drawArrays(a.TRIANGLE_STRIP, 0, t.numItems);
        try {
            o.push(a.canvas.toDataURL())
        } catch (e) {}
        o.push("extensions:" + (a.getSupportedExtensions() || []).join(";")),
        o.push("webgl aliased line width range:" + e(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))),
        o.push("webgl aliased point size range:" + e(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))),
        o.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS)),
        o.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no")),
        o.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS)),
        o.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS)),
        o.push("webgl green bits:" + a.getParameter(a.GREEN_BITS)),
        o.push("webgl max anisotropy:" + function(e) {
            var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
            if (t) {
                t = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                return t = 0 === t ? 2 : t
            }
            return null
        }(a)),
        o.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
        o.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)),
        o.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)),
        o.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE)),
        o.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)),
        o.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE)),
        o.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS)),
        o.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS)),
        o.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
        o.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)),
        o.push("webgl max viewport dims:" + e(a.getParameter(a.MAX_VIEWPORT_DIMS))),
        o.push("webgl red bits:" + a.getParameter(a.RED_BITS)),
        o.push("webgl renderer:" + a.getParameter(a.RENDERER)),
        o.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION)),
        o.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS)),
        o.push("webgl vendor:" + a.getParameter(a.VENDOR)),
        o.push("webgl version:" + a.getParameter(a.VERSION));
        try {
            var h = a.getExtension("WEBGL_debug_renderer_info");
            h && (o.push("webgl unmasked vendor:" + a.getParameter(h.UNMASKED_VENDOR_WEBGL)),
            o.push("webgl unmasked renderer:" + a.getParameter(h.UNMASKED_RENDERER_WEBGL)))
        } catch (e) {}
        return a.getShaderPrecisionFormat && s(["FLOAT", "INT"], function(n) {
            s(["VERTEX", "FRAGMENT"], function(i) {
                s(["HIGH", "MEDIUM", "LOW"], function(r) {
                    s(["precision", "rangeMin", "rangeMax"], function(e) {
                        var t = a.getShaderPrecisionFormat(a[i + "_SHADER"], a[r + "_" + n])[e];
                        "precision" !== e && (e = "precision " + e);
                        t = ["webgl ", i.toLowerCase(), " shader ", r.toLowerCase(), " ", n.toLowerCase(), " ", e, ":", t].join("");
                        o.push(t)
                    })
                })
            })
        }),
        o
    }
      , _ = function() {
        try {
            var e = U()
              , t = e.getExtension("WEBGL_debug_renderer_info");
            return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
        } catch (e) {
            return null
        }
    }
      , b = function() {
        var e = document.createElement("div");
        e.innerHTML = "&nbsp;";
        var t = !(e.className = "adsbox");
        try {
            document.body.appendChild(e),
            t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
            document.body.removeChild(e)
        } catch (e) {
            t = !1
        }
        return t
    }
      , H = function() {
        if (void 0 !== navigator.languages)
            try {
                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                    return !0
            } catch (e) {
                return !0
            }
        return !1
    }
      , O = function() {
        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
    }
      , M = function() {
        var e = navigator.userAgent.toLowerCase()
          , t = navigator.oscpu
          , r = navigator.platform.toLowerCase()
          , e = 0 <= e.indexOf("windows phone") ? "Windows Phone" : 0 <= e.indexOf("win") ? "Windows" : 0 <= e.indexOf("android") ? "Android" : 0 <= e.indexOf("linux") ? "Linux" : 0 <= e.indexOf("iphone") || 0 <= e.indexOf("ipad") ? "iOS" : 0 <= e.indexOf("mac") ? "Mac" : "Other";
        if (("ontouchstart"in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
            return !0;
        if (void 0 !== t) {
            if (0 <= (t = t.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e)
                return !0;
            if (0 <= t.indexOf("linux") && "Linux" !== e && "Android" !== e)
                return !0;
            if (0 <= t.indexOf("mac") && "Mac" !== e && "iOS" !== e)
                return !0;
            if ((-1 === t.indexOf("win") && -1 === t.indexOf("linux") && -1 === t.indexOf("mac")) != ("Other" === e))
                return !0
        }
        return 0 <= r.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || ((0 <= r.indexOf("linux") || 0 <= r.indexOf("android") || 0 <= r.indexOf("pike")) && "Linux" !== e && "Android" !== e || ((0 <= r.indexOf("mac") || 0 <= r.indexOf("ipad") || 0 <= r.indexOf("ipod") || 0 <= r.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || ((-1 === r.indexOf("win") && -1 === r.indexOf("linux") && -1 === r.indexOf("mac")) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
    }
      , x = function() {
        var e = navigator.userAgent.toLowerCase()
          , t = navigator.productSub
          , e = 0 <= e.indexOf("firefox") ? "Firefox" : 0 <= e.indexOf("opera") || 0 <= e.indexOf("opr") ? "Opera" : 0 <= e.indexOf("chrome") ? "Chrome" : 0 <= e.indexOf("safari") ? "Safari" : 0 <= e.indexOf("trident") ? "Internet Explorer" : "Other";
        if (("Chrome" === e || "Safari" === e || "Opera" === e) && "20030107" !== t)
            return !0;
        var r, t = eval.toString().length;
        if (37 === t && "Safari" !== e && "Firefox" !== e && "Other" !== e)
            return !0;
        if (39 === t && "Internet Explorer" !== e && "Other" !== e)
            return !0;
        if (33 === t && "Chrome" !== e && "Opera" !== e && "Other" !== e)
            return !0;
        try {
            throw "a"
        } catch (e) {
            try {
                e.toSource(),
                r = !0
            } catch (e) {
                r = !1
            }
        }
        return r && "Firefox" !== e && "Other" !== e
    }
      , k = function() {
        var e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }
      , P = function() {
        if (!k())
            return !1;
        var e = U();
        return !!window.WebGLRenderingContext && !!e
    }
      , I = function() {
        return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
    }
      , D = function() {
        return void 0 !== window.swfobject
    }
      , L = function() {
        return window.swfobject.hasFlashPlayerVersion("9.0.0")
    }
      , N = function(t, e) {
        var r = "___fp_swf_loaded";
        window[r] = function(e) {
            t(e)
        }
        ;
        var i, n, a = e.fonts.swfContainerId;
        (n = document.createElement("div")).setAttribute("id", i.fonts.swfContainerId),
        document.body.appendChild(n);
        window.swfobject.embedSWF(e.fonts.swfPath, a, "1", "1", "9.0.0", !1, {
            onReady: r
        }, {
            allowScriptAccess: "always",
            menu: "false"
        }, {})
    }
      , U = function() {
        var e = document.createElement("canvas")
          , t = null;
        try {
            t = e.getContext("webgl") || e.getContext("experimental-webgl")
        } catch (e) {}
        return t = t || null
    }
      , F = [{
        key: "userAgent",
        getData: function(e) {
            e(navigator.userAgent)
        }
    }, {
        key: "webdriver",
        getData: function(e, t) {
            e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
        }
    }, {
        key: "language",
        getData: function(e, t) {
            e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
        }
    }, {
        key: "colorDepth",
        getData: function(e, t) {
            e(window.screen.colorDepth || t.NOT_AVAILABLE)
        }
    }, {
        key: "deviceMemory",
        getData: function(e, t) {
            e(navigator.deviceMemory || t.NOT_AVAILABLE)
        }
    }, {
        key: "pixelRatio",
        getData: function(e, t) {
            e(window.devicePixelRatio || t.NOT_AVAILABLE)
        }
    }, {
        key: "hardwareConcurrency",
        getData: function(e, t) {
            e(T(t))
        }
    }, {
        key: "screenResolution",
        getData: function(e, t) {
            e(n(t))
        }
    }, {
        key: "availableScreenResolution",
        getData: function(e, t) {
            e(a(t))
        }
    }, {
        key: "timezoneOffset",
        getData: function(e) {
            e((new Date).getTimezoneOffset())
        }
    }, {
        key: "timezone",
        getData: function(e, t) {
            window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(t.NOT_AVAILABLE)
        }
    }, {
        key: "sessionStorage",
        getData: function(e, t) {
            e(m(t))
        }
    }, {
        key: "localStorage",
        getData: function(e, t) {
            e(y(t))
        }
    }, {
        key: "indexedDb",
        getData: function(e, t) {
            e(E(t))
        }
    }, {
        key: "addBehavior",
        getData: function(e) {
            e(!(!document.body || !document.body.addBehavior))
        }
    }, {
        key: "openDatabase",
        getData: function(e) {
            e(!!window.openDatabase)
        }
    }, {
        key: "cpuClass",
        getData: function(e, t) {
            e(C(t))
        }
    }, {
        key: "platform",
        getData: function(e, t) {
            e(v(t))
        }
    }, {
        key: "doNotTrack",
        getData: function(e, t) {
            e(w(t))
        }
    }, {
        key: "plugins",
        getData: function(e, t) {
            I() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(c(t)) : e(o(t))
        }
    }, {
        key: "canvas",
        getData: function(e, t) {
            k() ? e(B(t)) : e(t.NOT_AVAILABLE)
        }
    }, {
        key: "webgl",
        getData: function(e, t) {
            P() ? e(R()) : e(t.NOT_AVAILABLE)
        }
    }, {
        key: "webglVendorAndRenderer",
        getData: function(e) {
            P() ? e(_()) : e()
        }
    }, {
        key: "adBlock",
        getData: function(e) {
            e(b())
        }
    }, {
        key: "hasLiedLanguages",
        getData: function(e) {
            e(H())
        }
    }, {
        key: "hasLiedResolution",
        getData: function(e) {
            e(O())
        }
    }, {
        key: "hasLiedOs",
        getData: function(e) {
            e(M())
        }
    }, {
        key: "hasLiedBrowser",
        getData: function(e) {
            e(x())
        }
    }, {
        key: "touchSupport",
        getData: function(e) {
            e(t())
        }
    }, {
        key: "fonts",
        getData: function(e, t) {
            var l = ["monospace", "sans-serif", "serif"]
              , c = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
            t.fonts.extendedJsFonts && (c = c.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])),
            c = (c = c.concat(t.fonts.userDefinedFonts)).filter(function(e, t) {
                return c.indexOf(e) === t
            });
            function u() {
                var e = document.createElement("span");
                return e.style.position = "absolute",
                e.style.left = "-9999px",
                e.style.fontSize = "72px",
                e.style.fontStyle = "normal",
                e.style.fontWeight = "normal",
                e.style.letterSpacing = "normal",
                e.style.lineBreak = "auto",
                e.style.lineHeight = "normal",
                e.style.textTransform = "none",
                e.style.textAlign = "left",
                e.style.textDecoration = "none",
                e.style.textShadow = "none",
                e.style.whiteSpace = "normal",
                e.style.wordBreak = "normal",
                e.style.wordSpacing = "normal",
                e.innerHTML = "mmmmmmmmmmlli",
                e
            }
            var t = document.getElementsByTagName("body")[0]
              , n = document.createElement("div")
              , d = document.createElement("div")
              , i = {}
              , a = {}
              , r = function() {
                for (var e = [], t = 0, r = l.length; t < r; t++) {
                    var i = u();
                    i.style.fontFamily = l[t],
                    n.appendChild(i),
                    e.push(i)
                }
                return e
            }();
            t.appendChild(n);
            for (var o = 0, h = l.length; o < h; o++)
                i[l[o]] = r[o].offsetWidth,
                a[l[o]] = r[o].offsetHeight;
            var s = function() {
                for (var e, t, r = {}, i = 0, n = c.length; i < n; i++) {
                    for (var a = [], o = 0, h = l.length; o < h; o++) {
                        var s = (e = c[i],
                        t = l[o],
                        s = void 0,
                        (s = u()).style.fontFamily = "'" + e + "'," + t,
                        s);
                        d.appendChild(s),
                        a.push(s)
                    }
                    r[c[i]] = a
                }
                return r
            }();
            t.appendChild(d);
            for (var f = [], p = 0, g = c.length; p < g; p++)
                !function(e) {
                    for (var t = !1, r = 0; r < l.length; r++)
                        if (t = e[r].offsetWidth !== i[l[r]] || e[r].offsetHeight !== a[l[r]])
                            return t;
                    return t
                }(s[c[p]]) || f.push(c[p]);
            t.removeChild(d),
            t.removeChild(n),
            e(f)
        },
        pauseBefore: !0
    }, {
        key: "fontsFlash",
        getData: function(t, e) {
            return D() ? L() ? e.fonts.swfPath ? void N(function(e) {
                t(e)
            }, e) : t("missing options.fonts.swfPath") : t("flash not installed") : t("swf object not loaded")
        },
        pauseBefore: !0
    }, {
        key: "audio",
        getData: function(r, e) {
            var t = e.audio;
            if (t.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))
                return r(e.EXCLUDED);
            var i = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            if (null == i)
                return r(e.NOT_AVAILABLE);
            var n = new i(1,44100,44100)
              , a = n.createOscillator();
            a.type = "triangle",
            a.frequency.setValueAtTime(1e4, n.currentTime);
            var o = n.createDynamicsCompressor();
            s([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], function(e) {
                void 0 !== o[e[0]] && "function" == typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], n.currentTime)
            }),
            a.connect(o),
            o.connect(n.destination),
            a.start(0),
            n.startRendering();
            var h = setTimeout(function() {
                return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'),
                n.oncomplete = function() {}
                ,
                n = null,
                r("audioTimeout")
            }, t.timeout);
            n.oncomplete = function(e) {
                var t;
                try {
                    clearTimeout(h),
                    t = e.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function(e, t) {
                        return e + Math.abs(t)
                    }, 0).toString(),
                    a.disconnect(),
                    o.disconnect()
                } catch (e) {
                    return void r(e)
                }
                r(t)
            }
        }
    }, {
        key: "enumerateDevices",
        getData: function(t, e) {
            if (!r())
                return t(e.NOT_AVAILABLE);
            navigator.mediaDevices.enumerateDevices().then(function(e) {
                t(e.map(function(e) {
                    return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                }))
            }).catch(function(e) {
                t(e)
            })
        }
    }];
    return i.get = function(r, i) {
        (function(e, t) {
            if (null == t)
                return;
            var r, i;
            for (i in t)
                null == (r = t[i]) || Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r)
        }
        )(r = i ? r || {} : (i = r,
        {}), e),
        r.components = r.extraComponents.concat(F);
        var n = {
            data: [],
            addPreprocessedComponent: function(e, t) {
                "function" == typeof r.preprocessor && (t = r.preprocessor(e, t)),
                n.data.push({
                    key: e,
                    value: t
                })
            }
        }
          , a = -1
          , o = function(e) {
            if ((a += 1) >= r.components.length)
                i(n.data);
            else {
                var t = r.components[a];
                if (r.excludes[t.key])
                    o(!1);
                else {
                    if (!e && t.pauseBefore)
                        return --a,
                        void setTimeout(function() {
                            o(!0)
                        }, 1);
                    try {
                        t.getData(function(e) {
                            n.addPreprocessedComponent(t.key, e),
                            o(!1)
                        }, r)
                    } catch (e) {
                        n.addPreprocessedComponent(t.key, String(e)),
                        o(!1)
                    }
                }
            }
        };
        o(!1)
    }
    ,
    i.getPromise = function(r) {
        return new Promise(function(e, t) {
            i.get(r, e)
        }
        )
    }
    ,
    i.getV18 = function(a, o) {
        return null == o && (o = a,
        a = {}),
        i.get(a, function(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var i = e[r];
                i.value === (a.NOT_AVAILABLE || "not available") ? t.push({
                    key: i.key,
                    value: "unknown"
                }) : "plugins" === i.key ? t.push({
                    key: "plugins",
                    value: l(i.value, function(e) {
                        var t = l(e[2], function(e) {
                            return e.join ? e.join("~") : e
                        }).join(",");
                        return [e[0], e[1], t].join("::")
                    })
                }) : -1 !== ["canvas", "webgl"].indexOf(i.key) ? t.push({
                    key: i.key,
                    value: i.value.join("~")
                }) : -1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(i.key) ? i.value && t.push({
                    key: i.key,
                    value: 1
                }) : i.value ? t.push(i.value.join ? {
                    key: i.key,
                    value: i.value.join(";")
                } : i) : t.push({
                    key: i.key,
                    value: i.value
                })
            }
            var n = h(l(t, function(e) {
                return e.value
            }).join("~~~"), 31);
            o(n, t)
        })
    }
    ,
    i.x64hash128 = h,
    window.x64hash128 = h,
    i.VERSION = "2.0.6",
    i
}),
function(e) {
    "use strict";
    function u(e, t) {
        var r = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
    }
    function h(e, t, r, i, n, a) {
        return u((a = u(u(t, e), u(i, a))) << (n = n) | a >>> 32 - n, r)
    }
    function d(e, t, r, i, n, a, o) {
        return h(t & r | ~t & i, e, t, n, a, o)
    }
    function f(e, t, r, i, n, a, o) {
        return h(t & i | r & ~i, e, t, n, a, o)
    }
    function p(e, t, r, i, n, a, o) {
        return h(t ^ r ^ i, e, t, n, a, o)
    }
    function g(e, t, r, i, n, a, o) {
        return h(r ^ (t | ~i), e, t, n, a, o)
    }
    function o(e, t) {
        var r, i, n, a;
        e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var o = 1732584193, h = -271733879, s = -1732584194, l = 271733878, c = 0; c < e.length; c += 16)
            o = d(r = o, i = h, n = s, a = l, e[c], 7, -680876936),
            l = d(l, o, h, s, e[c + 1], 12, -389564586),
            s = d(s, l, o, h, e[c + 2], 17, 606105819),
            h = d(h, s, l, o, e[c + 3], 22, -1044525330),
            o = d(o, h, s, l, e[c + 4], 7, -176418897),
            l = d(l, o, h, s, e[c + 5], 12, 1200080426),
            s = d(s, l, o, h, e[c + 6], 17, -1473231341),
            h = d(h, s, l, o, e[c + 7], 22, -45705983),
            o = d(o, h, s, l, e[c + 8], 7, 1770035416),
            l = d(l, o, h, s, e[c + 9], 12, -1958414417),
            s = d(s, l, o, h, e[c + 10], 17, -42063),
            h = d(h, s, l, o, e[c + 11], 22, -1990404162),
            o = d(o, h, s, l, e[c + 12], 7, 1804603682),
            l = d(l, o, h, s, e[c + 13], 12, -40341101),
            s = d(s, l, o, h, e[c + 14], 17, -1502002290),
            o = f(o, h = d(h, s, l, o, e[c + 15], 22, 1236535329), s, l, e[c + 1], 5, -165796510),
            l = f(l, o, h, s, e[c + 6], 9, -1069501632),
            s = f(s, l, o, h, e[c + 11], 14, 643717713),
            h = f(h, s, l, o, e[c], 20, -373897302),
            o = f(o, h, s, l, e[c + 5], 5, -701558691),
            l = f(l, o, h, s, e[c + 10], 9, 38016083),
            s = f(s, l, o, h, e[c + 15], 14, -660478335),
            h = f(h, s, l, o, e[c + 4], 20, -405537848),
            o = f(o, h, s, l, e[c + 9], 5, 568446438),
            l = f(l, o, h, s, e[c + 14], 9, -1019803690),
            s = f(s, l, o, h, e[c + 3], 14, -187363961),
            h = f(h, s, l, o, e[c + 8], 20, 1163531501),
            o = f(o, h, s, l, e[c + 13], 5, -1444681467),
            l = f(l, o, h, s, e[c + 2], 9, -51403784),
            s = f(s, l, o, h, e[c + 7], 14, 1735328473),
            o = p(o, h = f(h, s, l, o, e[c + 12], 20, -1926607734), s, l, e[c + 5], 4, -378558),
            l = p(l, o, h, s, e[c + 8], 11, -2022574463),
            s = p(s, l, o, h, e[c + 11], 16, 1839030562),
            h = p(h, s, l, o, e[c + 14], 23, -35309556),
            o = p(o, h, s, l, e[c + 1], 4, -1530992060),
            l = p(l, o, h, s, e[c + 4], 11, 1272893353),
            s = p(s, l, o, h, e[c + 7], 16, -155497632),
            h = p(h, s, l, o, e[c + 10], 23, -1094730640),
            o = p(o, h, s, l, e[c + 13], 4, 681279174),
            l = p(l, o, h, s, e[c], 11, -358537222),
            s = p(s, l, o, h, e[c + 3], 16, -722521979),
            h = p(h, s, l, o, e[c + 6], 23, 76029189),
            o = p(o, h, s, l, e[c + 9], 4, -640364487),
            l = p(l, o, h, s, e[c + 12], 11, -421815835),
            s = p(s, l, o, h, e[c + 15], 16, 530742520),
            o = g(o, h = p(h, s, l, o, e[c + 2], 23, -995338651), s, l, e[c], 6, -198630844),
            l = g(l, o, h, s, e[c + 7], 10, 1126891415),
            s = g(s, l, o, h, e[c + 14], 15, -1416354905),
            h = g(h, s, l, o, e[c + 5], 21, -57434055),
            o = g(o, h, s, l, e[c + 12], 6, 1700485571),
            l = g(l, o, h, s, e[c + 3], 10, -1894986606),
            s = g(s, l, o, h, e[c + 10], 15, -1051523),
            h = g(h, s, l, o, e[c + 1], 21, -2054922799),
            o = g(o, h, s, l, e[c + 8], 6, 1873313359),
            l = g(l, o, h, s, e[c + 15], 10, -30611744),
            s = g(s, l, o, h, e[c + 6], 15, -1560198380),
            h = g(h, s, l, o, e[c + 13], 21, 1309151649),
            o = g(o, h, s, l, e[c + 4], 6, -145523070),
            l = g(l, o, h, s, e[c + 11], 10, -1120210379),
            s = g(s, l, o, h, e[c + 2], 15, 718787259),
            h = g(h, s, l, o, e[c + 9], 21, -343485551),
            o = u(o, r),
            h = u(h, i),
            s = u(s, n),
            l = u(l, a);
        return [o, h, s, l]
    }
    function s(e) {
        for (var t = "", r = 32 * e.length, i = 0; i < r; i += 8)
            t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);
        return t
    }
    function l(e) {
        var t = [];
        for (t[(e.length >> 2) - 1] = void 0,
        i = 0; i < t.length; i += 1)
            t[i] = 0;
        for (var r = 8 * e.length, i = 0; i < r; i += 8)
            t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
        return t
    }
    function i(e) {
        for (var t, r = "0123456789abcdef", i = "", n = 0; n < e.length; n += 1)
            t = e.charCodeAt(n),
            i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
        return i
    }
    function r(e) {
        return unescape(encodeURIComponent(e))
    }
    function n(e) {
        return s(o(l(e = r(e)), 8 * e.length))
    }
    function a(e, t) {
        return function(e, t) {
            var r, i = l(e), n = [], a = [];
            for (n[15] = a[15] = void 0,
            16 < i.length && (i = o(i, 8 * e.length)),
            r = 0; r < 16; r += 1)
                n[r] = 909522486 ^ i[r],
                a[r] = 1549556828 ^ i[r];
            return t = o(n.concat(l(t)), 512 + 8 * t.length),
            s(o(a.concat(t), 640))
        }(r(e), r(t))
    }
    function t(e, t, r) {
        return t ? r ? a(t, e) : i(a(t, e)) : r ? n(e) : i(n(e))
    }
    md5 = t;
    "function" == typeof define && define.amd ? define(function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : e.md5 = t
}(this),
function() {
    "use strict";
    var f = "input is invalid type"
      , e = "object" == typeof window
      , t = e ? window : {}
      , r = !(e = t.JS_SHA512_NO_WINDOW ? !1 : e) && "object" == typeof self;
    !t.JS_SHA512_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? t = global : r && (t = self);
    var i = !t.JS_SHA512_NO_COMMON_JS && "object" == typeof module && module.exports
      , n = "function" == typeof define && define.amd
      , p = !t.JS_SHA512_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer
      , S = "0123456789abcdef".split("")
      , a = [-2147483648, 8388608, 32768, 128]
      , s = [24, 16, 8, 0]
      , ee = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
      , o = ["hex", "array", "digest", "arrayBuffer"]
      , h = [];
    !t.JS_SHA512_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    ),
    !p || !t.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
        return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
    }
    );
    function l(t, r) {
        return function(e) {
            return new g(r,!0).update(e)[t]()
        }
    }
    function c(r, i) {
        return function(e, t) {
            return new u(e,i,!0).update(t)[r]()
        }
    }
    e = function(e) {
        var t = l("hex", e);
        t.create = function() {
            return new g(e)
        }
        ,
        t.update = function(e) {
            return t.create().update(e)
        }
        ;
        for (var r = 0; r < o.length; ++r) {
            var i = o[r];
            t[i] = l(i, e)
        }
        return t
    }
    ,
    r = function(t) {
        var r = c("hex", t);
        r.create = function(e) {
            return new u(e,t)
        }
        ,
        r.update = function(e, t) {
            return r.create(e).update(t)
        }
        ;
        for (var e = 0; e < o.length; ++e) {
            var i = o[e];
            r[i] = c(i, t)
        }
        return r
    }
    ;
    function g(e, t) {
        t ? (h[0] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = h[16] = h[17] = h[18] = h[19] = h[20] = h[21] = h[22] = h[23] = h[24] = h[25] = h[26] = h[27] = h[28] = h[29] = h[30] = h[31] = h[32] = 0,
        this.blocks = h) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        384 == e ? (this.h0h = 3418070365,
        this.h0l = 3238371032,
        this.h1h = 1654270250,
        this.h1l = 914150663,
        this.h2h = 2438529370,
        this.h2l = 812702999,
        this.h3h = 355462360,
        this.h3l = 4144912697,
        this.h4h = 1731405415,
        this.h4l = 4290775857,
        this.h5h = 2394180231,
        this.h5l = 1750603025,
        this.h6h = 3675008525,
        this.h6l = 1694076839,
        this.h7h = 1203062813,
        this.h7l = 3204075428) : 256 == e ? (this.h0h = 573645204,
        this.h0l = 4230739756,
        this.h1h = 2673172387,
        this.h1l = 3360449730,
        this.h2h = 596883563,
        this.h2l = 1867755857,
        this.h3h = 2520282905,
        this.h3l = 1497426621,
        this.h4h = 2519219938,
        this.h4l = 2827943907,
        this.h5h = 3193839141,
        this.h5l = 1401305490,
        this.h6h = 721525244,
        this.h6l = 746961066,
        this.h7h = 246885852,
        this.h7l = 2177182882) : 224 == e ? (this.h0h = 2352822216,
        this.h0l = 424955298,
        this.h1h = 1944164710,
        this.h1l = 2312950998,
        this.h2h = 502970286,
        this.h2l = 855612546,
        this.h3h = 1738396948,
        this.h3l = 1479516111,
        this.h4h = 258812777,
        this.h4l = 2077511080,
        this.h5h = 2011393907,
        this.h5l = 79989058,
        this.h6h = 1067287976,
        this.h6l = 1780299464,
        this.h7h = 286451373,
        this.h7l = 2446758561) : (this.h0h = 1779033703,
        this.h0l = 4089235720,
        this.h1h = 3144134277,
        this.h1l = 2227873595,
        this.h2h = 1013904242,
        this.h2l = 4271175723,
        this.h3h = 2773480762,
        this.h3l = 1595750129,
        this.h4h = 1359893119,
        this.h4l = 2917565137,
        this.h5h = 2600822924,
        this.h5l = 725511199,
        this.h6h = 528734635,
        this.h6l = 4215389547,
        this.h7h = 1541459225,
        this.h7l = 327033209),
        this.bits = e,
        this.block = this.start = this.bytes = this.hBytes = 0,
        this.finalized = this.hashed = !1
    }
    function u(e, t, r) {
        var i, n = typeof e;
        if ("string" != n) {
            if ("object" != n)
                throw new Error(f);
            if (null === e)
                throw new Error(f);
            if (p && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
            else if (!(Array.isArray(e) || p && ArrayBuffer.isView(e)))
                throw new Error(f);
            i = !0
        }
        var a = e.length;
        if (!i) {
            for (var o, h = [], a = e.length, s = 0, l = 0; l < a; ++l)
                (o = e.charCodeAt(l)) < 128 ? h[s++] = o : (o < 2048 ? h[s++] = 192 | o >> 6 : (o < 55296 || 57344 <= o ? h[s++] = 224 | o >> 12 : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++l)),
                h[s++] = 240 | o >> 18,
                h[s++] = 128 | o >> 12 & 63),
                h[s++] = 128 | o >> 6 & 63),
                h[s++] = 128 | 63 & o);
            e = h
        }
        128 < e.length && (e = new g(t,!0).update(e).array());
        for (var c = [], u = [], l = 0; l < 128; ++l) {
            var d = e[l] || 0;
            c[l] = 92 ^ d,
            u[l] = 54 ^ d
        }
        g.call(this, t, r),
        this.update(u),
        this.oKeyPad = c,
        this.inner = !0,
        this.sharedMemory = r
    }
    g.prototype.update = function(e) {
        if (this.finalized)
            throw new Error("finalize already called");
        var t, r = typeof e;
        if ("string" != r) {
            if ("object" != r)
                throw new Error(f);
            if (null === e)
                throw new Error(f);
            if (p && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
            else if (!(Array.isArray(e) || p && ArrayBuffer.isView(e)))
                throw new Error(f);
            t = !0
        }
        for (var i, n, a = 0, o = e.length, h = this.blocks; a < o; ) {
            if (this.hashed && (this.hashed = !1,
            h[0] = this.block,
            h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = h[16] = h[17] = h[18] = h[19] = h[20] = h[21] = h[22] = h[23] = h[24] = h[25] = h[26] = h[27] = h[28] = h[29] = h[30] = h[31] = h[32] = 0),
            t)
                for (n = this.start; a < o && n < 128; ++a)
                    h[n >> 2] |= e[a] << s[3 & n++];
            else
                for (n = this.start; a < o && n < 128; ++a)
                    (i = e.charCodeAt(a)) < 128 ? h[n >> 2] |= i << s[3 & n++] : (i < 2048 ? h[n >> 2] |= (192 | i >> 6) << s[3 & n++] : (i < 55296 || 57344 <= i ? h[n >> 2] |= (224 | i >> 12) << s[3 & n++] : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++a)),
                    h[n >> 2] |= (240 | i >> 18) << s[3 & n++],
                    h[n >> 2] |= (128 | i >> 12 & 63) << s[3 & n++]),
                    h[n >> 2] |= (128 | i >> 6 & 63) << s[3 & n++]),
                    h[n >> 2] |= (128 | 63 & i) << s[3 & n++]);
            this.lastByteIndex = n,
            this.bytes += n - this.start,
            128 <= n ? (this.block = h[32],
            this.start = n - 128,
            this.hash(),
            this.hashed = !0) : this.start = n
        }
        return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0,
        this.bytes = this.bytes % 4294967296),
        this
    }
    ,
    g.prototype.finalize = function() {
        var e, t;
        this.finalized || (this.finalized = !0,
        e = this.blocks,
        t = this.lastByteIndex,
        e[32] = this.block,
        e[t >> 2] |= a[3 & t],
        this.block = e[32],
        112 <= t && (this.hashed || this.hash(),
        e[0] = this.block,
        e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = e[16] = e[17] = e[18] = e[19] = e[20] = e[21] = e[22] = e[23] = e[24] = e[25] = e[26] = e[27] = e[28] = e[29] = e[30] = e[31] = e[32] = 0),
        e[30] = this.hBytes << 3 | this.bytes >>> 29,
        e[31] = this.bytes << 3,
        this.hash())
    }
    ,
    g.prototype.hash = function() {
        for (var e, t, r, i, n, a, o, h, s, l, c, u, d, f, p, g, A, S, m = this.h0h, y = this.h0l, E = this.h1h, T = this.h1l, C = this.h2h, v = this.h2l, w = this.h3h, B = this.h3l, R = this.h4h, _ = this.h4l, b = this.h5h, H = this.h5l, O = this.h6h, M = this.h6l, x = this.h7h, k = this.h7l, P = this.blocks, I = 32; I < 160; I += 2)
            e = ((d = P[I - 30]) >>> 1 | (f = P[I - 29]) << 31) ^ (d >>> 8 | f << 24) ^ d >>> 7,
            t = (f >>> 1 | d << 31) ^ (f >>> 8 | d << 24) ^ (f >>> 7 | d << 25),
            r = ((d = P[I - 4]) >>> 19 | (f = P[I - 3]) << 13) ^ (f >>> 29 | d << 3) ^ d >>> 6,
            i = (f >>> 19 | d << 13) ^ (d >>> 29 | f << 3) ^ (f >>> 6 | d << 26),
            d = P[I - 32],
            f = P[I - 31],
            p = P[I - 14],
            g = P[I - 13],
            P[I] = (p >>> 16) + (d >>> 16) + (e >>> 16) + (r >>> 16) + ((o = (65535 & p) + (65535 & d) + (65535 & e) + (65535 & r) + ((a = (g >>> 16) + (f >>> 16) + (t >>> 16) + (i >>> 16) + ((n = (65535 & g) + (65535 & f) + (65535 & t) + (65535 & i)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            P[I + 1] = a << 16 | 65535 & n;
        var D = m
          , L = y
          , N = E
          , U = T
          , F = C
          , X = v
          , G = w
          , V = B
          , W = R
          , j = _
          , z = b
          , K = H
          , J = O
          , Y = M
          , Z = x
          , q = k
          , Q = N & F
          , $ = U & X;
        for (I = 0; I < 160; I += 8)
            d = P[I],
            f = P[I + 1],
            d = ((p = ee[I]) >>> 16) + (d >>> 16) + ((A = W & z ^ ~W & J) >>> 16) + ((r = (W >>> 14 | j << 18) ^ (W >>> 18 | j << 14) ^ (j >>> 9 | W << 23)) >>> 16) + (Z >>> 16) + ((o = (65535 & p) + (65535 & d) + (65535 & A) + (65535 & r) + (65535 & Z) + ((a = ((g = ee[I + 1]) >>> 16) + (f >>> 16) + ((S = j & K ^ ~j & Y) >>> 16) + ((i = (j >>> 14 | W << 18) ^ (j >>> 18 | W << 14) ^ (W >>> 9 | j << 23)) >>> 16) + (q >>> 16) + ((n = (65535 & g) + (65535 & f) + (65535 & S) + (65535 & i) + (65535 & q)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            f = a << 16 | 65535 & n,
            p = ((c = (h = D & N) ^ D & F ^ Q) >>> 16) + ((e = (D >>> 28 | L << 4) ^ (L >>> 2 | D << 30) ^ (L >>> 7 | D << 25)) >>> 16) + ((o = (65535 & c) + (65535 & e) + ((a = ((u = (s = L & U) ^ L & X ^ $) >>> 16) + ((t = (L >>> 28 | D << 4) ^ (D >>> 2 | L << 30) ^ (D >>> 7 | L << 25)) >>> 16) + ((n = (65535 & u) + (65535 & t)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            g = a << 16 | 65535 & n,
            Z = (G >>> 16) + (d >>> 16) + ((o = (65535 & G) + (65535 & d) + ((a = (V >>> 16) + (f >>> 16) + ((n = (65535 & V) + (65535 & f)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            q = a << 16 | 65535 & n,
            G = (p >>> 16) + (d >>> 16) + ((o = (65535 & p) + (65535 & d) + ((a = (g >>> 16) + (f >>> 16) + ((n = (65535 & g) + (65535 & f)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            V = a << 16 | 65535 & n,
            d = P[I + 2],
            f = P[I + 3],
            d = ((p = ee[I + 2]) >>> 16) + (d >>> 16) + ((A = Z & W ^ ~Z & z) >>> 16) + ((r = (Z >>> 14 | q << 18) ^ (Z >>> 18 | q << 14) ^ (q >>> 9 | Z << 23)) >>> 16) + (J >>> 16) + ((o = (65535 & p) + (65535 & d) + (65535 & A) + (65535 & r) + (65535 & J) + ((a = ((g = ee[I + 3]) >>> 16) + (f >>> 16) + ((S = q & j ^ ~q & K) >>> 16) + ((i = (q >>> 14 | Z << 18) ^ (q >>> 18 | Z << 14) ^ (Z >>> 9 | q << 23)) >>> 16) + (Y >>> 16) + ((n = (65535 & g) + (65535 & f) + (65535 & S) + (65535 & i) + (65535 & Y)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            f = a << 16 | 65535 & n,
            p = ((c = (l = G & D) ^ G & N ^ h) >>> 16) + ((e = (G >>> 28 | V << 4) ^ (V >>> 2 | G << 30) ^ (V >>> 7 | G << 25)) >>> 16) + ((o = (65535 & c) + (65535 & e) + ((a = ((u = (h = V & L) ^ V & U ^ s) >>> 16) + ((t = (V >>> 28 | G << 4) ^ (G >>> 2 | V << 30) ^ (G >>> 7 | V << 25)) >>> 16) + ((n = (65535 & u) + (65535 & t)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            g = a << 16 | 65535 & n,
            J = (F >>> 16) + (d >>> 16) + ((o = (65535 & F) + (65535 & d) + ((a = (X >>> 16) + (f >>> 16) + ((n = (65535 & X) + (65535 & f)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            Y = a << 16 | 65535 & n,
            F = (p >>> 16) + (d >>> 16) + ((o = (65535 & p) + (65535 & d) + ((a = (g >>> 16) + (f >>> 16) + ((n = (65535 & g) + (65535 & f)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            X = a << 16 | 65535 & n,
            d = P[I + 4],
            f = P[I + 5],
            d = ((p = ee[I + 4]) >>> 16) + (d >>> 16) + ((A = J & Z ^ ~J & W) >>> 16) + ((r = (J >>> 14 | Y << 18) ^ (J >>> 18 | Y << 14) ^ (Y >>> 9 | J << 23)) >>> 16) + (z >>> 16) + ((o = (65535 & p) + (65535 & d) + (65535 & A) + (65535 & r) + (65535 & z) + ((a = ((g = ee[I + 5]) >>> 16) + (f >>> 16) + ((S = Y & q ^ ~Y & j) >>> 16) + ((i = (Y >>> 14 | J << 18) ^ (Y >>> 18 | J << 14) ^ (J >>> 9 | Y << 23)) >>> 16) + (K >>> 16) + ((n = (65535 & g) + (65535 & f) + (65535 & S) + (65535 & i) + (65535 & K)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            f = a << 16 | 65535 & n,
            p = ((c = (s = F & G) ^ F & D ^ l) >>> 16) + ((e = (F >>> 28 | X << 4) ^ (X >>> 2 | F << 30) ^ (X >>> 7 | F << 25)) >>> 16) + ((o = (65535 & c) + (65535 & e) + ((a = ((u = (l = X & V) ^ X & L ^ h) >>> 16) + ((t = (X >>> 28 | F << 4) ^ (F >>> 2 | X << 30) ^ (F >>> 7 | X << 25)) >>> 16) + ((n = (65535 & u) + (65535 & t)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            g = a << 16 | 65535 & n,
            z = (N >>> 16) + (d >>> 16) + ((o = (65535 & N) + (65535 & d) + ((a = (U >>> 16) + (f >>> 16) + ((n = (65535 & U) + (65535 & f)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            K = a << 16 | 65535 & n,
            N = (p >>> 16) + (d >>> 16) + ((o = (65535 & p) + (65535 & d) + ((a = (g >>> 16) + (f >>> 16) + ((n = (65535 & g) + (65535 & f)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            U = a << 16 | 65535 & n,
            d = P[I + 6],
            f = P[I + 7],
            d = ((p = ee[I + 6]) >>> 16) + (d >>> 16) + ((A = z & J ^ ~z & Z) >>> 16) + ((r = (z >>> 14 | K << 18) ^ (z >>> 18 | K << 14) ^ (K >>> 9 | z << 23)) >>> 16) + (W >>> 16) + ((o = (65535 & p) + (65535 & d) + (65535 & A) + (65535 & r) + (65535 & W) + ((a = ((g = ee[I + 7]) >>> 16) + (f >>> 16) + ((S = K & Y ^ ~K & q) >>> 16) + ((i = (K >>> 14 | z << 18) ^ (K >>> 18 | z << 14) ^ (z >>> 9 | K << 23)) >>> 16) + (j >>> 16) + ((n = (65535 & g) + (65535 & f) + (65535 & S) + (65535 & i) + (65535 & j)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            f = a << 16 | 65535 & n,
            p = ((c = (Q = N & F) ^ N & G ^ s) >>> 16) + ((e = (N >>> 28 | U << 4) ^ (U >>> 2 | N << 30) ^ (U >>> 7 | N << 25)) >>> 16) + ((o = (65535 & c) + (65535 & e) + ((a = ((u = ($ = U & X) ^ U & V ^ l) >>> 16) + ((t = (U >>> 28 | N << 4) ^ (N >>> 2 | U << 30) ^ (N >>> 7 | U << 25)) >>> 16) + ((n = (65535 & u) + (65535 & t)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            g = a << 16 | 65535 & n,
            W = (D >>> 16) + (d >>> 16) + ((o = (65535 & D) + (65535 & d) + ((a = (L >>> 16) + (f >>> 16) + ((n = (65535 & L) + (65535 & f)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            j = a << 16 | 65535 & n,
            D = (p >>> 16) + (d >>> 16) + ((o = (65535 & p) + (65535 & d) + ((a = (g >>> 16) + (f >>> 16) + ((n = (65535 & g) + (65535 & f)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
            L = a << 16 | 65535 & n;
        this.h0h = (m >>> 16) + (D >>> 16) + ((o = (65535 & m) + (65535 & D) + ((a = (y >>> 16) + (L >>> 16) + ((n = (65535 & y) + (65535 & L)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
        this.h0l = a << 16 | 65535 & n,
        this.h1h = (E >>> 16) + (N >>> 16) + ((o = (65535 & E) + (65535 & N) + ((a = (T >>> 16) + (U >>> 16) + ((n = (65535 & T) + (65535 & U)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
        this.h1l = a << 16 | 65535 & n,
        this.h2h = (C >>> 16) + (F >>> 16) + ((o = (65535 & C) + (65535 & F) + ((a = (v >>> 16) + (X >>> 16) + ((n = (65535 & v) + (65535 & X)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
        this.h2l = a << 16 | 65535 & n,
        this.h3h = (w >>> 16) + (G >>> 16) + ((o = (65535 & w) + (65535 & G) + ((a = (B >>> 16) + (V >>> 16) + ((n = (65535 & B) + (65535 & V)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
        this.h3l = a << 16 | 65535 & n,
        this.h4h = (R >>> 16) + (W >>> 16) + ((o = (65535 & R) + (65535 & W) + ((a = (_ >>> 16) + (j >>> 16) + ((n = (65535 & _) + (65535 & j)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
        this.h4l = a << 16 | 65535 & n,
        this.h5h = (b >>> 16) + (z >>> 16) + ((o = (65535 & b) + (65535 & z) + ((a = (H >>> 16) + (K >>> 16) + ((n = (65535 & H) + (65535 & K)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
        this.h5l = a << 16 | 65535 & n,
        this.h6h = (O >>> 16) + (J >>> 16) + ((o = (65535 & O) + (65535 & J) + ((a = (M >>> 16) + (Y >>> 16) + ((n = (65535 & M) + (65535 & Y)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
        this.h6l = a << 16 | 65535 & n,
        this.h7h = (x >>> 16) + (Z >>> 16) + ((o = (65535 & x) + (65535 & Z) + ((a = (k >>> 16) + (q >>> 16) + ((n = (65535 & k) + (65535 & q)) >>> 16)) >>> 16)) >>> 16) << 16 | 65535 & o,
        this.h7l = a << 16 | 65535 & n
    }
    ,
    g.prototype.toString = g.prototype.hex = function() {
        this.finalize();
        var e = this.h0h
          , t = this.h0l
          , r = this.h1h
          , i = this.h1l
          , n = this.h2h
          , a = this.h2l
          , o = this.h3h
          , h = this.h3l
          , s = this.h4h
          , l = this.h4l
          , c = this.h5h
          , u = this.h5l
          , d = this.h6h
          , f = this.h6l
          , p = this.h7h
          , g = this.h7l
          , A = this.bits
          , o = S[e >> 28 & 15] + S[e >> 24 & 15] + S[e >> 20 & 15] + S[e >> 16 & 15] + S[e >> 12 & 15] + S[e >> 8 & 15] + S[e >> 4 & 15] + S[15 & e] + S[t >> 28 & 15] + S[t >> 24 & 15] + S[t >> 20 & 15] + S[t >> 16 & 15] + S[t >> 12 & 15] + S[t >> 8 & 15] + S[t >> 4 & 15] + S[15 & t] + S[r >> 28 & 15] + S[r >> 24 & 15] + S[r >> 20 & 15] + S[r >> 16 & 15] + S[r >> 12 & 15] + S[r >> 8 & 15] + S[r >> 4 & 15] + S[15 & r] + S[i >> 28 & 15] + S[i >> 24 & 15] + S[i >> 20 & 15] + S[i >> 16 & 15] + S[i >> 12 & 15] + S[i >> 8 & 15] + S[i >> 4 & 15] + S[15 & i] + S[n >> 28 & 15] + S[n >> 24 & 15] + S[n >> 20 & 15] + S[n >> 16 & 15] + S[n >> 12 & 15] + S[n >> 8 & 15] + S[n >> 4 & 15] + S[15 & n] + S[a >> 28 & 15] + S[a >> 24 & 15] + S[a >> 20 & 15] + S[a >> 16 & 15] + S[a >> 12 & 15] + S[a >> 8 & 15] + S[a >> 4 & 15] + S[15 & a] + S[o >> 28 & 15] + S[o >> 24 & 15] + S[o >> 20 & 15] + S[o >> 16 & 15] + S[o >> 12 & 15] + S[o >> 8 & 15] + S[o >> 4 & 15] + S[15 & o];
        return 256 <= A && (o += S[h >> 28 & 15] + S[h >> 24 & 15] + S[h >> 20 & 15] + S[h >> 16 & 15] + S[h >> 12 & 15] + S[h >> 8 & 15] + S[h >> 4 & 15] + S[15 & h]),
        384 <= A && (o += S[s >> 28 & 15] + S[s >> 24 & 15] + S[s >> 20 & 15] + S[s >> 16 & 15] + S[s >> 12 & 15] + S[s >> 8 & 15] + S[s >> 4 & 15] + S[15 & s] + S[l >> 28 & 15] + S[l >> 24 & 15] + S[l >> 20 & 15] + S[l >> 16 & 15] + S[l >> 12 & 15] + S[l >> 8 & 15] + S[l >> 4 & 15] + S[15 & l] + S[c >> 28 & 15] + S[c >> 24 & 15] + S[c >> 20 & 15] + S[c >> 16 & 15] + S[c >> 12 & 15] + S[c >> 8 & 15] + S[c >> 4 & 15] + S[15 & c] + S[u >> 28 & 15] + S[u >> 24 & 15] + S[u >> 20 & 15] + S[u >> 16 & 15] + S[u >> 12 & 15] + S[u >> 8 & 15] + S[u >> 4 & 15] + S[15 & u]),
        512 == A && (o += S[d >> 28 & 15] + S[d >> 24 & 15] + S[d >> 20 & 15] + S[d >> 16 & 15] + S[d >> 12 & 15] + S[d >> 8 & 15] + S[d >> 4 & 15] + S[15 & d] + S[f >> 28 & 15] + S[f >> 24 & 15] + S[f >> 20 & 15] + S[f >> 16 & 15] + S[f >> 12 & 15] + S[f >> 8 & 15] + S[f >> 4 & 15] + S[15 & f] + S[p >> 28 & 15] + S[p >> 24 & 15] + S[p >> 20 & 15] + S[p >> 16 & 15] + S[p >> 12 & 15] + S[p >> 8 & 15] + S[p >> 4 & 15] + S[15 & p] + S[g >> 28 & 15] + S[g >> 24 & 15] + S[g >> 20 & 15] + S[g >> 16 & 15] + S[g >> 12 & 15] + S[g >> 8 & 15] + S[g >> 4 & 15] + S[15 & g]),
        o
    }
    ,
    g.prototype.array = g.prototype.digest = function() {
        this.finalize();
        var e = this.h0h
          , t = this.h0l
          , r = this.h1h
          , i = this.h1l
          , n = this.h2h
          , a = this.h2l
          , o = this.h3h
          , h = this.h3l
          , s = this.h4h
          , l = this.h4l
          , c = this.h5h
          , u = this.h5l
          , d = this.h6h
          , f = this.h6l
          , p = this.h7h
          , g = this.h7l
          , A = this.bits
          , o = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o];
        return 256 <= A && o.push(h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h),
        384 <= A && o.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, 255 & l, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u),
        512 == A && o.push(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, 255 & d, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, 255 & f, p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, 255 & p, g >> 24 & 255, g >> 16 & 255, g >> 8 & 255, 255 & g),
        o
    }
    ,
    g.prototype.arrayBuffer = function() {
        this.finalize();
        var e = this.bits
          , t = new ArrayBuffer(e / 8)
          , r = new DataView(t);
        return r.setUint32(0, this.h0h),
        r.setUint32(4, this.h0l),
        r.setUint32(8, this.h1h),
        r.setUint32(12, this.h1l),
        r.setUint32(16, this.h2h),
        r.setUint32(20, this.h2l),
        r.setUint32(24, this.h3h),
        256 <= e && r.setUint32(28, this.h3l),
        384 <= e && (r.setUint32(32, this.h4h),
        r.setUint32(36, this.h4l),
        r.setUint32(40, this.h5h),
        r.setUint32(44, this.h5l)),
        512 == e && (r.setUint32(48, this.h6h),
        r.setUint32(52, this.h6l),
        r.setUint32(56, this.h7h),
        r.setUint32(60, this.h7l)),
        t
    }
    ,
    g.prototype.clone = function() {
        var e = new g(this.bits,!1);
        return this.copyTo(e),
        e
    }
    ,
    g.prototype.copyTo = function(e) {
        for (var t = 0, r = ["h0h", "h0l", "h1h", "h1l", "h2h", "h2l", "h3h", "h3l", "h4h", "h4l", "h5h", "h5l", "h6h", "h6l", "h7h", "h7l", "start", "bytes", "hBytes", "finalized", "hashed", "lastByteIndex"], t = 0; t < r.length; ++t)
            e[r[t]] = this[r[t]];
        for (t = 0; t < this.blocks.length; ++t)
            e.blocks[t] = this.blocks[t]
    }
    ,
    (u.prototype = new g).finalize = function() {
        var e;
        g.prototype.finalize.call(this),
        this.inner && (this.inner = !1,
        e = this.array(),
        g.call(this, this.bits, this.sharedMemory),
        this.update(this.oKeyPad),
        this.update(e),
        g.prototype.finalize.call(this))
    }
    ,
    u.prototype.clone = function() {
        var e = new u([],this.bits,!1);
        this.copyTo(e),
        e.inner = this.inner;
        for (var t = 0; t < this.oKeyPad.length; ++t)
            e.oKeyPad[t] = this.oKeyPad[t];
        return e
    }
    ;
    var d = e(512);
    (d.sha512 = d).sha384 = e(384),
    d.sha512_256 = e(256),
    d.sha512_224 = e(224),
    d.sha512.hmac = r(512),
    d.sha384.hmac = r(384),
    d.sha512_256.hmac = r(256),
    d.sha512_224.hmac = r(224),
    i ? module.exports = d : (t.sha512 = d.sha512,
    t.sha384 = d.sha384,
    t.sha512_256 = d.sha512_256,
    t.sha512_224 = d.sha512_224,
    n && define(function() {
        return d
    }))
}(),
function() {
    "use strict";
    var ERROR = "input is invalid type"
      , WINDOW = "object" == typeof window
      , root = WINDOW ? window : {};
    root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
    var WEB_WORKER = !WINDOW && "object" == typeof self
      , NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
    NODE_JS ? root = global : WEB_WORKER && (root = self);
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" == typeof module && module.exports
      , AMD = "function" == typeof define && define.amd
      , ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer
      , HEX_CHARS = "0123456789abcdef".split("")
      , EXTRA = [-2147483648, 8388608, 32768, 128]
      , SHIFT = [24, 16, 8, 0]
      , K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
      , OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"]
      , blocks = [];
    !root.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    ),
    !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
        return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
    }
    );
    var createOutputMethod = function(t, r) {
        return function(e) {
            return new Sha256(r,!0).update(e)[t]()
        }
    }
      , createMethod = function(e) {
        var t = createOutputMethod("hex", e);
        (t = NODE_JS ? nodeWrap(t, e) : t).create = function() {
            return new Sha256(e)
        }
        ,
        t.update = function(e) {
            return t.create().update(e)
        }
        ;
        for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
            var i = OUTPUT_TYPES[r];
            t[i] = createOutputMethod(i, e)
        }
        return t
    }
      , nodeWrap = function(method, is224) {
        var crypto = eval("require('crypto')")
          , Buffer = eval("require('buffer').Buffer")
          , algorithm = is224 ? "sha224" : "sha256"
          , nodeMethod = function(e) {
            if ("string" == typeof e)
                return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
            if (null == e)
                throw new Error(ERROR);
            return e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
            Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e)
        };
        return nodeMethod
    }
      , createHmacOutputMethod = function(r, i) {
        return function(e, t) {
            return new HmacSha256(e,i,!0).update(t)[r]()
        }
    }
      , createHmacMethod = function(t) {
        var r = createHmacOutputMethod("hex", t);
        r.create = function(e) {
            return new HmacSha256(e,t)
        }
        ,
        r.update = function(e, t) {
            return r.create(e).update(t)
        }
        ;
        for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
            var i = OUTPUT_TYPES[e];
            r[i] = createHmacOutputMethod(i, t)
        }
        return r
    };
    function Sha256(e, t) {
        t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
        this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        e ? (this.h0 = 3238371032,
        this.h1 = 914150663,
        this.h2 = 812702999,
        this.h3 = 4144912697,
        this.h4 = 4290775857,
        this.h5 = 1750603025,
        this.h6 = 1694076839,
        this.h7 = 3204075428) : (this.h0 = 1779033703,
        this.h1 = 3144134277,
        this.h2 = 1013904242,
        this.h3 = 2773480762,
        this.h4 = 1359893119,
        this.h5 = 2600822924,
        this.h6 = 528734635,
        this.h7 = 1541459225),
        this.block = this.start = this.bytes = this.hBytes = 0,
        this.finalized = this.hashed = !1,
        this.first = !0,
        this.is224 = e
    }
    function HmacSha256(e, t, r) {
        var i = typeof e;
        if ("string" == i) {
            for (var n, a = [], o = e.length, h = 0, s = 0; s < o; ++s)
                (n = e.charCodeAt(s)) < 128 ? a[h++] = n : (n < 2048 ? a[h++] = 192 | n >> 6 : (n < 55296 || 57344 <= n ? a[h++] = 224 | n >> 12 : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++s)),
                a[h++] = 240 | n >> 18,
                a[h++] = 128 | n >> 12 & 63),
                a[h++] = 128 | n >> 6 & 63),
                a[h++] = 128 | 63 & n);
            e = a
        } else {
            if ("object" != i)
                throw new Error(ERROR);
            if (null === e)
                throw new Error(ERROR);
            if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
            else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e)))
                throw new Error(ERROR)
        }
        64 < e.length && (e = new Sha256(t,!0).update(e).array());
        var l = []
          , c = [];
        for (s = 0; s < 64; ++s) {
            var u = e[s] || 0;
            l[s] = 92 ^ u,
            c[s] = 54 ^ u
        }
        Sha256.call(this, t, r),
        this.update(c),
        this.oKeyPad = l,
        this.inner = !0,
        this.sharedMemory = r
    }
    Sha256.prototype.update = function(e) {
        if (!this.finalized) {
            var t, r = typeof e;
            if ("string" != r) {
                if ("object" != r)
                    throw new Error(ERROR);
                if (null === e)
                    throw new Error(ERROR);
                if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                    e = new Uint8Array(e);
                else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e)))
                    throw new Error(ERROR);
                t = !0
            }
            for (var i, n, a = 0, o = e.length, h = this.blocks; a < o; ) {
                if (this.hashed && (this.hashed = !1,
                h[0] = this.block,
                h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0),
                t)
                    for (n = this.start; a < o && n < 64; ++a)
                        h[n >> 2] |= e[a] << SHIFT[3 & n++];
                else
                    for (n = this.start; a < o && n < 64; ++a)
                        (i = e.charCodeAt(a)) < 128 ? h[n >> 2] |= i << SHIFT[3 & n++] : (i < 2048 ? h[n >> 2] |= (192 | i >> 6) << SHIFT[3 & n++] : (i < 55296 || 57344 <= i ? h[n >> 2] |= (224 | i >> 12) << SHIFT[3 & n++] : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++a)),
                        h[n >> 2] |= (240 | i >> 18) << SHIFT[3 & n++],
                        h[n >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & n++]),
                        h[n >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & n++]),
                        h[n >> 2] |= (128 | 63 & i) << SHIFT[3 & n++]);
                this.lastByteIndex = n,
                this.bytes += n - this.start,
                64 <= n ? (this.block = h[16],
                this.start = n - 64,
                this.hash(),
                this.hashed = !0) : this.start = n
            }
            return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0,
            this.bytes = this.bytes % 4294967296),
            this
        }
    }
    ,
    Sha256.prototype.finalize = function() {
        var e, t;
        this.finalized || (this.finalized = !0,
        e = this.blocks,
        t = this.lastByteIndex,
        e[16] = this.block,
        e[t >> 2] |= EXTRA[3 & t],
        this.block = e[16],
        56 <= t && (this.hashed || this.hash(),
        e[0] = this.block,
        e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
        e[14] = this.hBytes << 3 | this.bytes >>> 29,
        e[15] = this.bytes << 3,
        this.hash())
    }
    ,
    Sha256.prototype.hash = function() {
        for (var e, t, r, i, n, a, o = this.h0, h = this.h1, s = this.h2, l = this.h3, c = this.h4, u = this.h5, d = this.h6, f = this.h7, p = this.blocks, g = 16; g < 64; ++g)
            e = ((t = p[g - 15]) >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3,
            t = p[g - 2],
            p[g] = p[g - 16] + e + p[g - 7] + ((t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) << 0;
        for (a = h & s,
        g = 0; g < 64; g += 4)
            this.first ? (l = this.is224 ? (r = 300032,
            f = (t = p[0] - 1413257819) - 150054599 << 0,
            t + 24177077 << 0) : (r = 704751109,
            f = (t = p[0] - 210244248) - 1521486534 << 0,
            t + 143694565 << 0),
            this.first = !1) : (f = l + (t = f + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) + (c & u ^ ~c & d) + K[g] + p[g]) << 0,
            l = t + ((e = (o >>> 2 | o << 30) ^ (o >>> 13 | o << 19) ^ (o >>> 22 | o << 10)) + ((r = o & h) ^ o & s ^ a)) << 0),
            d = s + (t = d + ((f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & c ^ ~f & u) + K[g + 1] + p[g + 1]) << 0,
            s = t + ((e = (l >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^ (l >>> 22 | l << 10)) + ((i = l & o) ^ l & h ^ r)) << 0,
            u = h + (t = u + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & f ^ ~d & c) + K[g + 2] + p[g + 2]) << 0,
            h = t + ((e = (s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((n = s & l) ^ s & o ^ i)) << 0,
            c = o + (t = c + ((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & d ^ ~u & f) + K[g + 3] + p[g + 3]) << 0,
            o = t + ((e = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((a = h & s) ^ h & l ^ n)) << 0;
        this.h0 = this.h0 + o << 0,
        this.h1 = this.h1 + h << 0,
        this.h2 = this.h2 + s << 0,
        this.h3 = this.h3 + l << 0,
        this.h4 = this.h4 + c << 0,
        this.h5 = this.h5 + u << 0,
        this.h6 = this.h6 + d << 0,
        this.h7 = this.h7 + f << 0
    }
    ,
    Sha256.prototype.hex = function() {
        this.finalize();
        var e = this.h0
          , t = this.h1
          , r = this.h2
          , i = this.h3
          , n = this.h4
          , a = this.h5
          , o = this.h6
          , h = this.h7
          , o = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o];
        return this.is224 || (o += HEX_CHARS[h >> 28 & 15] + HEX_CHARS[h >> 24 & 15] + HEX_CHARS[h >> 20 & 15] + HEX_CHARS[h >> 16 & 15] + HEX_CHARS[h >> 12 & 15] + HEX_CHARS[h >> 8 & 15] + HEX_CHARS[h >> 4 & 15] + HEX_CHARS[15 & h]),
        o
    }
    ,
    Sha256.prototype.toString = Sha256.prototype.hex,
    Sha256.prototype.digest = function() {
        this.finalize();
        var e = this.h0
          , t = this.h1
          , r = this.h2
          , i = this.h3
          , n = this.h4
          , a = this.h5
          , o = this.h6
          , h = this.h7
          , o = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o];
        return this.is224 || o.push(h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h),
        o
    }
    ,
    Sha256.prototype.array = Sha256.prototype.digest,
    Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var e = new ArrayBuffer(this.is224 ? 28 : 32)
          , t = new DataView(e);
        return t.setUint32(0, this.h0),
        t.setUint32(4, this.h1),
        t.setUint32(8, this.h2),
        t.setUint32(12, this.h3),
        t.setUint32(16, this.h4),
        t.setUint32(20, this.h5),
        t.setUint32(24, this.h6),
        this.is224 || t.setUint32(28, this.h7),
        e
    }
    ,
    HmacSha256.prototype = new Sha256,
    HmacSha256.prototype.finalize = function() {
        var e;
        Sha256.prototype.finalize.call(this),
        this.inner && (this.inner = !1,
        e = this.array(),
        Sha256.call(this, this.is224, this.sharedMemory),
        this.update(this.oKeyPad),
        this.update(e),
        Sha256.prototype.finalize.call(this))
    }
    ;
    var exports = createMethod();
    exports.sha256 = exports,
    exports.sha224 = createMethod(!0),
    exports.sha256.hmac = createHmacMethod(),
    exports.sha224.hmac = createHmacMethod(!0),
    COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256,
    root.sha224 = exports.sha224,
    AMD && define(function() {
        return exports
    }))
}();

function setFingerprint(data) {
    var fp = window.x64hash128(data, 31);
    console.log(fp);
    // var fp = "0021f0ec40d4f9aa188675c836605c45"
    var secretCode = '';

    fcacheType = "B";
    switch (fcacheType) {
    case 'A':
        /*  */
        secretCode = handleCode(window.btoa(fp), 'int', '+', 0, 3) + '@' + fp + '*' + handleCode(md5(fp), 'en', '+', 0, 5);
        break;
    case 'B':
        /*  */
        secretCode = handleCode(md5(fp), 'en', '+', 0, 5) + '#' + fp + '*' + handleCode(sha256(fp), 'int', '-', 0, 5);
        break;
    case 'C':
        /*  */
        secretCode = handleCode(sha256(fp), 'en', '-', 0, 7) + '-' + handleCode(md5(fp), 'int', '+', 0, 4) + fp;
        break;
    case 'D':
        /*  */
        secretCode = fp + '+' + handleCode(md5(fp), 'en', '-', 0, 4) + handleCode(sha256(fp), 'int', '+', 0, 3);
        break;
    case 'E':
        /*  */
        secretCode = handleCode(fp, 'en', '+', 0, 2) + '%' + handleCode(sha256(fp), 'int', '+', 0, 2) + fp;
        break;
    case 'F':
        /*  */
        secretCode = handleCode(sha256('8f0' + fp + 'b7a'), 'mix', '-', 7, 8) + fp + handleCode(md5('f16s' + fp + 'd'), 'mix', '+', 5, 8);
        break;
    case 'G':
        /*  */
        secretCode = handleCode(sha224('9a1' + fp + 'q1'), 'mix', '+', 10, 9) + handleCode(md5('e5cv' + fp + 'v1'), 'mix', '-', 7, 8) + fp;
        break;
    case 'H':
        /*  */
        secretCode = handleCode(md5('eds' + fp + '874'), 'mix', '-', 4, 7) + fp + handleCode(sha384('t3b' + fp + 'fe4'), 'mix', '+', 6, 8);
        break;
    case 'I':
        /*  */
        secretCode = handleCode(sha224('11a' + fp + 'q1aa'), 'mix', '-', 12, 15) + fp + handleCode(md5('r124' + fp + 'v'), 'mix', '-', 8, 7);
        break;
    case 'J':
        /*  */
        secretCode = fp + handleCode(sha384('e5da' + fp + 'q'), 'mix', '-', 13, 5) + handleCode(sha512('d31' + fp + 'l78'), 'mix', '-', 10, 9);
        break;
    case 'K':
        /*  */
        secretCode = handleCode(md5('p3sa' + fp + 'ps5'), 'mix', '-', 8, 7) + handleCode(sha224('vbne' + fp + '834'), 'mix', '-', 15, 10) + fp;
        break;
    case 'L':
        /*  */
        secretCode = fp + handleCode(sha512('idmn' + fp + '78g'), 'mix', '-', 4, 6) + handleCode(md5('d84' + fp + 'rtd'), 'mix', '-', 12, 5);
        break;
    case 'M':
        /*  */
        secretCode = handleCode(sha224('dfs' + fp + 'e1y'), 'mix', '-', 10, 9) + handleCode(sha512('bvs4' + fp + '12s'), 'mix', '-', 15, 7) + fp;
        break;
    case 'N':
        /*  */
        secretCode = fp + handleCode(sha384('ad4f' + fp + 'qz'), 'mix', '-', 4, 6) + handleCode(sha512('nqu' + fp + '7dbn'), 'mix', '-', 30, 12);
        break;
    case 'O':
        /*  */
        secretCode = handleCode(sha512('7df4' + fp + '1f'), 'mix', '-', 9, 6) + fp + handleCode(md5(fp + 'd3f1'), 'mix', '-', 4, 7);
        break;
    case 'P':
        /*  */
        secretCode = fp + handleCode(sha512('nd8a' + fp + '1x'), 'mix', '-', 18, 7) + handleCode(sha256('pa' + fp + '178a'), 'mix', '-', 7, 10);
        break;
    case 'Q':
        /*  */
        secretCode = handleCode(sha224(fp + 'of555'), 'mix', '-', 4, 6) + handleCode(sha512('37ol' + fp + 'j'), 'mix', '+', 15, 9) + fp;
        break;
    case 'R':
        /*  */
        secretCode = handleCode(sha384('ok2' + fp + 'pzl1'), 'mix', '+', 8, 10) + fp + handleCode(md5('grew5' + fp + '4'), 'mix', '-', 2, 7);
        break;
    default:
        /*  */
        secretCode = handleCode(md5(fp), 'en', '+', 0, 5) + '#' + fp + '*' + handleCode(sha256(fp), 'int', '-', 0, 5);
    };
    fingerprint = window.btoa(secretCode);
    return fingerprint
}
function handleCode(code, type, order, start, length) {
    if (type !== 'mix') {
        var str = type === 'en' ? 'AAAAAAAAAA' : '0000000000';
        /* 補滿不足位數 */
        var reg = type === 'en' ? /[0-9]/g : /\D/g;
        if (order === '+') {
            return code.replace(reg, '').concat(str).substr(start, length);
        }
        return (str + code).replace(reg, '').split('').reverse().join('').substr(start, length);
    }
    if (order === '+') {
        return code.substr(start, length);
    }
    return code.split('').reverse().join('').substr(start, length);
}

components = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36,false,zh-CN,24,8,6,1920,1080,1920,1040,-480,Asia/Shanghai,true,true,true,false,true,not available,Win32,Chrome PDF Plugin,Portable Document Format,application/x-google-chrome-pdf,pdf,Chrome PDF Viewer,,application/pdf,pdf,Native Client,,application/x-nacl,,application/x-pnacl,,GKVTvoMZ5DVsz+O6bUzw9wZooKAT8YwvzYlUv9vNVaQyWUY5MXpGSDQzUXdjVEJK,canvas winding:yes,canvas fp:data:image/png;base64,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BAgQIECAAAECBAgQKC4wrgN6cV0PIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFqBAT0ak5lUQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoKSCgl9Q1mwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqERDQqzmVRQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgpICAXlLXbAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCoRkBAr+ZUFiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBkgICekldswkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgGgEBvZpTWZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIESgoI6CV1zSZAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBagQE9GpOZVECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCkgoJfUNZsAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEqhEQ0Ks5lUUJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoKSAgF5S12wCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqEZAQK/mVBYlQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZICAnpJXbMJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoBoBAb2aU1mUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEoKCOgldc0mQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgWoEBPRqTmVRAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgpIKCX1DWbAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBKoRENCrOZVFCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCkgIBeUtdsAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKhGQECv5lQWJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGSAgJ6SV2zCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKAaAQG9mlNZlAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgRKCgjoJXXNJkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFqBAT0ak5lUQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoKSCgl9Q1mwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqERDQqzmVRQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgpICAXlLXbAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCoRkBAr+ZUFiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBkgICekldswkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgGgEBvZpTWZQAAQIECBCVEoHtAAAC4UlEQVQgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIESgoI6CV1zSZAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBagQE9GpOZVECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCkgoJfUNZsAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEqhEQ0Ks5lUUJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoKSAgF5S12wCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqEZAQK/mVBYlQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZICAnpJXbMJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoBoBAb2aU1mUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEoKCOgldc0mQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgWoEBPRqTmVRAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgpIKCX1DWbAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBKoRENCrOZVFCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCkgIBeUtdsAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKhGQECv5lQWJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGSAgJ6SV2zCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKAaAQG9mlNZlAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgRKCgjoJXXNJkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFqBAT0ak5lUQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoKfA3hb3NXniXM40AAAAASUVORK5CYII=,data:image/png;base64,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,extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;WEBKIT_EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBKIT_WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBKIT_WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBKIT_WEBGL_lose_context;WEBGL_multi_draw,webgl aliased line width range:[1, 1],webgl aliased point size range:[1, 1024],webgl alpha bits:8,webgl antialiasing:yes,webgl blue bits:8,webgl depth bits:24,webgl green bits:8,webgl max anisotropy:16,webgl max combined texture image units:32,webgl max cube map texture size:16384,webgl max fragment uniform vectors:1024,webgl max render buffer size:16384,webgl max texture image units:16,webgl max texture size:16384,webgl max varying vectors:30,webgl max vertex attribs:16,webgl max vertex texture image units:16,webgl max vertex uniform vectors:4096,webgl max viewport dims:[32767, 32767],webgl red bits:8,webgl renderer:WebKit WebGL,webgl shading language version:WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium),webgl stencil bits:0,webgl vendor:WebKit,webgl version:WebGL 1.0 (OpenGL ES 2.0 Chromium),webgl unmasked vendor:Google Inc.,webgl unmasked renderer:ANGLE (Radeon RX550/550 Series Direct3D11 vs_5_0 ps_5_0),webgl vertex shader high float precision:23,webgl vertex shader high float precision rangeMin:127,webgl vertex shader high float precision rangeMax:127,webgl vertex shader medium float precision:23,webgl vertex shader medium float precision rangeMin:127,webgl vertex shader medium float precision rangeMax:127,webgl vertex shader low float precision:23,webgl vertex shader low float precision rangeMin:127,webgl vertex shader low float precision rangeMax:127,webgl fragment shader high float precision:23,webgl fragment shader high float precision rangeMin:127,webgl fragment shader high float precision rangeMax:127,webgl fragment shader medium float precision:23,webgl fragment shader medium float precision rangeMin:127,webgl fragment shader medium float precision rangeMax:127,webgl fragment shader low float precision:23,webgl fragment shader low float precision rangeMin:127,webgl fragment shader low float precision rangeMax:127,webgl vertex shader high int precision:0,webgl vertex shader high int precision rangeMin:31,webgl vertex shader high int precision rangeMax:30,webgl vertex shader medium int precision:0,webgl vertex shader medium int precision rangeMin:31,webgl vertex shader medium int precision rangeMax:30,webgl vertex shader low int precision:0,webgl vertex shader low int precision rangeMin:31,webgl vertex shader low int precision rangeMax:30,webgl fragment shader high int precision:0,webgl fragment shader high int precision rangeMin:31,webgl fragment shader high int precision rangeMax:30,webgl fragment shader medium int precision:0,webgl fragment shader medium int precision rangeMin:31,webgl fragment shader medium int precision rangeMax:30,webgl fragment shader low int precision:0,webgl fragment shader low int precision rangeMin:31,webgl fragment shader low int precision rangeMax:30,Google Inc.~ANGLE (Radeon RX550/550 Series Direct3D11 vs_5_0 ps_5_0),false,false,false,false,false,0,false,false,Arial,Arial Black,Arial Narrow,Book Antiqua,Bookman Old Style,Calibri,Cambria,Cambria Math,Century,Century Gothic,Century Schoolbook,Comic Sans MS,Consolas,Courier,Courier New,Georgia,Helvetica,Impact,Lucida Bright,Lucida Calligraphy,Lucida Console,Lucida Fax,Lucida Handwriting,Lucida Sans,Lucida Sans Typewriter,Lucida Sans Unicode,Microsoft Sans Serif,Monotype Corsiva,MS Gothic,MS PGothic,MS Reference Sans Serif,MS Sans Serif,MS Serif,Palatino Linotype,Segoe Print,Segoe Script,Segoe UI,Segoe UI Light,Segoe UI Semibold,Segoe UI Symbol,Tahoma,Times,Times New Roman,Trebuchet MS,Verdana,Wingdings,Wingdings 2,Wingdings 3,124.04347527516074"
// console.log(components)
fffp = setFingerprint(components);
console.log(fffp)
