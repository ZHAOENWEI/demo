// let me:It|Mt={name:"程序员",computer:"apple"}
//类型推论
// let obj={} as It;
// obj.name="小明";
// obj.computer="apple"
//1.断言为联合类型中的一种
// function job(me:It|Mt){
//     console.log((me as It).computer)
// }
//2.将any类型断言为其他类型
// let a;
// a=1;
// console.log((a as string).length)
//3.将其他类型断言为any
var a = 1;
console.log(a.length);
function test(a) {
    return a;
}
