namespace ts_demo.Bilibili.tsdemo01 {
    console.log("你好ts");

    function getData() {
        console.log(123);
    }

    var str: string = "你好，ts";

    /*
    1.第一步 tsc --init 生成tsconfig.json 改“outDir”：“./js”

    2.第二步
    ctrl+shift+p configure task Runner typescript-tsconfig.json
     */

//boolean
    var flag: boolean = true;
    flag = false;
    console.log(flag);

//数字类型 （number）
    var num: number = 123;
    num = 456;
    console.log(num);

//字符串类型（string）
    var str: string = "this is ts";
    console.log(str);

//数组（array）
//第一种定义数组的方式
//var arr = ['1','2',]; //es5定义数组
    var arr: number[] = [11, 2, 3, 54];
    console.log(arr);

//第二种定义数组的方式
    var arr_2: Array<number> = [1, 2, 3, 4];
    console.log(arr_2);

    var arr_3: any[] = [31, '132', true];
    console.log(arr_3);

//元祖类型（tuple） 属于数组的一种
    let tuple: [number, string] = [123, 'str'];
    console.log(tuple);

//枚举类型（enum）
    enum gender {
        male = 0,
        female = 1
    }

    console.log(gender)

    enum Flag {
        success = 1,
        error = 2
    }

    let s: Flag = Flag.success;
    console.log(s);

//任意类型 （any）
    var obj: any = 132;
    obj = "132";
    obj = true;
    console.log(obj);

    var oBox: any = document.getElementById("box");
    oBox.style.color = 'red';

//null和undefined
    var undef: undefined;
    console.log(undef);
//undefined为定义未赋值

    var undef_1: number | undefined;
    console.log(undef_1);

//null
    var n: null;
    n = null;

//一个元素可能为number 可能为null 可能为undefined
    var a: number | null | undefined;
    a = 123;
    console.log(a);

//void类型 没有任何方法，一般用于方法

//es5的定义方法
// function run() {
//     console.log('run');
// }
// run();

//表示方法无返回值
// function run():void {
//     console.log("方法没有返回任何类型！");
// }
// run();

//正确写法有返回值
    function run(): number {
        console.log("123");
        return 123;
    }

    run();

//never 类型，从不会出现的值
    var b: undefined;
    b = undefined;

    var c: null;
    c = null;

//匿名函数
    /*var d:never;
    d = (() => {
        throw new Error("错误");
    })();*/

//函数
//es5定义函数的方法
    /*
    //定义函数
    function run1() {
        return 'run';
    }

    //匿名函数
    var run2 = function () {
        return 'run2';
    }
    */

//ts定义函数的方法
//函数声明法
    function run1(): string {
        return '13';
    }

//匿名函数法
    var fun2 = function (): number {
        return 123;
    }
    console.log(fun2());

//ts中定义方法传参
    function getInfo(name: string, age: number): string {
        return `${name} --- ${age}`;
    }

    console.log(getInfo('zs', 20));

//匿名函数定义
    var getInfo2 = function (name: string, age: number): string {
        return `${name} --- ${age}`;
    };
    console.log(getInfo2('zs', 20));

//无返回值方法
    function voidFunc(): void {
        console.log('无返回值方法');
    }

//可选参数的方法
//es5中方法形参和实参可以不一样，但是es中必须一样，如果不一样需要配置可选参数
    function getInfo3(name: string, age?: number): string {
        if (age) {
            return `${name} --- ${age}`;
        } else {
            return `${name} --- 年龄保密`;
        }
    }

    console.log(getInfo3('as'));
//可选参数必须配置到参数的最后面

//默认参数
//es5无法设置默认参数，es6和ts可以设置默认参数
    function getInfo4(name: string, age: number = 40): string {
        if (age) {
            return `${name} --- ${age}`;
        } else {
            return `${name} --- 年龄保密`;
        }
    }

    console.log(getInfo4('zs'));

//剩余参数
// function sum(a:number,b:number,c:number,d:number) :number{
//     return a + b + c + d;
// }
// console.log(sum(1,2,4,5));

//三点运算符接手形参传过来的值
    function sum(a: number, b: number, ...result: number[]): number {
        var sum = a;
        sum += b;
        for (var i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
    }

    console.log(sum(13, 1, 41, 4, 5, 5, 6, 6));

//函数重载
    /*
    下面会替换上面定义
    function css(config) {

    }
    function css(config,value) {

    }*/

//ts中的重载
    function getF(name: string): string;
    function getF(age: number): string;
    function getF(str: any): any {
        if (typeof str === "string") {
            return "字符串132";
        } else if (typeof str === "number") {
            return "132";
        }
    }

    console.log(getF("123"));
    console.log(getF(123));

//console.log(getF(true));

    function get(nmae: string): string;
    function get(nmae: string, age: number): string;
    function get(name: any, age?: any): any {
        if (age) {
            return "有年龄";
        } else {
            return "没年龄";
        }
    }

    console.log(get("zs"));
    console.log(get("zs", 123));

//箭头函数 es6
    /*
    setTimeout(function () {
        alert('run');
    },1000);*/

//this指向的问题，箭头函数指向的是上下文
    setTimeout(() => {
        alert('run');
    }, 1000);
}