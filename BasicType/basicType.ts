/*******************************************************************************************/
//布尔类型
let isDone:boolean = false;

/*******************************************************************************************/
//数字
let decLiteral:number = 6;
let hexLiteral:number = 0xf00d;
let binaryLiteral:number = 0b1010;
let octalLiteral:number = 0o744;

/*******************************************************************************************/
//字符串
let name1: string = "bob";
name1 = "smith";

/*******************************************************************************************/
//模版字符串
let name2:string = `Gene`;
let age:number = 37;
let sentence:string = `Hello, my name is ${ name1 }.

I'll be ${ age + 1 } years old next month.`;

//如此声明效果等同
// let sentence: string = "Hello, my name is " + name + ".\n\n" +
//     "I'll be " + (age + 1) + " years old next month.";

/*******************************************************************************************/
//数组
//方式1
let list1:number[] = [1,2,3];

//方式2
let list2:Array<number> = [1,2,3];

/*******************************************************************************************/
//元组
//定义元组
let x:[string,number];

//初始化元组
x = ['hello',10];

//不合法的初始化
//x = [10,'hello']

//访问一个已知索引的元素，会得到正确的类型
console.log(x[0].substr(1))
//console.log(x[1].substr(1)) //错误，类型事务

//访问越界元素，会用联合类型替代
x[3] = 'world'; //ok，字符串可以赋值给(string | number)类型
console.log(x[5].toString()); //ok,'string' 和 'number'都有toString
// x[6] = true; //Error,布尔不是(string | number)类型

/*******************************************************************************************/
//枚举
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green

//默认情况下，从0开始为元素编号
enum Color1 {
    Red = 1,
    Green,
    Blue
}
let c1: Color1 = Color1.Green

//或者，全部使用手动赋值
enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4
}
let c2: Color2 = Color2.Green

//使用枚举，可以由值找到名字
enum Color3 {
    Red = 1,
    Green,
    Blue
}
let colorName: string = Color3[2];
alert(colorName) //显示Green

/*******************************************************************************************/
//Any
//不清楚变量的类型时可以使用Any作为变量的类型关键字
let notSure: any = 4;
notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;
//prettySure.toFixed(); //出错，Object只允许赋值，不允许调用方法，即便真的有这些方法

//当你只知道一部分的数据类型的时候，any类型也是有用的。比如，你有一个数组，它包含了不同类型的数据
let list: any[] = [1, true, "free"]
list[1] = 100;

/*******************************************************************************************/
//Void
//Void与Any恰恰相反，它表示没有任何类型。当一个函数没有返回值时，通常返回类型思Void
function warnUser(): void {
    alert("This is my warning message.");
}

//声明Void类型没什么用处，你只能赋值undefined和null
let unusable: void = undefined;

/*******************************************************************************************/
//Null和Undefined
let u: undefined = undefined;
let n: null = null;

/*******************************************************************************************/
//Never类型
//永不存在的值的类型

//返回Never的函数必须存在无法达到的终点
function error(message: string): never{
    throw  new Error(message);
}

//推断的返回值类型为never
function fail() {
    return Error("Something failed.");
}

//返回never的函数必须存在无法达到的终点
function infiniteLoop():never {
    while(true){

    }
}

/*******************************************************************************************/
//类型断言
//类型断言好比其他语言里面的类型转换

//<>语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

//as语法
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;

//使用JSX时，必须使用as进行转换

/*******************************************************************************************/
//let相当于js中的var关键字