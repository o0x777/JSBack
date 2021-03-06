// const { Buffer } = require("buffer");

Object.appendChain = function(oChain, oProto) {
    if (arguments.length < 2) {
        throw new TypeError('Object.appendChain - Not enough arguments');
    }
    if (typeof oProto === 'number' || typeof oProto === 'boolean') {
        throw new TypeError('second argument to Object.appendChain must be an object or a string');
    }

    var oNewProto = oProto,
        oReturn,
        o2nd,
        oLast;

    oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

    for (var o1st = this.getPrototypeOf(o2nd);
         o1st !== Object.prototype && o1st !== Function.prototype;
         o1st = this.getPrototypeOf(o2nd)
    ) {
        o2nd = o1st;
    }

    if (oProto.constructor === String) {
        oNewProto = Function.prototype;
        oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
        this.setPrototypeOf(oReturn, oLast);
    }

    this.setPrototypeOf(o2nd, oNewProto);
    return oReturn;
}

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

function Navigator() {
    
}

window = new Window()

Object.appendChain(window, WindowProperties)
window = {
    location: {
        ancestorOrigins:{},
        href:"https://www.douyin.com/user/MS4wLjABAAAAlwXCzzm7SmBfdZAsqQ_wVVUbpTvUSX1WC_x8HAjMa3gLb88-MwKL7s4OqlYntX4r?extra_params=%7B%22search_id%22%3A%22202106211559210102111712131A02C3A2%22%2C%22search_result_id%22%3A%224195355415549012%22%2C%22search_keyword%22%3A%22%E7%BD%97%E6%B0%B8%E6%B5%A9%22%2C%22search_type%22%3A%22user%22%7D&enter_method=search_result&enter_from=search_result",
        origin:"https://www.douyin.com",
        protocol:"https:",
        host:"www.douyin.com",
        hostname:"www.douyin.com",
        port:"",
        pathname:"/user/MS4wLjABAAAAlwXCzzm7SmBfdZAsqQ_wVVUbpTvUSX1WC_x8HAjMa3gLb88-MwKL7s4OqlYntX4r",
        search:"?extra_params=%7B%22search_id%22%3A%22202106211559210102111712131A02C3A2%22%2C%22search_result_id%22%3A%224195355415549012%22%2C%22search_keyword%22%3A%22%E7%BD%97%E6%B0%B8%E6%B5%A9%22%2C%22search_type%22%3A%22user%22%7D&enter_method=search_result&enter_from=search_result",
        hash:""
    },
    btoa: function(str){ return Buffer.from(str).toString('base64'); },
    atob: function(str){ return Buffer.from(str, 'base64').toString(); },
    screen: {
        availHeight: 1040,
        availWidth: 1920,
        height: 1080,
        width: 1920
    }
}
document = {
    referrer: "www.douyin.com"
}
document.toString = function (){
    return "[object HTMLDocument]"
}
navigator =

function vmProxy(obj){
    var handler = {
        get: function(target, property, receiver){
            /**
             * target: ????????????
             * property: ?????????????????????
             * receiver: Proxy????????????Proxy?????????
            */
            console.log("called: " + property)
             if (property=="name"){
                 return "[object ????????????????????????????]"
             };
            //  console.log(target[property].toString())
             return target[property]
        },
        set: function(target, property, value, receiver){
            /**
             * target: ????????????
             * property: ??????????????????????????? Symbol
             * value: ????????????
             * receiver:???????????????????????????????????? proxy ???????????? handler ??? set ????????????????????????????????????????????????????????????????????????????????????????????? proxy ?????????
             */
            console.log('property set: ' + property + ' = ' + value);
            target[property] = value;
            return true;
        },
        setPrototypeOf: function(target, property){
            console.log("")
            Object.setPrototypeOf(target, property)
        }
    }
    var proxy = new Proxy(obj, handler);
    return proxy;
}

window = vmProxy(window);
document = vmProxy(document);
