"use strict";
//1.ts中类的定义
/*
//es5定义
function Person(name) {
    this.name = name;
    this.run = function () {
        console.log(this.name);
    }
}

var p = new Person('张三');
p.run();*/
/*
class Person {

    name:string; //属性，省略public

    constructor(n:string){//构造函数 实例化类时触发的函数
        this.name = n;
    }

    run():void{
        alert(this.name);
    }
}

var p = new Person('张三');
p.run();*/
//get set 方法
/*
class Person {

    name:string;

    constructor(name:string){
        this.name = name;
    }

    getName():string{
        return this.name;
    }

    setName(name:string):void{
        this.name = name;
    }
}
var p = new Person('张三');
alert(p.getName());
p.setName('李四');
alert(p.getName());*/
//2.ts中实现继承 extends super
/*
class Person {
    name:string;

    constructor(name:string){
        this.name = name;
    }

    run():string{
        return `${this.name}在运动`;
    }
}

// var p = new Person('张三');
// console.log(p.run());

class Web extends Person{
    constructor(name:string){
        super(name);//调用父类的构造函数
    }
}

var w = new Web('李四');
console.log(w.run());*/
//ts中继承的探讨 父类与子类方法一致
/*
class Person {
    name:string;

    constructor(name:string){
        this.name = name;
    }

    run():string{
        return `${this.name}在运动`;
    }
}

class Web extends Person{
    constructor(name:string){
        super(name);//调用父类的构造函数
    }

    run(): string {
        return `${this.name}在运动 -- 子类`;
    }

    work():void{
        console.log(`${this.name}在工作`);
    }
}

var w = new Web('李四');
console.log(w.run());
w.work();*/
//3.类里面的修饰符 typescript定义属性时提供了三种修饰符
/*
public 共有
protected 保护，类及子类可访问
private 私有，仅本类可访问
属性不加修饰符，默认为公有
*/
//public
/*
class Person {
    public name:string; //公有属性



    constructor(name:string){
        this.name = name;
    }

    run():string{
        return `${this.name}在运动`;
    }
}

class Web extends Person{
    constructor(name:string){
        super(name);//调用父类的构造函数
    }

    run(): string {
        return `${this.name}在运动 -- 子类`;
    }

    work():void{
        console.log(`${this.name}在工作`);
    }
}

var w = new Web('李四');
w.work();

//类外部访问公有属性
var p = new Person('哈哈哈');
console.log(p.name);
*/
//protected 保护类型
/*
class Person {
    protected name:string; //公有属性

    constructor(name:string){
        this.name = name;
    }

    run():string{
        return `${this.name}在运动`;
    }
}

class Web extends Person{
    constructor(name:string){
        super(name);//调用父类的构造函数
    }

    run(): string {
        return `${this.name}在运动 -- 子类`;
    }

    work():void{
        console.log(`${this.name}在工作`);
    }
}

var w = new Web('李四');
w.work();
console.log(w.run());
//属性“name”受保护，只能在类“Person”及其子类中访问。
//console.log(w.name);
*/
//private
//以下代码编译会报错
/*
class Person {
    private name:string; //公有属性

    constructor(name:string){
        this.name = name;
    }

    run():string{
        return `${this.name}在运动`;
    }
}

class Web extends Person{
    constructor(name:string){
        super(name);//调用父类的构造函数
    }

    run(): string {
        return `${this.name}在运动 -- 子类`;
    }

    work():void{
        console.log(`${this.name}在工作`);
    }
}
*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person;
}());
var p = new Person('哈哈哈');
console.log(p.run());
document.qu;
