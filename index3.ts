//类型断言 值 as 类型  仅仅是欺骗ts编辑器
interface It{
    name:string,
    computer:string
}

interface Mt{
    name:string,
    bike:string
}

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
// let a:number=1;
// console.log((a as any).length)

//4.将父类型断言为子类型
// class Students{
//     make(){
//         console.log("I can make money")
//     }
// }

// class It{
//     qiao(){
//         console.log("I can qiaodaima")
//     }
// }

// class Xm extends Students{
//     run(){
//         console.log("I can run")
//     }
// }

// let a=new Students();
// (a as Xm).run(); //不报错但运行不通过，a是students没有run方法

//5.非空断言  数据!   断言该数据一定不为空(null undefined)  函数:  函数名!()
// let num:number|null|undefined;
// num!.toFixed(2)

// type a=()=>string;
// function fn(f:a|undefined){
//     f!();
// }

// 6.双重断言
interface Bull{
    run:string;
}

interface Desk{
    name:string;
}

function test(a:Bull){
    return a as any as Desk
}