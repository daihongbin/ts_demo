"use strict";
//============================原始数据类型===========================================
//布尔值
var isDone = false;
//new Boolean()返回的也是一个Boolean对象
//let createdByNewBoolean:boolean = new Boolean(1);
// 直接调用Boolean也可以返回一个boolean类型
// 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，
// 而 Boolean 是 JavaScript 中的构造函数。
// 其他基本类型（除了 null 和 undefined）一样，不再赘述。
var createdByBoolean = Boolean(1);
//数值
var decLiteral = 6;
var hexLiteral = 0xf00d;
//es6中的二进制表示法
var binaryLiteral = 10;
//es6的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
//二进制和八进制会编译为十进制
//字符串
var myName = 'Tom';
var myAge = 25;
//模板字符串
var sentence = "Hello,my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
//空值
//可以用 void 表示没有任何返回值的函数
function alertName() {
    alert('My name is Tom.');
}
;
//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
var unusable = undefined;
//Null和Undefined
var u = undefined;
var n = null;
//undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
//undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
//let num:number = undefined;
// 而 void 类型的变量不能赋值给 number 类型的变量：
var u1;
//let num1:number = u1;
//============================任意值===========================================
//如果是一个普通类型，在赋值过程中改变类型是不被允许的,以下代码会报错
/*
let myFavoriteNumber :string = 'seven';
myFavoriteNumber = 7;*/
//但如果是 any 类型，则允许被赋值为任意类型。
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
//任意值的属性和方法
// 在任意值上访问任何属性都是允许的：
/*let anyThing:any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);*/
//也允许调用任何方法
/*let anyThing2:any = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');*/
//可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
//未声明类型的变量
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
/*let someThing;
someThing = 'seven';
someThing = 7;

// someThing.setName('Tom');*/
/*
let someThing:any;
someThing = 'seven';
someThing = 7;

// someThing.setName('Tom');*/
