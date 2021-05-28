window = this
var handler = {
    get: function(target, property){
        console.log(target, property);
    },
    set: function(target, property){
        console.log(target, property);
    }
}

function vmProxy(){
    new Proxy({
        window, handler
    })
}