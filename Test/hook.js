(function() {
    //严谨模式 检查所有错误
    'use strict';
    temp_val = "";
    //document 为要hook的对象   这里是hook的cookie
    Object.defineProperty(document, "cookie", {
        //hook set方法也就是赋值的方法
        //当前也可以hook get方法
        set: function(val){
            console.log("Hook -> ",val)
            temp_val = val
            return val
        },
        get: function(){
            return temp_val
        }
    })
})();
