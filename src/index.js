const fs = require('fs');
const {VM} = require('vm2')
const vm = new VM();


window = {};
document = {
    scripts: [0, 1]
};

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

const data = fs.readFileSync("./src/code.js", "utf-8");
// console.log(data.toString())
debugger;
vm.run(data);
console.log(window)
console.log(document)
debugger;
