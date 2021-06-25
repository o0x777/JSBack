const { Buffer } = require("buffer");
// const  = require("base64-js")

// console.log(Buffer.from("Hello World").toString('base64'))

const btoa = function(str){ return Buffer.from(str).toString('base64') }
const atob = function(str){ return Buffer.from(str, 'base64').toString() }



p = false;
// c.default.prototype.difftime = 1617852;
c = {
    default: {
        prototype: {
            difftime: 1617852
        }
    }
}

function v(e, t, a) {
    var n, o, r = void 0 === a ? 2166136261 : a;
    for (n = 0,
    o = e.length; n < o; n++)
        r ^= e.charCodeAt(n),
        r += (r << 1) + (r << 4) + (r << 7) + (r << 8) + (r << 24);
    return t ? ("0000000" + (r >>> 0).toString(16)).substr(-16) : r >>> 0
}
var l = v("qimai|Technology", 1)
console.log(l)

function d_(e) {
    return decodeURIComponent(function(e) {
        try {
            return atob(e)
        } catch (e) {
            console.log("catch ...")
            // return "b64Encoded"
            return Buffer.from(e, "base64").toString()
        }
    }(e).split("").map((function(e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
    }
    )).join(""))
}
function f(e, t) {
    t || (t = s());
    for (var a = (e = e.split("")).length, n = t.length, o = "charCodeAt", r = 0; r < a; r++)
        e[r] = i(e[r][o](0) ^ t[r % n][o](0));
    return e.join("")
}
function u(e) {
    var t, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
    return (t = document.cookie.match(a)) ? unescape(t[2]) : null
}
function s() {
    return unescape("861831832863830866861836861862839831831839862863839830865834861863837837830830837839836861835833".replace(/8/g, "%u00"))
}
function g(e, t) {
    t || (t = s());
    for (var a = (e = e.split("")).length, n = t.length, o = "charCodeAt", r = 0; r < a; r++)
        e[r] = i(e[r][o](0) ^ t[(r + 10) % n][o](0));
    return e.join("")
}
function h(e) {
    return function(e) {
        try {
            return btoa(e)
        } catch (t) {
            return Buffer.from(e).toString("base64")
        }
    }(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, t) {
        return i("0x" + t)
    }
    )))
}
function i(e) {
    var t, a = (t = "",
    ["66", "72", "6f", "6d", "43", "68", "61", "72", "43", "6f", "64", "65"].forEach((function(e) {
        t += unescape("%u00" + e)
    }
    )),
    t);
    return String[a](e)
}

// temp = d("EkhcAEQ=", l)
// console.log(temp)
var u = f(d_("EkhcAEQ=", l))
var m = f(d_("EkhcAFQ=", l))
var d = f(d_("IRI=", l))
var h_ = f(d_("AF9TD0kVCEU=", l))
f_ = c.default.prototype.difftime

function rrr(e){
    try{
        if (!p && null == f_) {
            var t = u(u);
            f_ = c.default.prototype.difftime = -u(m) || +new Date - 1e3 * t
        }
        var a, o = +new Date - (f_ || 0) - 1515125653845, r = [];
        console.log("o set: ", o)
        return void 0 === e.params && (e.params = {}),
        Object.keys(e.params).forEach((function(t) {
            if (t == h_)
                return !1;
            e.params.hasOwnProperty(t) && r.push(e.params[t])
        }
        )),
        r = r.sort().join(""),
        r = h(r),
        r += d + e.url.replace(e.baseURL, ""),
        r += d + o,
        r += d + 1,
        a = h(g(r, l)),
        console.log(a),
        -1 == e.url.indexOf(h) && (e.url += (-1 != e.url.indexOf("?") ? "&" : "?") + h_ + "=" + encodeURIComponent(a)),
        e
    } catch (e) {}
}


data = {"url":"/rank/index",
"method":"get",
"headers":{"common":{"Accept":"application/json, text/plain, */*"},"delete":{},"get":{},"head":{},"post":{"Content-Type":"application/x-www-form-urlencoded"},"put":{"Content-Type":"application/x-www-form-urlencoded"},"patch":{"Content-Type":"application/x-www-form-urlencoded"}},
"params":{"brand":"free","device":"iphone","country":"cn","genre":"6014","date":"2021-06-20","page":3,"is_rank_index":1,"snapshot":"16:49:08"},
"baseURL":"https://api.qimai.cn","transformRequest":[null],"transformResponse":[null],"timeout":15000,"withCredentials":true,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1}

var pp = rrr(data)
console.log(pp)
