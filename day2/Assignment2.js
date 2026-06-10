/* 
Q1 
Predict Output
let a = 10;
function outer() {
let a = 20;
function inner() {
console.log(a);
}
inner();
}
outer();
*/

// Answer -> 20

/*
Q.2
let count = 1;
function test() {
console.log(count);
let count = 2;
}
test();
*/

// Answer -> error: cannot access count before intialization.

/*
Q3
Create a nested function structure of 4 levels and print variables from all parent scopes.
Expected:
1
2
3
*/

// function a(){
//     let n1 = 1;
//     function b(){
//         let n2 = 2;
//         function c() {
//             let n3 = 3;
//             function d(){
//                 console.log(n1);
//                 console.log(n2);
//                 console.log(n3);
//             }
//             d();
//         }
//         c();
//     }
//     b();
// }

// a();

// Q.4 Write a function that returns another function and demonstrates lexical scope.

// function a(){
//     let name = "Bob";
//     function b(){
//         console.log(`Welcome back ${name}`);
//     }
//     b();
// }

// a();

/*
Q.5
Predict Output
var x = 100;
function a() {
console.log(x);
var x = 50;
}
a();
*/

// Answer -> undefined

// Q.6 Create a function where a child function can access grandparent variables.

// function fun1(){
//     let a = 20;
//     function fun2() {
//         let b = 40;
//         function fun3() {
//             let c = 70;
//             console.log(a+c);
//         }
//         fun3();
//     }
//     fun2();
// }
// fun1();

/*
Q.7
let name = "Ram";
function show() {
let name = "Mohan";
return function() {
console.log(name);
}
}
show()();
*/

// Answer -> Mohan

// Q.8 Create a 3-level nested function and access all variables inside the innermost function.

// function p1(){
//     let p1_price = 25000;
//     function p2(){
//         let p2_price = 12000;
//         function total(){
//             console.log(p1_price + p2_price);
//         }
//         total();
//     }
//     p2();
// }
// p1();

// Can a parent access a child variable? Demonstrate using code.

// Answer -> No, parent cannot access child variable get error.
// function company(){
//     cName = "Flipkart";
//     console.log(eName);
//     function employee(){
//         eName = "Bob";
//     }
//     employee();
// }

// company();

// Q.10 Create a private variable using lexical scope.

// function createCounter() {
//     // private variable
//     let count = 0;

//     return {
//         increment: function() {
//             count++;
//             return count;
//         }
//     };
// }

// const counter = createCounter();

// console.log(counter.increment());
// console.log(counter.count); // undefined because count is private variable.

/*
Q.11
Create a counter closure.
Output:
1
2
3
*/

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

/* Q.12 Create a reverse counter.
Output:
10
9
8
*/

// function outer(){
//     let count = 11;
//     function inner() {
//         count--;
//         console.log(count);
//     }
//     return inner;
// }
// const result = outer();

// result();
// result();
// result();

/*
Q13
Create a closure-based bank account.
Methods:
deposit()
withdraw()
checkBalance()
*/

// function createBankAccount(initialBalance = 0) {
//     let balance = initialBalance;

//     return {
//         deposit: function(amount) {
//             if (amount > 0) {
//                 balance += amount;
//                 console.log(`Deposited: ₹${amount}`);
//             } else {
//                 console.log("Deposit amount must be positive.");
//             }
//         },
//         withdraw: function(amount) {
//             if (amount > 0 && amount <= balance) {
//                 balance -= amount;
//                 console.log(`Withdrew: ₹${amount}`);
//             } else {
//                 console.log("Invalid withdrawal amount or insufficient funds.");
//             }
//         },
//         checkBalance: function() {
//             console.log(`Current Balance: ₹${balance}`);
//             return balance;
//         }
//     };
// }

// const myAccount = createBankAccount(1000);

// myAccount.deposit(500);
// myAccount.withdraw(300);
// myAccount.checkBalance();
// console.log(myAccount.balance);

// Q14 Create a closure that remembers the username forever.

// function outer(username){
//     function inner(){
//         console.log(`Welcome back ${username}`);
//     }
//     inner();
// }
// outer("Bob");
// outer("Harry");

// Q15 Create a closure-based login attempt tracker. After 3 failed attempts: Account Locked

