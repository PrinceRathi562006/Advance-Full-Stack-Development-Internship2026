// var a=5
// var a =6
// console.log(a)

// function result(){
//     var x=5;
//     console.log(x);
// }

// console.log(result)
// result()

// introducing let

// let a=5;
// let a=6;
// console.log(a)

// for(let i=1;i<=3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },2000);
// }

// const variable

// const user = {
//     name : "Nishant",
//     age : 20,
//     city : "Panipat"
// }

// name = "Nishu"

// console.log(user.name)

// IN case of hoisting all are hoisted
// console.log(value)
// var a =7;
// let b = 8;
// var result = 31;
// const value=48;
// let m = 7

// in case of const and let we can not access them because they are in
//  temporal dead zone so they cannot be accessed

// function add( a, b){
//     let result = a + b;
//     return result;
// }

// let data = add(5,6);

// console.log(data);

// const greet = (name)=>{
//     return "Hello "+ name +" Welcome "
// }

// console.log(greet("Nishant"))

// Implicit return

// const multiply = (num1 , num2) => num1*num2;
// console.log(multiply(4,7))

// zero parameter

// const fun = ()=>(
//     {name:"NIshant"}
// )
// console.log(fun())

// const products = [
//     {id : 1, name: "Mobile", price : 15000},
//     {id : 2, name: "Pen", price : 150},
//     {id : 3, name: "bottle", price : 3400},
//     {id : 4, name: "tv", price : 250000},
//     {id : 5, name: "laptop", price : 75000},
//     {id : 6, name: "Book", price : 400},
//     {id : 7, name: "Tablet", price : 600},
// ]

// Write a arrow function to find products with price greater than 10000?

// const price_limit = (products)=>{
//     return products.filter(p => p.price>10000)
// }

// console.log(price_limit(products));

// Write an arrow function to find total sum of price?

// const total_price = (products) => {
//     return products.reduce((sum, p) => sum += p.price,0)
// }

// console.log("total price =", total_price(products));

// Template Literal ->

// const name = "Geeta";

// console.log(`my school name is ${name}`);

// no need to use \n.
// const line = `my name
// is
// Surya.`

// console.log(line);

// let a = 8, b = 13;

// console.log(`sum of a and b is ${a+b}`);

// Array Destructing ->

// const arr = ["Prince", "Bob", "Alex"];

// const [firstName, secondName, thirdName] = arr;

// console.log(firstName);

// Object Destructing ->

// const user = {
//   name: "Bob",
//   age: 25,
// };

// const { name: userName, age: userAge } = user;
// const { name, age } = user;
// console.log(name);

// console.log(userName);


// Default parameters & rest/spread operator ->

// function greet (name="Guest"){
//     console.log(name);
// }

// greet(); // default output
// greet("Pravin") // output given parameter

// function createUser (role="student"){
//     console.log(role);
// }

// createUser();  // default role = student
// createUser("teacher")   // output role = teacher
// createUser("admin")   // output role = admin

// Rest operator ->

// function addValue(...nums){
//     console.log(nums);
// }

// console.log(addValue(1,2,3,4,5,6,7));

// -> Spread operator

// const arr = [1,2,3,4];

// function spread_arr(...nums){
//     console.log(nums);
// }

// spread_arr(...arr);