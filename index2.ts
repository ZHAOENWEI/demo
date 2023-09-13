//接口 对象模板
interface girl {
    height:number,
    like:boolean,
    money?:number, //可选属性
    readonly age:number, //赋值后不可改
    [propName:string]:string|number|boolean|undefined
}

interface person{
    name:string,
    money:number,
    like:boolean,
    hobby:string[],
    make:()=>void,
    girlFriend:girl,
    [propName:string]:any
}

//实现接口
let zs:person={
    name:"张三",
    money:100,
    like:true,
    hobby:["打篮球","踢足球"],
    make:()=>{},
    girlFriend:{
        height:123,
        like:false,
        money:123,
        age:18
    }
}

//zs.girlFriend.age=10//不可改

