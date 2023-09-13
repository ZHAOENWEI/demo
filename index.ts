/* 
    变量类型:string number boolean undefined null 字面量 any(不推荐) unknown

    变量声明:
        let 变量名:类型=值
            undefined和null是任意类型的子类型

        字面量
            let flag:1|"hello"|true;

        只要用了any，就等同于关闭了类型检测 慎用！！！！！！！
            let a:any=10;
            a="hello";
            a=true;
            a=function(){};

        unknown:如果没有对它的类型进行检查之前，不允许有任何操作的
            unknown可以理解为一个类型安全的any

            let a:unknown=5;
            a="hello";
            a=true;

            if(typeof(a)=="number"){
                console.log(a)
            }else if(typeof(a)=="string"){
                console.log(a.length)
            }
        
        数组
            let 数组名:类型[]=[数据1,数据2]
                let arr:string[]=["hello","world"];
                let numarr:number[]=[1,2,3,4,5];
                let a:boolean[]=[true,false];
                let b:any[]=[1,true,"hello"];
                let arr:number[][]=[[1,2,3],[4,5,6]]//修饰里层数组

        对象
            对于对象的限定，本质上是限定对象的属性名和属性值
            let 对象名:{属性名:属性类型}
            属性名后面加问好，代表该属性可有可无
                let a:{name:String,age?:number};
                a={name:"张三",age:18};
                a={name:"李四"}
            如果属性数量不确定 [可选属性变量名(随便叫什么名，可以解为形参):属性名类型]:值类型
                let a:{name:string,[propName:string]:any};
                a={name:"张三",salary:3500}
            对于有可选属性的对象来说，可选属性的值的类型必须包含已确定属性的类型
                let a:{name:number,[a:string]:Object};
                a={name:123,salary:3500}

        函数
            在对象里面声明函数
                let fn:(a:number,b:number)=>number;
                let obj:{
                    name:string,
                    fn:(a:number,b:number)=>number
                }
            函数类型的验证:
                function 函数名(参数1:类型,参数2:类型,...):返回值类型(没有可以写void){

                }
                    function add(a:number,b:number):number{return a+b}
                    let add=function(a:number,b:number):number{return a+b}
                    //类型推论
                    let add:(a:number,b:number)=>number=function(a:number,b:number):number{return a+b}//完整写法
                    let add:(a:number,b:number)=>number=(a:number,b:number):number=>a+b//箭头函数写法

                    add(1,5);
                    add("hello",1)//错

                    type a=(a:number,b:number)=>number;
                    let add=function(x:number,y:number):number{return x+y}

                    let d:Date=new Date();
                    let reg:RegExp=/\d{6}/;
                    let divs:NodeList=document.getElementById("box");
                    let e:Error=new Error();

*/

