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
    }
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
function f3(shouldInitialize: boolean) {
    if(shouldInitialize){
        var x = 10;
    }

    return x;
}

f3(true); //返回10
f3(false); //返回undefined
// var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问

// 这种作用域规则可能会引发报错，多次声明同一个变量并不会报错
function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0;i < matrix.length;i++){
        var currentRow = matrix[i];
        for(var i = 0;i < currentRow.length;i++){
            sum += currentRow[i];
        }
    }

    return sum;
}
//这样写会引发很大的麻烦，两个循环的迭代变量一样命名是不好的

//捕获变量怪异之处
for (var i = 0;i < 10; i++){
    setTimeout(function () {
       console.log(i);
    },100 * i);
}
//打印结果会稍显怪异，每次打印10，不是打印0,1,2,3,4....

//使用立即执行的函数表达式IIFE来捕获每次迭代的值
for (var i = 0;i < 10;i++){
    (
        function (i) {
            setTimeout(function(){
                console.log(i);
            },100 * i);
        }
    )(i);
}

/*******************************************************************************************/
//let 声明
let hello = "Hello!";

//块作用域，let对作用域要求严格，let声明的变量仅在当前作用域访问，不同于var
function f4(input: boolean) {
    let a = 100;

    if(input){
        //这里可以引用a变量
        let b = a + 1;
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
let ab;

/*******************************************************************************************/
//重定义及屏蔽
//使用var声明，不管声明多少次，只会得到一个
function f5(x) {
    var x;
    var x;

    if(true){
        var x;
    }
}
//上面所有x的声明都是来自同一个x，易产生bug。

//let声明较为严格
let x1 = 10;
//let x1 = 20; //错误，不能进行多次声明

//并不是要求两个均是块级作用域的声明TypeScript才会给出错误警告。
function f6(x) {
    //let x = 100; //方法参数已经使用了x这个变量,所以报错
}

function f7() {
    let x = 100;
    //var x = 100; //报错，因为let已经声明了x这个变量，所以var不能声明
}

//并不是说块级作用域不能用函数作用域变量声明，而是块级作用域变量需要在明显不同的块内声明
function f8(condition,x) {
    if(condition){
        let x = 100;
        return x;
    }
    return x;
}

f8(false,0)
f8(true,0)

//在一个嵌套作用域内引入一个新名字行为成为屏蔽,用这种方式会出现新问题也可以解决问题。
//用let重写之前的sumMatrix函数
function sumMatrix1(matrix:number[][]){
    let sum = 0;
    for(let i = 0;i < matrix.length;i++){
        var currentRow = matrix[i];
        for (let i = 0;i < currentRow.length;i++){
            sum += currentRow[i];
        }
    }

    return sum;
}

/*******************************************************************************************/
//块级作用域变量的获取
function theCityThatAlwaysSleeps() {
    let getCity;

    if(true){
        let city = "Settle";
        getCity = function () {
            return city;
        }
    }

    return getCity;
}
//在City的环境内获取到变量，所以if执行后可以获取到。

for (let i = 0;i < 10;i++){
    setTimeout(function () {
        console.log(i);
    },100 * i)
}

/*******************************************************************************************/
//const 声明
//用const声明后的值，引用后是不可变的
const numLivesForCat = 9;

const kitty = {
    name: "Aurora",
    numLives:numLivesForCat,
}

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
let input = [1,2];
let [first,second] = input;
console.log(first);
console.log(second);
// 这创建了2个命名变量 first 和 second。 相当于使用了索引，但更为方便：

first = input[0];
second = input[1];

//解构用于已声明的变量会更好
[first,second] = [second,first]

//作用于函数参数
function f9([first,second]:[number,number]) {
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
let o = {
    a:"foo",
    b:12,
    c:"bar"
};
// let {a,b} = 0;

//数组解构，可用没有声明的赋值
// ({a,b} = {a:"baz",b:101});

//对象里使用...语法创建剩余变量
// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;

/*******************************************************************************************/
//属性重命名
let {a:newName1,b:newName2} = o;
//相当于这样子
// let newName1 = o.a;
// let newName2 = o.b;

//这里的冒号不指示类型，指示类型可以这样子
// let{a,b}:{a:string,b:number} = o;

// /*******************************************************************************************/
// 默认值
// 默认值可以让你在属性为 undefined 时使用缺省值：
function keepWholeObject(wholeObject:{a:string,b?:number}) {
    let {a,b = 1001} = wholeObject;
}
//即使b为undefined，经过这个函数也会有值

/*******************************************************************************************/
// 函数声明
//解构用于函数声明,
type C = {a:string,b?:number};
function f10({a,b}:C):void {
    console.log("解构函数");
}

//指定默认值，解构默认值有点麻烦，需要在默认值之前设置其格式
function f11({a,b} = {a:"",b:0}):void{
    //...
}
f11();

//在需要解构的属性上给与一个默认或可选的属性用来替换主初始化列表
function f12({a,b = 0} = {a : ""}):void{
    //...
}

f12({a:"yes"});
f12();
//f({}); //错误
//小心使用解构，解构表达式尽量小而简单

/*******************************************************************************************/
// 展开
//展开操作与解构相反。可以将一个数组展开为另外一个数组，或者将一个对象展开为另外一个对象

//展开数组
let first1 = [1,2];
let secnd2 = [3,4];
let bothPlus = [0,...first1,...secnd2,5];
//bothPlus的值将会为[0,1,2,3,4,5]
// 展开操作创建了 first和second的一份浅拷贝。 它们不会被展开操作所改变。

//展开对象
let defaults = {food:"spicy",price:"$$",ambiance:"noisy"};
let search = {food:"rich",...defaults};
//defaults里的food属性会重写food:"rich"

//对象展开仅包括对象的自身可枚举属性。展开对象时，会丢失其方法
class C1{
    p = 12;
    m(){

    }
}

let cc = new C1();
let clone = {...cc};
clone.p;
//clone.m();
