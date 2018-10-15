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
function f6(x) {
    //let x = 100; //方法参数已经使用了x这个变量,所以报错
}
function f7() {
    var x = 100;
    //var x = 100; //报错，因为let已经声明了x这个变量，所以var不能声明
}
//并不是说块级作用域不能用函数作用域变量声明，而是块级作用域变量需要在明显不同的块内声明
function f8(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f8(false, 0);
f8(true, 0);
//在一个嵌套作用域内引入一个新名字行为成为屏蔽,用这种方式会出现新问题也可以解决问题。
//用let重写之前的sumMatrix函数
function sumMatrix1(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
/*******************************************************************************************/
//块级作用域变量的获取
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Settle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity;
}
var _loop_1 = function (i_3) {
    setTimeout(function () {
        console.log(i_3);
    }, 100 * i_3);
};
//在City的环境内获取到变量，所以if执行后可以获取到。
for (var i_3 = 0; i_3 < 10; i_3++) {
    _loop_1(i_3);
}
/*******************************************************************************************/
//const 声明
//用const声明后的值，引用后是不可变的
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
//错误的例子
// kitty = {
//     name:"Danielle",
//     numLives:numLivesForCat
// }
//all "okay",用const声明的变量，内部依然可以赋值
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
//除非你用特殊的方法去避免，但是可以将对象的成员设置为只读的
/*******************************************************************************************/
//解构
//解构数组
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
// 这创建了2个命名变量 first 和 second。 相当于使用了索引，但更为方便：
first = input[0];
second = input[1];
//解构用于已声明的变量会更好
_a = [second, first], first = _a[0], second = _a[1];
//作用于函数参数
function f9(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
//f9(input);
//可以在数组里使用...语法创建剩余变量
// let [first,...rest] = [1,2,3,4];
// console.log(first);
// console.log(rest);
//由于是js，你可以忽略你不关心的尾随元素
// let [first] = [1,2,3,4,5];
// console.log(first);
//或者其他元素
// let [,second,fourth] = [1,2,3,4];
//对象解构
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var _a;
// let {a,b} = 0;
//数组解构，可用没有声明的赋值
// ({a,b} = {a:"baz",b:101});
//对象里使用...语法创建剩余变量
// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;
//# sourceMappingURL=variableDeclaration.js.map