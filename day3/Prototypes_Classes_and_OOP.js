// curry function in js ->

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }
// console.log(add(20)(30)(40));

// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending Email to ${to}
//                 Subject : ${subject}
//                 body : ${body}`);
//         }
//     }
// }

// let step1 = sendAutoEmail("princerathi123@gmail.com");
// let step2 = step1("Regarding confirmation Mail for signup");
// step2("This mail is sent for signup purpose. You just signup to our website. We want that you confirm that the signup email is your. Please click below button to confirm your signup.");

// Object ->

// array of object
// const allStudentData = [
//   {
//     name: "Sachin",
//     age: 12,
//     city: "Panipat",
//   },
//   {
//     name: "Dev",
//     age:12,
//     city:"Mumbai"
//   }
// ];

// basically if any particular object is using any value of key in a method so at that time to access that we have to use this keyword.
// this -> student

// const student = {
//     name:"Ram",
//     age:13,
//     city:"Panipat",
//     skills: "MERN stack",
//     sayYourSkills: function(){
//         // console.log("hello my skills are MERN stack");
//         // using "this" access skills
//         console.log(this.skills);
//     }
// }

// console.log(student["age"]);
// console.log(student.name);
// student.sayYourSkills();


// Difference b/w . and [] notation is that when we assign a key to a variable and want to acces the key through variable with the help of . notation it will give 'undefined' and with help of [] notation it will give the actual value of object!..

// let key = "name";
// console.log(student.key);
// console.log(student[key]);

// const obj1 = {
//     name:"Ram"
// }

// const obj2 = obj1;
// obj2.name = "Shyam";

// console.log(obj1.name)

// Prototype ->

// Memory problem creating multiple object.
// const dog1 = {
//     name:"Pilla",
//     bark(){
//         console.log("Hello, dog am barking...!");
//     }
// }
// const dog2 = {
//     name:"Jack",
//     bark(){
//         console.log("Helloo, dog am barking...!");
//     }
// }
// const dog3 = {
//     name:"Meta",
//     bark(){
//         console.log("Helloo, dog am barking...!");
//     }
// }

// Memory Wasting
// Method ko ek jagah rkhna

// prototype example => 

// const animal = {
//     bark() {
//         console.log("Hello dog am barking!....")
//     }
// }

// const dog = Object.create(animal);
// dog.name = "Jack";

// console.log(dog.name);
// dog.bark();

// constructor function ->

// function Student(name, age){
//     this.name = name;
//     this.age = age;
// }

// const s1 = new Student("Ram", 25);
// const s2 = new Student("Vansh", 23);

// console.log(s1);
// console.log(s2);

// function User(name){
//     this.name = name;
// }

// const u1 = new User("Ram");

// console.log(u1.name);

// function Student(name, age){
//     this.name = name;
//     this.age = age;
//     // this.greet = function() {
//     //     console.log("Hello");
//     // }
// }

// /*
// Inside constructor (this.greet = ...) → Each object gets its own copy (memory inefficient).

// On prototype (Student.prototype.greet = ...) → All objects share one function (better practice).
// */

// Student.prototype.greet = function() {
//     console.log("Hello");
// }

// const s1 = new Student("Ram", 25);
// const s2 = new Student("Jatin", 26);
// const s3 = new Student("Pravin", 28);

// s1.greet();
// s2.greet();

// function Student() {}

// console.log(Student.prototype);

// function Student() {}
// const s1 = new Student();

// console.log(s1.__proto)


// ES6 Classes in JavaCsript ->

// Noraml Defination:

// function Student(name, age){
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.greet = function() {
//     console.log("Hello");
// }

// ES6 Style Defination -
// Interview Question - kya class ke andar method object me copy hota h??
// Answer - No.

// class Student{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log("Hello");
//     }
// }

// inheritance ->

// extend help to inherit properties of other class.

// class Animal{
//     eat(){
//         console.log("Eating");
//     }
// }

// class Dog extends Animal{

// }

// const dog = new Dog();
// dog.eat();

// use case of super =>

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name); //✅
//         // this.name = name //❌
//     }
// }

// const dog = new Dog("Tom");

// Getter / Setter in JavaScript ->

// normal object form:
// userInfo.name();

// Using Getter:

// class user {
//     get message(){
//         return "Hello";
//     }
// }

// const u = new user();

// console.log(u.message);

// Setter -> is used to validate the data

// class User {
//     set age(value){
//         if(value<0){
//             throw Error("Invalid Age.");
//         }
//         this._age = value;
//     }
// }

// setter - will run automatically, getter - have to call.

// Static Method in JS ->

// to access normal method in js.
// userInfo.greet();

// class MathHelper{
//     static add(a,b){
//         return a+b;
//     }
// }

// MathHelper.add(10,20);
// there is no need to create objects in static class.

// class Animal{
//     eat(){
//         console.log("Eating...");
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Wooooo....");
//     }
// }

// const d = new Dog();

// d.bark();
// d.eat();