// function createLoginTracker(correctPassword) {
//     let attempts = 0;
//     let locked = false;

//     return function(password) {
//         if (locked) {
//             return "Account Locked";
//         }

//         if (password === correctPassword) {
//             attempts = 0;
//             return "Login Successful";
//         } else {
//             attempts++;
//             if (attempts >= 3) {
//                 locked = true;
//                 return "Account Locked";
//             } else {
//                 return `Login Failed. Attempts left: ${3 - attempts}`;
//             }
//         }
//     };
// }

// const login = createLoginTracker("secret123");

// console.log(login("wrong"));
// console.log(login("oops"));
// console.log(login("bad"));
// console.log(login("secret123"));

/*
Q.16
Build a closure that stores a secret password.
Only getter should be available.
*/

/*
Q17
Build a shopping cart using closure.
Methods:
addItem()
removeItem()
showItems()
*/

// function shopping_cart(){
//     function createCart() {
//   let items = [];

//   return {
//     addItem: function(item) {
//       items.push(item);
//       console.log(`${item} added to cart.`);
//     },

//     removeItem: function(item) {
//       const index = items.indexOf(item);
//       if (index !== -1) {
//         items.splice(index, 1);
//         console.log(`${item} removed from cart.`);
//       } else {
//         console.log(`${item} not found in cart.`);
//       }
//     },

//     showItems: function() {
//       if (items.length === 0) {
//         console.log("Cart is empty.");
//       } else {
//         console.log("Items in cart:", items);
//       }
//     }
//   };
// }

// const cart = createCart();
// cart.addItem("Laptop");
// cart.addItem("T-Shirt");
// cart.showItems();
// cart.removeItem("Laptop");
// cart.showItems();

// }
// shopping_cart();

/* Q18
Create a closure-based voting machine.
Each user can vote only once
*/

// function votingMachine() {
//     let voters = new Set();

//     return function(user) {
//         if (voters.has(user)) {
//             console.log("Already Voted");
//         } else {
//             voters.add(user);
//             console.log("Vote Counted");
//         }
//     };
// }

// Q19 Build a closure that counts how many times a function is executed.

// function executionCounter(fn) {
//     let count = 0;

//     return function() {
//         count++;
//         console.log("Executed:", count);

//         return fn();
//     };
// }

/* Q20
Build a closure-based expense tracker.
Methods:
addExpense()
getTotal()
*/

// function expenseTracker() {
//     let expenses = [];

//     return {
//         addExpense(amount) {
//             expenses.push(amount);
//         },

//         getTotal() {
//             return expenses.reduce((a, b) => a + b, 0);
//         }
//     };
// }

// Q21 Create an IIFE that prints: Welcome to JavaScript

// (function() {
//     console.log("Welcome to JavaScript");
// })();

// Q22 Pass arguments to an IIFE and calculate area of rectangle.


// (function(length, width) {
//     console.log(length * width);
// })(10, 5);

// Q23 Create an arrow function IIFE

// (() => {
//     console.log("Arrow IIFE");
// })();

// Q24 Use IIFE to create private variables.

// const counter = (function() {
//     let count = 0;

//     return {
//         increment() {
//             return ++count;
//         }
//     };
// })();

/*
Q25
Create a module pattern using IIFE.
Methods:
increment()
decrement()
reset()
*/

// const counterModule = (function() {
//     let count = 0;

//     return {
//         increment() {
//             return ++count;
//         },

//         decrement() {
//             return --count;
//         },

//         reset() {
//             count = 0;
//         }
//     };
// })();

/*
Q26
Create a function:
calculate(a,b,operation)
Perform:
add
subtract
multiply
divide
*/

// function calculate(a, b, operation) {
//     return operation(a, b);
// }

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// console.log(calculate(10, 5, add));

/*
Create your own custom HOF named:
repeat()
Example
repeat(5, sayHello)

*/

// function repeat(times, callback) {
//     for (let i = 0; i < times; i++) {
//         callback();
//     }
// }

// function sayHello() {
//     console.log("Hello");
// }

// repeat(5, sayHello);

/*
Q28
Create a logger HOF.
Output:
[INFO] User Logged In
*/

// function logger(fn) {
//     return function(...args) {
//         console.log("[INFO]");
//         return fn(...args);
//     };
// }

