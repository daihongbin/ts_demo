/*******************************************************************************************/
//变量声明
/*******************************************************************************************/
//let & const
//var 声明
var a = 10;
//函数内部定义变量
function f() {
    var message = "Hello, world!";
    return message;
}
//其他函数内部访问相同的变量
function f1() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f1();
g(); //返回11
function f2() {
    var a = 1;
    a = 2;
    var b = g1();
    a = 3;
    return b;
    function g1() {
        return a;
    }
}
f2();
/*******************************************************************************************/
//作用域规则
//var声明有些奇怪的作用域规则
function f3(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f3(true); //返回10
f3(false); //返回undefined
// var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问
// 这种作用域规则可能会引发报错，多次声明同一个变量并不会报错
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
//这样写会引发很大的麻烦，两个循环的迭代变量一样命名是不好的
//捕获变量怪异之处
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
//打印结果会稍显怪异，每次打印10，不是打印0,1,2,3,4....
//使用立即执行的函数表达式IIFE来捕获每次迭代的值
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
/*******************************************************************************************/
//let 声明
var hello = "Hello!";
//块作用域，let对作用域要求严格，let声明的变量仅在当前作用域访问，不同于var
function f4(input) {
    var a = 100;
    if (input) {
        //这里可以引用a变量
        var b = a + 1;
        return b;
    }
    //return b;//不能返回b变量，因为b变量不存在于当前作用域
    return a;
}
//catch语句块内声明的变量有着同样的作用域规则
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}
//此处输出e，必定错误
//console.log(e)
//变量不能在let前访问
//a++;
//let a;
//变量声明前获取它
function foo() {
    return ab;
}
//不能在'a'声明前调用’foo'
//运行时应该抛出错误
foo();
var ab;
/*******************************************************************************************/
//重定义及屏蔽
//使用var声明，不管声明多少次，只会得到一个
function f5(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}
//上面所有x的声明都是来自同一个x，易产生bug。
//let声明较为严格
var x1 = 10;
//let x1 = 20; //错误，不能进行多次声明
//并不是要求两个均是块级作用域的声明TypeScript才会给出错误警告。
//# sourceMappingURL=variableDeclaration.js.map