// 1. Create a variable using const and store your college name. Print it.

// const college_name = "Geeta University";
// console.log(college_name);

// 2. Create a variable using let and update its value three times.

// let a = 1;
// a=2;
// a=3;
// a=4;

// console.log(a);

// 3. Create a block using {} and show that a variable declared with let cannot be accessed outside it.

// {
//     let name = "Bob";
// }

// console.log(name);

// 4. Write a program to swap two numbers using array destructuring.

// let a = 5;
// let b = 6;

// console.log(`values before change a = ${a}, b = ${b}`);

// [a,b] = [b,a];

// console.log(`new value of a = ${a}, and b = ${b}`);

// 5. Create an arrow function that returns the cube of a number.

// const cube = (num) => {
//     return num**3;
// }

// console.log(cube(5));

// 6. Create an arrow function to check whether a number is even or odd.

// const check = (num) => num % 2===0 ? "even" : "odd";

// console.log(check(5));

// 7. Create an arrow function that finds the maximum of three numbers.

// const Max = (num1, num2, num3) => {
//     return Math.max(num1, num2, num3);
// }

// console.log(Max(156, 246, 754));

/* 8. Given an array:
const nums = [10, 20, 30, 40, 50];
Use destructuring to get first, second and remaining values.
*/

// const nums = [10,20,30,40,50];

// const [first, second, third, fourth, fifth] = nums;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);
// console.log(fifth);

// 9. Create a function that receives a user's name and age and returns: "Hello Ram, you are 25 years old." using template literals.

// const user = (name, age) => {
//     return `Hello ${name}, you are ${age} years old`
// }

// console.log(user("Bob", 29));

// 10. Generate the following URL dynamically: "/api/users/101" using template literals.

// const url = (id) => {
//     return `/api/users/${id}`;
// }

// console.log(url(201));

/*
    11. Create an object and destructure all properties:
    const student = {
    name: "Ram",
    age: 25,
    course: "MERN"
    };
*/

// const student = {
//     name: "Ram",
//     age: 25,
//     course: "MERN"
// };

// const {name, age, course} = student;

// console.log(name);
// console.log(age);
// console.log(course);

// 12. Rename course to technology while destructuring.

// const {course : technology} = student;

// console.log(technology);

// 13. Create a function with a default parameter: createUser(name, role="Student")

// const createUser = (name, role="Student") => {
//     return `${name} role is ${role}`;
// }

// console.log(createUser("Harish"));
// console.log(createUser("Dev", "Teacher"));

// 14. Create a calculator function where the operation defaults to "add".

// const calculator = (operation = "add", num1, num2) => {
//   if (operation == "add") return num1 + num2;
//   else if (operation == "mul") return num1 * num2;
//   else if (operation == "div") return num1 / num2;
//   else if (operation == "sub") return num1 - num2;
//   else {
//     return num1 ** num2;
//   }
// };

// console.log(calculator(undefined, 2, 4));
// console.log(calculator("mul", 2, 4));

// 15. Create a function that receives unlimited numbers and returns their sum using the Rest Operator.

// const sum = (...num) => {
//     return num.reduce((curr, n) => curr + n, 0);
// }

// console.log(sum(1,2,34,4,5));

// 16. Create a function that receives unlimited numbers and returns the largest number.

// const largestNum = (...num) => {
//     return Math.max(...num);
// }

// console.log(largestNum(33,63,65,36,87));

/* 17. Merge two arrays using the Spread Operator:
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];
*/

// const frontend = ["HTML", "CSS"];
// const backend = ["Node", "Express"];

// const fullStack = [...frontend, ...backend];

// function output(fullStack) {
//     console.log(fullStack);
// }

// output(fullStack)

// 18. Copy an array using the Spread Operator and add one extra value.

// let a = [1,2,3];
// let b = [...a, 4];

// console.log(b);

// 19. Copy an object and update only the email property.

// const user = {
//     name:"Bob",
//     age:20,
//     email:"bob@gmail.com"
// };

// const UpdatedUser = {
//     ...user,
//     email:"bob123@gmail.com"
// }

// console.log(UpdatedUser);

// 20. Create a product object and create a new object with an added discount field using the Spread Operator.

// const product = {
//     name:"Phone",
//     price:20000
// }

// const updatedProduct = {
//     ...product,
//     discount:20
// }

// console.log(updatedProduct);

// 21. Use map() and an arrow function to return only names from the given array:

// const users = [
// { name: "Ram", age: 25 },
// { name: "Mohan", age: 30 },
// { name: "Amit", age: 22 }
// ];

// const name = users.map(user => user.name);

// console.log(name);

// 22. Use filter() to get users whose age is greater than 24.

// const elderUser = users.filter(user => user.age>24);

// console.log(elderUser);

// 23. Use reduce() to calculate the total age of all users.

// const totalAge = users.reduce((sum, user)=>sum+user.age,0);

// console.log(totalAge);

// 24. Create a function createInvoice(customerName, amount) and return a formatted string using template literals.

// const createInvoice = (customerName, amount) => {
//     return `Hello ${customerName} your amount ${amount} is added to your account.`
// }

// console.log(createInvoice("Bob", 25000));

// 25. Mini Challenge
// Given the student object:
// const student = {
//     name: "Ram",
//     marks: [80, 90, 70, 85]
// };
/*Using Destructuring, Arrow Functions, Rest/Spread, and Template Literals, calculate the
total marks and average, then print:
Student: Ram
Total: 325*/

// // Arrow function using Rest Operator & reduce
// const calculateTotal = (...marks) => marks.reduce((sum, m) => sum + m, 0);

// // Destructure marks from student
// const { name, marks } = student;

// // Spread marks into the function
// const total = calculateTotal(...marks);

// // Calculate average
// const average = total / marks.length;

// // Print using template literals
// console.log(`Student: ${name}
// Total: ${total}
// Average: ${average}`);
