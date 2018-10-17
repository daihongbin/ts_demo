//TypeScript核心原则之一，对值具有的解构进行类型检查
// TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
/***********************************************************************/
//接口初探
function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label);
}

let myObj = {size:10,label:"Size 10 Object."};
printLabel(myObj);
//ts会检查传入的对象参数是否含有叫label的string类型的参数
//如果传了很多个参数，ts也只会取必须的参数.有些时候ts却不会这样
interface LabelledValue{
    label:string;
}

function printLabel1(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}

let myObj1 = {size:10,label:"Size 10 Object."}
printLabel1(myObj1);
//只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
//类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以

/***********************************************************************/
//可选属性
// 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 
// 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值。
interface SquareConfig{
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig):
{color:string;area:number}{
    let newSquare = {color:"white",area:100};
    if(config.color){
        newSquare.color = config.color;
    }

    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:"black"});
//带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号

// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。
// 比如，我们故意将 createSquare里的color属性名拼错，就会得到一个错误提示：
interface SquareConfig1{
    color?:string,
    width?:number
}

function createSquare1(config:SquareConfig1):{color:string;area:number}{
    let newSquare = {color:"white",area:100};

    // if(config.clor){
    //     newSquare.color = config.clor;
    // }

    if(config.width){
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

/***********************************************************************/
//只读属性
//在属性前面加readonly表示为只读属性
interface Point{
    readonly x:number;
    readonly y:number;
}

// 通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变
let p1:Point = {x:10,y:20};
// p1.x = 5; //error，只读变量，不能再进行赋值

// ts具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，
// 因此可以确保数组创建后再也不能被修改
let a1:number[] = [1,2,3,4];
let ro:ReadonlyArray<number> = a1;

//下列操作均不能进行
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;

//把整个只读数组赋值到另一个普通数组这种操作也是不行的
//但可以类型断言重写
a1 = ro as number[];

// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 
// 做为变量使用的话用 const，
// 若做为属性则使用readonly

/***********************************************************************/
//额外的属性检查
//类型检查和可选属性结合，效果不是很理想
interface SquareConfig2{
    color?:string;
    width?:number;
}

function createSquare2(config:SquareConfig2):{color:string;area:number}{
    let newSquare = {color:"white",area:100};

    if(config.color){
        newSquare.color = config.color;
    }

    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

// let mySquare2 = createSquare2({colour:"red",width:100});
// 错误，应为SquareConfig2不包含colour这个属性

//可以绕开检查，最简便的方法就是使用类型断言
let mySquare2 = createSquare2({width:100,opacity:0.5} as SquareConfig2);

