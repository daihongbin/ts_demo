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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8 -- \u5B50\u7C7B";
    };
    Web.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    return Web;
}(Person));
var w = new Web('李四');
console.log(w.run());
w.work();
