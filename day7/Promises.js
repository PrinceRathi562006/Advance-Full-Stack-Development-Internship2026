// syntax to create a promise ->

// const promise = new Promise((resolve, reject)=>{
//     // resolve("Hello from Promise");
//     resolve(100);
// });

// how to use (consume) Promise ->

// promise.then((data)=>{
//     console.log(data);
// });

// promise.then((amount)=>{
//     console.log(amount);
// });

// How to handle resolve ->

// promise.then((data)=>{
//     console.log(data);
// });

// How to handle reject in promise ->

// - for handling reject we have to use .catch() method.

// const promise = new Promise((resolve, reject) => {
//     reject("Network error");
// });

// promise.catch((error)=>{
//     console.log(error);
// });

// const result = fetch("http://jsonholder.typicode.com/users");
// console.log(result);

// const promise = new Promise((resolve, reject)=>{
//     let success = false;

//     if(success){
//         resolve("Success");
//     }else{
//         reject("failed");
//     }
// })

// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });

const result = fetch("https://jsonplaceholder.typicode.com/users");

result.then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


// Promise Chainig ->

Promise.resolve(10)
.then((num)=>{
    return num*2
}).then((num)=>{
    return num+5;
})
.then((num)=>{
    console.log(num);
    
})