"use strict";
var ts_demo;
(function (ts_demo) {
    var Bilibili;
    (function (Bilibili) {
        var tsdemo01;
        (function (tsdemo01) {
            console.log("你好ts");
            function getData() {
                console.log(123);
            }
            var str = "你好，ts";
            /*
            1.第一步 tsc --init 生成tsconfig.json 改“outDir”：“./js”
        
            2.第二步
            ctrl+shift+p configure task Runner typescript-tsconfig.json
             */
            //boolean
            var flag = true;
            flag = false;
            console.log(flag);
            //数字类型 （number）
            var num = 123;
            num = 456;
            console.log(num);
            //字符串类型（string）
            var str = "this is ts";
            console.log(str);
            //数组（array）
            //第一种定义数组的方式
            //var arr = ['1','2',]; //es5定义数组
            var arr = [11, 2, 3, 54];
            console.log(arr);
            //第二种定义数组的方式
            var arr_2 = [1, 2, 3, 4];
            console.log(arr_2);
            var arr_3 = [31, '132', true];
            console.log(arr_3);
            //元祖类型（tuple） 属于数组的一种
            var tuple = [123, 'str'];
            console.log(tuple);
            //枚举类型（enum）
            var gender;
            (function (gender) {
                gender[gender["male"] = 0] = "male";
                gender[gender["female"] = 1] = "female";
            })(gender || (gender = {}));
            console.log(gender);
            var Flag;
            (function (Flag) {
                Flag[Flag["success"] = 1] = "success";
                Flag[Flag["error"] = 2] = "error";
            })(Flag || (Flag = {}));
            var s = Flag.success;
            console.log(s);
            //任意类型 （any）
            var obj = 132;
            obj = "132";
            obj = true;
            console.log(obj);
            var oBox = document.getElementById("box");
            oBox.style.color = 'red';
            //null和undefined
            var undef;
            console.log(undef);
            //undefined为定义未赋值
            var undef_1;
            console.log(undef_1);
            //null
            var n;
            n = null;
            //一个元素可能为number 可能为null 可能为undefined
            var a;
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
            function run() {
                console.log("123");
                return 123;
            }
            run();
            //never 类型，从不会出现的值
            var b;
            b = undefined;
            var c;
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
            function run1() {
                return '13';
            }
            //匿名函数法
            var fun2 = function () {
                return 123;
            };
            console.log(fun2());
            //ts中定义方法传参
            function getInfo(name, age) {
                return name + " --- " + age;
            }
            console.log(getInfo('zs', 20));
            //匿名函数定义
            var getInfo2 = function (name, age) {
                return name + " --- " + age;
            };
            console.log(getInfo2('zs', 20));
            //无返回值方法
            function voidFunc() {
                console.log('无返回值方法');
            }
            //可选参数的方法
            //es5中方法形参和实参可以不一样，但是es中必须一样，如果不一样需要配置可选参数
            function getInfo3(name, age) {
                if (age) {
                    return name + " --- " + age;
                }
                else {
                    return name + " --- \u5E74\u9F84\u4FDD\u5BC6";
                }
            }
            console.log(getInfo3('as'));
            //可选参数必须配置到参数的最后面
            //默认参数
            //es5无法设置默认参数，es6和ts可以设置默认参数
            function getInfo4(name, age) {
                if (age === void 0) { age = 40; }
                if (age) {
                    return name + " --- " + age;
                }
                else {
                    return name + " --- \u5E74\u9F84\u4FDD\u5BC6";
                }
            }
            console.log(getInfo4('zs'));
            //剩余参数
            // function sum(a:number,b:number,c:number,d:number) :number{
            //     return a + b + c + d;
            // }
            // console.log(sum(1,2,4,5));
            //三点运算符接手形参传过来的值
            function sum(a, b) {
                var result = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    result[_i - 2] = arguments[_i];
                }
                var sum = a;
                sum += b;
                for (var i = 0; i < result.length; i++) {
                    sum += result[i];
                }
                return sum;
            }
            console.log(sum(13, 1, 41, 4, 5, 5, 6, 6));
            function getF(str) {
                if (typeof str === "string") {
                    return "字符串132";
                }
                else if (typeof str === "number") {
                    return "132";
                }
            }
            console.log(getF("123"));
            console.log(getF(123));
            function get(name, age) {
                if (age) {
                    return "有年龄";
                }
                else {
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
            setTimeout(function () {
                alert('run');
            }, 1000);
        })(tsdemo01 = Bilibili.tsdemo01 || (Bilibili.tsdemo01 = {}));
    })(Bilibili = ts_demo.Bilibili || (ts_demo.Bilibili = {}));
})(ts_demo || (ts_demo = {}));