// const login = logger(() => console.log("User Logged In"));

// login();

/*
Q29
Create a function execution timer using HOF.
Output:
Execution Time: XX ms
*/

// function timer(fn) {
//     return function(...args) {
//         const start = performance.now();

//         const result = fn(...args);

//         const end = performance.now();

//         console.log(`Execution Time: ${end - start} ms`);

//         return result;
//     };
// }

// Q30 Create a function wrapper that counts how many times another function was called.

// function countCalls(fn) {
//     let count = 0;

//     return function(...args) {
//         count++;

//         console.log("Called:", count);

//         return fn(...args);
//     };
// }

/*
Q31
Given
const users = [
{name:"Ram",age:25},
{name:"Mohan",age:30},
{name:"Amit",age:22}
];
Return:
[
"Ram",
"Mohan",
"Amit"
]
using map
*/

// const users = [
//     { name: "Ram", age: 25 },
//     { name: "Mohan", age: 30 },
//     { name: "Amit", age: 22 }
// ];

// const names = users.map(user => user.name);

// console.log(names);

/*
Q32
Convert
[1,2,3,4,5]
into
[1,4,9,16,25]
using map.

*/

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(num => num * num);

// console.log(squares);

/*
Q33
Create an array of product names from:
[
{name:"Laptop"},
{name:"Mouse"},
{name:"Keyboard"}
]

*/

// const products = [
//     { name: "Laptop" },
//     { name: "Mouse" },
//     { name: "Keyboard" }
// ];

// const names = products.map(product => product.name);

// console.log(names);

/*
Q34
Filter all even numbers.
Input:
[1,2,3,4,5,6]
Output:
[2,4,6]
*/

// const nums = [1, 2, 3, 4, 5, 6];

// const even = nums.filter(num => num % 2 === 0);

// console.log(even);

// Q35 Filter users whose age is greater than 25
// const users = [
//     { name: "Ram", age: 25 },
//     { name: "Mohan", age: 30 },
//     { name: "Amit", age: 22 }
// ];

// const result = users.filter(user => user.age > 25);

// console.log(result);

// Q36 Filter expensive products. Condition: price > 1000
// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 }
// ];

// const expensive = products.filter(product => product.price > 1000);

// console.log(expensive);

/*
Q37
Find total sum.
Input:
[10,20,30,40]
Output:
100
*/

// const arr = [10, 20, 30, 40];

// const total = arr.reduce((sum, num) => sum + num, 0);

// console.log(total);

/*
Q38
Find maximum value using reduce.
Input:
[5,12,3,45,2]
Output:
45
*/

// const arr = [5, 12, 3, 45, 2];

// const max = arr.reduce((a, b) => (a > b ? a : b));

// console.log(max);

/*
Count total characters.
Input:
["JavaScript","React","Node"]
Output:
20
*/

// const words = ["JavaScript", "React", "Node"];

// const total = words.reduce((sum, word) => sum + word.length, 0);

// console.log(total);

/*
Q40 ⭐ Ultra Hard
Given:
const orders = [
{
id:1,
amount:5000,
status:"completed"
},
{
id:2,
amount:2000,
status:"pending"
},
{
id:3,
amount:7000,
status:"completed"
},
{
id:4,
amount:1000,
status:"completed"
}
];
Using only:
filter()
map()
reduce()
Find:
1. Completed Orders
2. Total Revenue
3. Average Revenue
4. Highest Order Amount
5. Array of Order IDs
*/

const orders = [
{
id:1,
amount:5000,
status:"completed"
},
{
id:2,
amount:2000,
status:"pending"
},
{
id:3,
amount:7000,
status:"completed"
},
{
id:4,
amount:1000,
status:"completed"
}
];

const completedOrders = orders.filter(d=>d.status == "completed");
console.log(completedOrders);

const totalRevenue = orders.reduce((acc,curr)=> acc+curr.amount,0);
console.log(totalRevenue);

const averageRevenue = totalRevenue/orders.length;
console.log(averageRevenue);

const Highest_Order_Amount = orders.reduce((acc,curr)=>{return curr.amount > acc.amount ? curr : acc}, orders[0]);
console.log(Highest_Order_Amount)

const arr_orders_id = orders.map(order=>order.id);
console.log(arr_orders_id);