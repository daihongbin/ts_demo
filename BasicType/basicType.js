/*******************************************************************************************/
//布尔类型
var isDone = false;
/*******************************************************************************************/
//数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
/*******************************************************************************************/
//字符串
var name1 = "bob";
name1 = "smith";
/*******************************************************************************************/
//模版字符串
var name2 = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name1 + ".\n\nI'll be " + (age + 1) + " years old next month.";
//如此声明效果等同
// let sentence: string = "Hello, my name is " + name + ".\n\n" +
//     "I'll be " + (age + 1) + " years old next month.";
/*******************************************************************************************/
//数组
//方式1
var list1 = [1, 2, 3];
//方式2
var list2 = [1, 2, 3];
/*******************************************************************************************/
//元组
//定义元组
var x;
//初始化元组
x = ['hello', 10];
//不合法的初始化
//x = [10,'hello']
//访问一个已知索引的元素，会得到正确的类型
console.log(x[0].substr(1));
//console.log(x[1].substr(1)) //错误，类型事务
//访问越界元素，会用联合类型替代
x[3] = 'world'; //ok，字符串可以赋值给(string | number)类型
console.log(x[5].toString()); //ok,'string' 和 'number'都有toString
// x[6] = true; //Error,布尔不是(string | number)类型
/*******************************************************************************************/
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//默认情况下，从0开始为元素编号
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
//或者，全部使用手动赋值
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
//使用枚举，可以由值找到名字
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
var colorName = Color3[2];
alert(colorName); //显示Green
/*******************************************************************************************/
//Any
//不清楚变量的类型时可以使用Any作为变量的类型关键字
var notSure = 4;
notSure.ifItExists();
notSure.toFixed();
var prettySure = 4;
//prettySure.toFixed(); //出错，Object只允许赋值，不允许调用方法，即便真的有这些方法
//当你只知道一部分的数据类型的时候，any类型也是有用的。比如，你有一个数组，它包含了不同类型的数据
var list = [1, true, "free"];
list[1] = 100;
/*******************************************************************************************/
//Void
//Void与Any恰恰相反，它表示没有任何类型。当一个函数没有返回值时，通常返回类型思Void
function warnUser() {
    alert("This is my warning message.");
}
//声明Void类型没什么用处，你只能赋值undefined和null
var unusable = undefined;
/*******************************************************************************************/
//Null和Undefined
var u = undefined;
var n = null;
/*******************************************************************************************/
//Never类型
//永不存在的值的类型
//返回Never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
//推断的返回值类型为never
function fail() {
    return Error("Something failed.");
}
//返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
/*******************************************************************************************/
//类型断言
//类型断言好比其他语言里面的类型转换
//<>语法
var someValue = "this is a string";
var strLength = someValue.length;
//as语法
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
//使用JSX时，必须使用as进行转换
/*******************************************************************************************/
//let相当于js中的var关键字
