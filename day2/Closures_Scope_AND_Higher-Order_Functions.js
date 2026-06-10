// GLobal Scope ->

// let name = "Sachine";

// function show(){
//     console.log(name);
// }

// show();

// functional scope ->

// function show(){
//     let name = "Sachine";
// }

// console.log(name);
// show();

// Block Scope ->

// {
//     let city = "Delhi";
//     console.log(city);
// }

// console.log(city);

// let a = 10;

// function outer() {
//     let b = 20;
//     console.log(a);
//     console.log(b);
// }

// outer();

// Lexical Scope ->

// outer parent function, inner child function.

// function outer() {
//     let username = "Parveen";
//     function inner() {
//         console.log(username);
//     }
//     inner();
// }
// outer();

// function a() {
//     let x = 10;
//     function b() {
//         let y = 20;
//         function c() {
//             console.log(x);
//             console.log(y);
//         }
//         c();
//     }
//     b();
// }
// a();
// console.log(x);

// Closure -> closure is a combination of function and its lexical environment.

// function outer(){
//     let count = 0;
//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const result = outer();

// result();
// result();
// result();

// let company = "Google";
// function department() {
//     let dept = "Engineering";
//     function team() {
//         let teamName = "Frontend";
//         function employee(){
//             let emp = "Prince";
//             console.log(company);
//             console.log(dept);
//             console.log(teamName);
//             console.log(emp);
//         }
//         employee();
//     }
//     team();
// }
// department();

// let name = "Global";

// function outer(){
//     let name = "Outer";
//     function inner(){
//         let name = "inner";
//         console.log(name);
//     }
//     inner();
// }
// outer();

// let a = 10;
// function outer() {
//     let b = 20;
//     return function middle() {
//         let c = 30;
//         return function inner(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// }

// const x = outer();

// const y = x();

// y();

// let x = 1;
// function A(){
//     let x = 2;
//     function B() {
//         let x = 3;
//         function C() {
//             let x = 4;
//             function D() {
//                 console.log(x);
//             }
//             D();
//         }
//         C();
//     }
//     B();
// }
// A();

// IIFE - immediately invoked function expression. ->

// (function(name){
//     console.log(name)
// }("Prince"));

// const result = (function(a,b){
//     return a+b;
// }(10,20));

// console.log(result);

// Higher Order Function -> When a function use a function as a parameter or a function returning a function as result that will be known as hof.

// function Hello(){
//     console.log("Hello");
// }

// function execute(fn){
//     fn();
// }

// execute(Hello);

// function calculate(a,b,operation){
//     return operation(a,b);
// }

// function add(x,y){
//     return x+y;
// }

// console.log(calculate(70,90,add));

// map Function ->

// const nums = [1,2,3,4];

// const result = nums.map(num=>num*2);

// console.log(result);

// const products = [
//     {id : 1, name: "Mobile", price : 15000},
//     {id : 2, name: "Pen", price : 150},
//     {id : 3, name: "bottle", price : 3400},
//     {id : 4, name: "tv", price : 250000},
//     {id : 5, name: "laptop", price : 75000},
//     {id : 6, name: "Book", price : 400},
//     {id : 7, name: "Tablet", price : 600},
// ]

// const productsName = products.map(p=>p.name);
// console.log(productsName);

// filter ->

// const values = [10,20,30,40,50];

// const result = values.filter(n=>n<=30);

// console.log(result);

// const products = [
//     {price : 15000},
//     {price : 150},
//     {price : 3400},
//     {price : 250000},
//     {price : 75000},
//     {price : 400},
//     {price : 600},
// ]

// const result = products.filter(product=>product.price<500);

// console.log(result);

// const names = ["Ram", "Amit", "Sachine", "Priyanshu", "Ankush", "Sahil", "Gyan", "Shiv"];

// const result = names.filter(name=> name[0]==('S'));
// const result = names.filter(name=> name.startsWith('S'));

// console.log(result);

// Reduce ->

// const nums = [1,2,3,4];

// const sum = nums.reduce((acc,curr)=>acc+curr,0);

// console.log(sum);

// const prices = [100,200,300,400,500];

// const result = prices.reduce((acc, curr)=> acc*curr,1);

// console.log(result);

// const array = [10,50,20,30,90,60];

// const result = array.reduce((acc, curr)=> {return curr > acc ? curr : acc},array[0]);

// console.log(result);

// const words = ["Hello", "How", "are", "you"];

// const result = words.reduce((acc,curr) => {return acc + " " + curr})

// console.log(result);