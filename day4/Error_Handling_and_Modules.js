// Types of error ->

// 1. Reference error : variable not exist

// 2. Type error : 

// let num  = 10;

// num.toUpperCase();

// 3. Syntax error : not follow set of rules to write code in a language or we can say that program grammer is not written correct.

// num.toUpperCase(

// 4. Range Error : 

// const arr = new Array(-5); 

// 5. Run time Error : 

// Error Handling Methods ->

// 1.  Try Catch Block in JS =>

// normal syntax -
// console.log("A");
// console.log(user.name);
// console.log("B");

// using try catch block -
// console.log("A");
// try{
//     console.log(user.name);
// } catch(error){
//     // properties of error -
//     console.log(error.name);
//     console.log(error.message);

//     // professionally just write
//     console.log(error);

//     console.log("Error Handled Successfully.");
// }finally{

// }
// console.log("B");

// 2. throw =>

// let age = 17;

// if(age<18){
//     throw new Error(
//         "You are not eligiable"
//     );
// }

