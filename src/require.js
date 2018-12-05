function require() {
    //该方法导入模块
    var a = require('./a.js');
    console.log(a);
}

function define() {
    //该方法可定义模块
    var a = 5;
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            console.log(i * j);
        }
    }
}