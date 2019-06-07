//静态检查
/*
function sayHello(person:string){
    return 'Hello,' + person;
}

let user = 'Tom';
console.log(sayHello(user));
*/

//编译一段错误的代码
/*
function sayHello(person:string){
    return 'Hello,' + person;
}

let user = [0,1,2];
console.log(sayHello(user));
*/

//ts编译失败还是会生成js文件，只是静态检查
//如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。