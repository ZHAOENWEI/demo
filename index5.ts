//访问修饰符

// class Animal{
//     private name;
//     public constructor(name){
//         this.name=name;
//     }
//     public getName():string{
//         return this.name
//     }
//     public setName(name:string){
//         this.name=name
//     }
// }

// //java 面向对象中封装的思想
// let a = new Animal("jack");
// a.setName("peter");
// console.log(a.getName())

// class Animal{
//     protected name;
//     public constructor(name){
//         this.name=name;
//     }
// }

// class Cat extends Animal{
//     public constructor(name){
//         super(name);
//         console.log(super.name)
//     }
// }
// //super代表的不只是直接父类
// class Mimi extends Cat{
//     constructor(hello){
//         super(hello);
//         console.log(super.name)
//     }
// }

//抽象类
abstract class Animal{
    abstract fn()  //抽象方法:没有方法体的方法
}

abstract class Dog extends Animal{
    //方法重写
}

// new Dog();//抽象类不能被实例化

class Pupy extends Dog{
    fn() {
        console.log("小狗四条腿跑")
    }
}
new Pupy().fn();

class Monkey extends Animal{
    fn() {
        console.log("猴子两条腿跑")
    }
}
new Monkey().fn();