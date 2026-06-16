// Synchronous code ->

// function multiply(a,b){
//     return a * b;
// }


// Asynchronous code ->

// const fs = require('fs');
// const http = require('http');

// // setTimeout
// setTimeout(()=>{
//     console.log('This is printed after 2 second.');
// },2000);

// // Get request
// http.get('http://jsonplaceholder.typicode/posts', (res)=>{
//     let data = '';
//     res.on('data', (chunk) => data += chunk);
//     res.on('end', () => console.log('GET Response:', data));
// });

// // read File
// fs.readFile('sample.txt', 'utf8', (err, data) => {
//     if (err) console.log('Error reading file:', err);
//     else console.log('File Content', data);
// })

