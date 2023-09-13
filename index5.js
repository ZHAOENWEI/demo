//访问修饰符
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
// new Dog();//抽象类不能被实例化
var Pupy = /** @class */ (function (_super) {
    __extends(Pupy, _super);
    function Pupy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pupy.prototype.fn = function () {
        console.log("小狗四条腿跑");
    };
    return Pupy;
}(Dog));
new Pupy().fn();
var Monkey = /** @class */ (function (_super) {
    __extends(Monkey, _super);
    function Monkey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monkey.prototype.fn = function () {
        console.log("猴子两条腿跑");
    };
    return Monkey;
}(Animal));
new Monkey().fn();
