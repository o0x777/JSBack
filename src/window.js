window = {
    location: {},
    btoa: function(str){return str},
    atob: function(str){return str},
    screen: {
        availHeight: 1040,
        availWidth: 1920,
        height: 1080,
        width: 1920
    }
}
window.prototype.toString = function toString() {
        var str = "[object Object]"
        return str
    }

function vmProxy(obj){
    var handler = {
        get: function(target, property, receiver){
            /**
             * target: 目标对象
             * property: 被获取的属性名
             * receiver: Proxy或者继承Proxy的对象
            */
             console.log("called: " + property)
             if (property=="name"){
                 return "[object 你也配知道我的名字?]"
             };
            //  console.log(target[property].toString())
             return target[property]
        },
        set: function(target, property, value, receiver){
            /**
             * target: 目标对象
             * property: 将被设置的属性名或 Symbol
             * value: 新属性值
             * receiver:最初被调用的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）
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
// console.log(window.btoa)
window.location.host = "baidu.com"
console.log(window)
console.log(window.btoa("dklaijfoiwm"))
