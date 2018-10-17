//TypeScript核心原则之一，对值具有的解构进行类型检查
// TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
/***********************************************************************/
//接口初探
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object." };
printLabel(myObj);
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj1 = { size: 10, label: "Size 10 Object." };
printLabel1(myObj1);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
function createSquare1(config) {
    var newSquare = { color: "white", area: 100 };
    // if(config.clor){
    //     newSquare.color = config.clor;
    // }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// 通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变
var p1 = { x: 10, y: 20 };
// p1.x = 5; //error，只读变量，不能再进行赋值
// ts具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，
// 因此可以确保数组创建后再也不能被修改
var a1 = [1, 2, 3, 4];
var ro = a1;
//下列操作均不能进行
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;
//把整个只读数组赋值到另一个普通数组这种操作也是不行的
//但可以类型断言重写
a1 = ro;
function createSquare2(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquare2 = createSquare2({colour:"red",width:100});
// 错误，应为SquareConfig2不包含colour这个属性
//可以绕开检查，最简便的方法就是使用类型断言
var mySquare2 = createSquare2({ width: 100, opacity: 0.5 });
