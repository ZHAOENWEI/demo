/* 
    元祖:是一个允许存不同数据类型的数组，元祖元素的数量是固定的
        //数组的写法
            let arr:number[]=[1,2,3];
            let sarr:string[]=["hello","world"];
        //元祖的写法
            let list:[string,number]=["hello",100];
        //添加越界元素的时候，添加的元素是规定类型的联合类型
            list.push(9);
            console.log(list.length);

    枚举
        男   女
         1   2
        未发货   已发货   未签收   已签收
          1        2       3        4
        已禁用   已停用   已启用
          1        2       3
        
        枚举中默认第一个数据是 0，后面的数据依次递增
        可以主动赋值，后面的数据会在上一个数据的基础上递增
        如果产生重复的数字了，后覆盖前
        枚举值可以用常量和计算值，但是使用了计算值、常量后面的数据无法递增，只能设置初始值了
        字符串枚举
            1.简化代码
            2.统一格式
            3.不易出错
        enum Gender{
            weifa=1,
            yifa,
            weiqian,
            yiqian
        }
        console.log(Gender[1])

        enum Gender{
            NotFound=404,
            Error=100,
            Success=200,
            NetError=500
        }
        console.log(Gender.NotFound)

        enum Week{
            Error="对不起，请求失败",
            Success="恭喜操作成功",
            Warning="注意，此操作有风险",
            Info="这就是一个普通提示"
        }

        console.log(Week.Success)

        //异构枚举
        // enum Week{
        //     Error="对不起，请求失败",
        //     Success=1,
        //     Warning="注意，此操作有风险",
        //     Info=2
        // }

    泛型(广泛的类型):类型变量
        1.函数中使用泛型
            function fn<T>(data:T):T{
                console.log(123)
                return 123
            }

            fn<number>(123)

        2.接口中使用泛型
            interface Person<T,U>{
                name:string,
                age:T
            }

            let xm:Person<number>={
                name:"小明",
                age:18
            }
        
        传入的泛型变量可以是接口、字面量、函数、数组、对象
            interface Person{
                name:string
            }

            function fn<T>(data:T):T{
                return data
            }

            fn<Person>({name:"xm"})
            fn<string[]>(["hello","world"])
            fn<{name:string,age:number}>({name:"xm",age:18})

        3.类中使用泛型
            class Person<T>{
                name:T       //成员变量 成员属性 非静态变量
                age:number   //成员变量 成员属性 非静态变量
                constructor(name:T,age:number){
                    this.name=name;
                    this.age=age
                }
            }

            new Person<string>("xm",18)

        4.泛型约束:
            接口的形式  <T extends 接口名>
                interface Person{
                    length:number,
                    age:number
                }

                function fn<T extends Person>(data:T):T{
                    console.log(data.age);
                    return data;
                }

                fn<{length:number,age:number,name:string}>({length:8,age:18,name:"xm"});

                interface xm extends Person{
                    name:string
                }

                fn<xm>({length:8,age:18,name:"xm"});
            
            对象的形式  <T extends {age:number,length:number}>
        
        5.泛型类型参数约束:
            function fn<T,U extends keyof T>(obj:T,key:U){
                console.log(obj[key])
            }
            let a={name:"小明",age:18,address:"北京"};
            fn(a,"name")

    class类:
        静态变量只能通过类访问
        成员变量只能通过成员访问

        如果子类中不写构造器，那么会自动调用父类的构造器
        es6的继承:复制一份父类，添加属性 直接赋给子类
        es5的继承:创建一个空的子类，往子类里面去添加属性
*/

// es6类的写法
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }
//     fn(){
//         console.log(this.name)
//     }
// }

// class Person{
//     name:string   //成员变量 成员属性 实例属性 非静态变量
//     age:number
//     static like:string="money"   //静态变量 / 类变量 / 类属性
//     readonly sex:string   //只读
//     constructor(name:string,age:number,sex:string){
//         this.name=name;
//         this.age=age;
//         this.sex=sex;
//     }
//     //类中定义的所有方法默认都是定义在原型上的 实例方法
//     static eat(){ //类方法/静态方法
//         console.log("我在吃东西")
//     }
// }

// let xm=new Person("小明",18,"boy");
// console.log(xm)

// class Person{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         console.log("我是父类的eat")
//     }
//     sleep(){
//         console.log("我喜欢睡觉")
//     }
// }

// class Xm extends Person{
//     sex:string
//     constructor(name:string,age:number,sex:string){
//         //子类的构造器中必须主动调用父类的构造器
//         super(name,age);
//         this.sex=sex;
//     }
//     //方法重写
//     eat(){
//         console.log("我是子类的eat")
//     }
//     fn(){
//         super.eat();
//         this.eat();
//     }
// }
// new Xm("xm",18,"boy").fn();

class Person{
    name:string
    age:number
    constructor(name:string,age:number){
        console.log("父类的构造器执行了")
        this.name=name;
        this.age=age;
    }
}

class Xm extends Person{
    }
console.log(new Xm("xm",18))