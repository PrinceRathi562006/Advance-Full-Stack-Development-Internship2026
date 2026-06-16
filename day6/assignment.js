/*
Q1
Create your own function:
greetUser(name, callback)
Output:
Hello Ram
Welcome Ram
*/

function greetUser(name, callback) {
  console.log("Hello " + name);
  callback(name);
}

greetUser("Ram", function (name) {
  console.log(`Welcome ${name}`);
});

/*
Q2
Create:
calculate(a,b,callback)
Perform:
● Add
● Multiply
● Divide
Using callback.
*/

function calculate(a, b, callback) {
  return callback(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Cannot divide by zero" : a / b);

console.log("Add: " + calculate(10, 5, add));
console.log("Multiply: " + calculate(10, 5, multiply));
console.log("Divide: " + calculate(10, 5, divide));

/*
Q3
Create a custom callback based calculator.
Input:
calculator(20,10,operation)
Output should depend on operation callback.
*/

function calculator(a, b, operation) {
  return operation(a, b);
}

const addOp = (a, b) => a + b;
const subOp = (a, b) => a - b;
const multiplyOp = (a, b) => a * b;
const divideOp = (a, b) => (b === 0 ? "Cannot divide by zero" : a / b);

console.log("Add: " + calculator(20, 10, addOp));
console.log("Subtract: " + calculator(20, 10, subOp));
console.log("Multiply: " + calculator(20, 10, multiplyOp));
console.log("Divide: " + calculator(20, 10, divideOp));

/*
Q4
Create a function:
processStudent(student, callback)
Callback should print student details.
*/

const student = {
  name: "Ram",
  age: 23,
  city: "Panipat",
};

function processStudent(student, callback) {
  return callback(student);
}

function printDetails(student) {
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`City: ${student.city}`);
}

processStudent(student, printDetails);

/*
Q5
Create a function:
downloadFile(callback)
Simulate file download after 2 sec.
*/

function downloadFile(callback) {
  setTimeout(() => {
    callback("File downloaded successfully");
  }, 2000);
}

downloadFile((message) => {
  console.log(message);
});

/*
Q6
Create:
registerUser(callback)
After registration callback should send welcome email.
*/

const registerUserDetail = {
  name: "Bob",
  email: "bob@gmail.com",
};

function registerUser(user, callback) {
  callback(user);
}

function sendWelcomeEmail(user) {
  console.log(
    `To: ${user.email}\nSubject: Registration Successful\nBody: Hello ${user.name}, welcome to our website!`,
  );
}

registerUser(registerUserDetail, sendWelcomeEmail);

/*
Q7
Create:
placeOrder(callback)
After order callback should generate invoice.
*/

function placeOrder(orderDetails, callback) {
  callback(orderDetails);
}

function generateInvoice(order) {
  console.log(
    `Invoice:\nOrder ID: ${order.id}\nTotal: $${order.amount}\nStatus: Confirmed`,
  );
}

placeOrder({ id: 1001, amount: 5000 }, generateInvoice);

/*
Q8
Create:
fetchUser(callback)
Return dummy user after 3 sec.
*/

function fetchUser(callback) {
  setTimeout(() => {
    const user = { id: 1, name: "John", email: "john@gmail.com" };
    callback(user);
  }, 3000);
}

fetchUser((user) => {
  console.log("User fetched: ", user);
});

/*
Q9
Create callback-based OTP verification.
*/

function sendOTP(email, callback) {
  const otp = Math.floor(Math.random() * 9000) + 1000;
  console.log(`OTP sent to ${email}: ${otp}`);
  callback(otp);
}

function verifyOTP(enteredOTP, sentOTP, callback) {
  if (enteredOTP === sentOTP) {
    callback(true);
  } else {
    callback(false);
  }
}

sendOTP("user@gmail.com", (otp) => {
  verifyOTP(1234, otp, (isValid) => {
    console.log(isValid ? "OTP Verified" : "OTP Invalid");
  });
});

/*
Q10
Create callback-based login system.
*/

function login(username, password, callback) {
  setTimeout(() => {
    if (username === "admin" && password === "12345") {
      callback(true, "Login successful");
    } else {
      callback(false, "Invalid credentials");
    }
  }, 1000);
}

login("admin", "12345", (success, message) => {
  console.log(message);
});

/*
Q11
Predict output
console.log("A");
setTimeout(()=>{
console.log("B");
},0);
console.log("C");
*/

console.log("Q11 Output:");
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");

/*
Q12
Predict output
setTimeout(()=>{
console.log(1);
},1000);
console.log(2);
*/

console.log("\nQ12 Output:");
setTimeout(() => {
  console.log(1);
}, 1000);
console.log(2);

/*
Q13
Predict output
console.log("Start");
setTimeout(()=>{
console.log("Timeout");
},0);
console.log("End");
*/

console.log("\nQ13 Output:");
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
console.log("End");

/*
Q14
Create countdown:
5
4
3
2
1
Boom
Using setTimeout.
*/

console.log("\nQ14 Countdown:");
function countdown(n) {
  if (n <= 0) {
    console.log("Boom");
    return;
  }
  console.log(n);
  setTimeout(() => {
    countdown(n - 1);
  }, 1000);
}

countdown(5);

/*
Q15
Create digital bomb timer.
*/

console.log("\nQ15 Bomb Timer:");
function bombTimer(seconds, callback) {
  if (seconds === 0) {
    callback();
    return;
  }
  console.log(`${seconds} seconds remaining`);
  setTimeout(() => {
    bombTimer(seconds - 1, callback);
  }, 1000);
}

bombTimer(3, () => {
  console.log("💣 BOOM!");
});

/*
Q16
Create delayed greeting system.
User enters name.
After 2 sec greeting appears.
*/

console.log("\nQ16 Delayed Greeting:");
function delayedGreeting(name, delay, callback) {
  setTimeout(() => {
    callback(name);
  }, delay);
}

delayedGreeting("Alice", 2000, (name) => {
  console.log(`Hello ${name}! Welcome!`);
});

/*
Q17
Create delayed notification system.
*/

console.log("\nQ17 Delayed Notification:");
function sendNotification(message, delay, callback) {
  setTimeout(() => {
    callback(message);
  }, delay);
}

sendNotification("Your order has been confirmed", 1500, (msg) => {
  console.log(`🔔 Notification: ${msg}`);
});

/*
Q18
Create delayed button disable feature.
*/

console.log("\nQ18 Button Disable Simulation:");
function disableButtonTemporarily(delay) {
  console.log("Button disabled");
  setTimeout(() => {
    console.log("Button enabled");
  }, delay);
}

disableButtonTemporarily(2000);

/*
Q19
Create delayed redirect simulation.
*/

console.log("\nQ19 Delayed Redirect:");
function delayedRedirect(url, delay) {
  setTimeout(() => {
    console.log(`Redirecting to ${url}`);
  }, delay);
}

delayedRedirect("https://www.example.com", 2000);

/*
Q20
Create a function:
wait(seconds, callback)
*/

function wait(seconds, callback) {
  setTimeout(() => {
    callback();
  }, seconds * 1000);
}

console.log("\nQ20 Wait Function:");
wait(2, () => {
  console.log("2 seconds have passed");
});

/*
Q21
Simulate:
Login
↓
Get User
↓
Get Orders
↓
Show Orders
Using nested callbacks.
*/

console.log("\nQ21 Login Flow:");
function login21(username, callback) {
  setTimeout(() => {
    callback(null, { username: username, id: 123 });
  }, 1000);
}

function getUser(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: "John Doe", email: "john@gmail.com" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    callback(null, [
      { id: 1, product: "Laptop" },
      { id: 2, product: "Phone" },
    ]);
  }, 1000);
}

function showOrders(orders, callback) {
  setTimeout(() => {
    callback(null, orders);
  }, 1000);
}

login21("admin", (err, data) => {
  if (err) console.log(err);
  else {
    getUser(data.id, (err, user) => {
      if (err) console.log(err);
      else {
        getOrders(user.id, (err, orders) => {
          if (err) console.log(err);
          else {
            showOrders(orders, (err, result) => {
              console.log("Orders:", result);
            });
          }
        });
      }
    });
  }
});

/*
Q22
Create callback hell with 5 nested levels.
*/

console.log("\nQ22 Callback Hell:");
function level1(callback) {
  setTimeout(() => {
    console.log("Level 1 complete");
    callback();
  }, 500);
}

function level2(callback) {
  setTimeout(() => {
    console.log("Level 2 complete");
    callback();
  }, 500);
}

function level3(callback) {
  setTimeout(() => {
    console.log("Level 3 complete");
    callback();
  }, 500);
}

function level4(callback) {
  setTimeout(() => {
    console.log("Level 4 complete");
    callback();
  }, 500);
}

function level5(callback) {
  setTimeout(() => {
    console.log("Level 5 complete");
    callback();
  }, 500);
}

level1(() => {
  level2(() => {
    level3(() => {
      level4(() => {
        level5(() => {
          console.log("All levels completed!");
        });
      });
    });
  });
});

/*
Q23
Simulate food ordering system.
Order
↓
Cook
↓
Pack
↓
Deliver
*/

console.log("\nQ23 Food Ordering System:");
function placeOrder23(order, callback) {
  setTimeout(() => {
    console.log(`Order placed: ${order}`);
    callback(order);
  }, 1000);
}

function cook(order, callback) {
  setTimeout(() => {
    console.log(`Cooking: ${order}`);
    callback(order);
  }, 2000);
}

function pack(order, callback) {
  setTimeout(() => {
    console.log(`Packing: ${order}`);
    callback(order);
  }, 1000);
}

function deliver(order, callback) {
  setTimeout(() => {
    console.log(`Delivering: ${order}`);
    callback();
  }, 2000);
}

placeOrder23("Biryani", (order) => {
  cook(order, (order) => {
    pack(order, (order) => {
      deliver(order, () => {
        console.log("Order delivered successfully!");
      });
    });
  });
});

/*
Q24
Simulate hospital process.
Registration
↓
Doctor
↓
Test
↓
Medicine
*/

console.log("\nQ24 Hospital Process:");
function registration(name, callback) {
  setTimeout(() => {
    console.log(`${name} registered`);
    callback(name);
  }, 1000);
}

function consultDoctor(name, callback) {
  setTimeout(() => {
    console.log(`${name} consulting with doctor`);
    callback(name);
  }, 1500);
}

function medicalTest(name, callback) {
  setTimeout(() => {
    console.log(`${name} undergoing medical test`);
    callback(name);
  }, 2000);
}

function prescribeMedicine(name, callback) {
  setTimeout(() => {
    console.log(`${name} prescribed medicine`);
    callback();
  }, 1000);
}

registration("Patient A", (name) => {
  consultDoctor(name, (name) => {
    medicalTest(name, (name) => {
      prescribeMedicine(name, () => {
        console.log("Hospital process completed!");
      });
    });
  });
});

/*
Q25
Simulate college admission process.
Form
↓
Verification
↓
Payment
↓
Admission
*/

console.log("\nQ25 College Admission:");
function fillForm(name, callback) {
  setTimeout(() => {
    console.log(`${name} filled form`);
    callback(name);
  }, 1000);
}

function verify(name, callback) {
  setTimeout(() => {
    console.log(`${name} verified`);
    callback(name);
  }, 1500);
}

function makePayment(name, callback) {
  setTimeout(() => {
    console.log(`${name} payment received`);
    callback(name);
  }, 1000);
}

function admit(name, callback) {
  setTimeout(() => {
    console.log(`${name} admitted`);
    callback();
  }, 1000);
}

fillForm("Student1", (name) => {
  verify(name, (name) => {
    makePayment(name, (name) => {
      admit(name, () => {
        console.log("Admission process completed!");
      });
    });
  });
});

/*
Q26
Create callback chain for:
Signup
↓
Verify Email
↓
Login
↓
Dashboard
*/

console.log("\nQ26 User Flow:");
function signup(email, callback) {
  setTimeout(() => {
    console.log(`Signup: ${email}`);
    callback(email);
  }, 1000);
}

function verifyEmail(email, callback) {
  setTimeout(() => {
    console.log(`Email verified: ${email}`);
    callback(email);
  }, 1500);
}

function login26(email, callback) {
  setTimeout(() => {
    console.log(`Login: ${email}`);
    callback(email);
  }, 1000);
}

function showDashboard(email, callback) {
  setTimeout(() => {
    console.log(`Dashboard loaded for ${email}`);
    callback();
  }, 1000);
}

signup("user@gmail.com", (email) => {
  verifyEmail(email, (email) => {
    login26(email, (email) => {
      showDashboard(email, () => {
        console.log("User flow completed!");
      });
    });
  });
});

/*
Q27
Create nested callbacks with random delays.
*/

console.log("\nQ27 Random Delays:");
function task1(callback) {
  const delay = Math.random() * 2000;
  setTimeout(() => {
    console.log(`Task 1 completed in ${delay.toFixed(2)}ms`);
    callback();
  }, delay);
}

function task2(callback) {
  const delay = Math.random() * 2000;
  setTimeout(() => {
    console.log(`Task 2 completed in ${delay.toFixed(2)}ms`);
    callback();
  }, delay);
}

function task3(callback) {
  const delay = Math.random() * 2000;
  setTimeout(() => {
    console.log(`Task 3 completed in ${delay.toFixed(2)}ms`);
    callback();
  }, delay);
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks completed!");
    });
  });
});

/*
Q28
Create callback-based weather fetching simulation.
*/

console.log("\nQ28 Weather Fetching:");
function fetchWeatherData(city, callback) {
  setTimeout(() => {
    const weatherData = {
      city: city,
      temperature: Math.floor(Math.random() * 40),
      condition: ["Sunny", "Cloudy", "Rainy"][Math.floor(Math.random() * 3)],
    };
    callback(weatherData);
  }, 1500);
}

function displayWeather(weatherData, callback) {
  setTimeout(() => {
    console.log(
      `Weather in ${weatherData.city}: ${weatherData.temperature}°C, ${weatherData.condition}`,
    );
    callback();
  }, 500);
}

fetchWeatherData("Delhi", (data) => {
  displayWeather(data, () => {
    console.log("Weather report completed!");
  });
});

/*
Q29
Create callback-based e-commerce checkout flow.
*/

console.log("\nQ29 E-commerce Checkout:");
function addToCart(item, callback) {
  setTimeout(() => {
    console.log(`${item} added to cart`);
    callback(item);
  }, 1000);
}

function checkout29(item, callback) {
  setTimeout(() => {
    console.log(`Checking out: ${item}`);
    callback(item);
  }, 1500);
}

function paymentProcess(item, callback) {
  setTimeout(() => {
    console.log(`Payment processed for ${item}`);
    callback(item);
  }, 1000);
}

function orderConfirmation(item, callback) {
  setTimeout(() => {
    console.log(`Order confirmed for ${item}`);
    callback();
  }, 500);
}

addToCart("Laptop", (item) => {
  checkout29(item, (item) => {
    paymentProcess(item, (item) => {
      orderConfirmation(item, () => {
        console.log("Checkout flow completed!");
      });
    });
  });
});

/*
Q30
Create callback-based movie booking flow.
*/

console.log("\nQ30 Movie Booking:");
function selectMovie(movie, callback) {
  setTimeout(() => {
    console.log(`Selected movie: ${movie}`);
    callback(movie);
  }, 1000);
}

function selectSeats(movie, callback) {
  setTimeout(() => {
    console.log(`Seats selected for ${movie}`);
    callback(movie);
  }, 1500);
}

function confirmBooking(movie, callback) {
  setTimeout(() => {
    console.log(`Booking confirmed for ${movie}`);
    callback(movie);
  }, 1000);
}

function sendTicket(movie, callback) {
  setTimeout(() => {
    console.log(`Ticket sent for ${movie}`);
    callback();
  }, 500);
}

selectMovie("Avengers", (movie) => {
  selectSeats(movie, (movie) => {
    confirmBooking(movie, (movie) => {
      sendTicket(movie, () => {
        console.log("Movie booking completed!");
      });
    });
  });
});

/*
Q31
Create live clock.
*/

console.log("\nQ31 Live Clock (5 updates):");
function liveClock() {
  let count = 0;
  const clockInterval = setInterval(() => {
    const time = new Date().toLocaleTimeString();
    console.log(`Clock: ${time}`);
    count++;
    if (count === 5) {
      clearInterval(clockInterval);
    }
  }, 1000);
}

liveClock();

/*
Q32
Create stopwatch.
Start
Pause
Reset
*/

console.log("\nQ32 Stopwatch:");
function stopwatch() {
  let seconds = 0;
  let isRunning = true;

  const interval = setInterval(() => {
    if (isRunning) {
      console.log(`Time: ${seconds}s`);
      seconds++;
      if (seconds === 5) {
        clearInterval(interval);
      }
    }
  }, 1000);
}

stopwatch();

/*
Q33
Create traffic light simulation.
Red
↓
Yellow
↓
Green
Repeat forever.
*/

console.log("\nQ33 Traffic Light:");
function trafficLight() {
  const lights = ["🔴 Red", "🟡 Yellow", "🟢 Green"];
  let index = 0;
  let count = 0;

  const interval = setInterval(() => {
    console.log(lights[index]);
    index = (index + 1) % lights.length;
    count++;
    if (count === 9) {
      clearInterval(interval);
    }
  }, 1000);
}

trafficLight();

/*
Q34
Create auto slider.
Every 3 sec image changes.
*/

console.log("\nQ34 Auto Slider:");
function autoSlider() {
  const images = ["Image1.jpg", "Image2.jpg", "Image3.jpg"];
  let index = 0;
  let count = 0;

  const interval = setInterval(() => {
    console.log(`Displaying: ${images[index]}`);
    index = (index + 1) % images.length;
    count++;
    if (count === 6) {
      clearInterval(interval);
    }
  }, 3000);
}

autoSlider();

/*
Q35
Create typing effect animation.
Example:
Hello World
One character at a time.
*/

console.log("\nQ35 Typing Effect:");
function typingEffect(text) {
  let index = 0;
  const interval = setInterval(() => {
    process.stdout.write(text[index]);
    index++;
    if (index === text.length) {
      clearInterval(interval);
      console.log();
    }
  }, 100);
}

typingEffect("Hello World");

/*
Q36
Predict Output
console.log("A");
setTimeout(()=>{
console.log("B");
},1000);
setTimeout(()=>{
console.log("C");
},0);
console.log("D");
*/

console.log("\nQ36 Event Loop Prediction:");
console.log("A");
setTimeout(() => {
  console.log("B");
}, 1000);
setTimeout(() => {
  console.log("C");
}, 0);
console.log("D");

/*
Q37
Predict Output
function one(){
console.log("One");
}
setTimeout(one,0);
console.log("Two");
*/

console.log("\nQ37 Event Loop Prediction:");
function one() {
  console.log("One");
}
setTimeout(one, 0);
console.log("Two");

/*
Q38
Predict Output
console.log("Start");
for(let i=0;i<1000000000;i++){}
setTimeout(()=>{
console.log("Timeout");
},0);
console.log("End");
*/

console.log("\nQ38 Event Loop with Blocking:");
console.log("Start");
for (let i = 0; i < 100000000; i++) {}
setTimeout(() => {
  console.log("Timeout");
}, 0);
console.log("End");

/*
Q39
Create Event Loop Visualizer.
Show:
Call Stack
Web API
Callback Queue
Flow on screen using DOM.
*/

console.log("\nQ39 Event Loop Visualization:");
console.log("=== EVENT LOOP VISUALIZATION ===");
console.log("Call Stack: [console.log('Start')]");
console.log("Web API: []");
console.log("Callback Queue: []");
console.log("---");
console.log("Call Stack: [setTimeout]");
console.log("Web API: [setTimeout - 1000ms]");
console.log("Callback Queue: []");
console.log("---");
console.log("Call Stack: [console.log('End')]");
console.log("Web API: [setTimeout - 1000ms]");
console.log("Callback Queue: []");
console.log("---");
console.log("Call Stack: []");
console.log("Web API: []");
console.log("Callback Queue: [callback]");
console.log("---");
console.log("Call Stack: [callback - console.log('Done')]");
console.log("Web API: []");
console.log("Callback Queue: []");

/*
Q40
Build a Mini Async Task Manager.
*/

console.log("\nQ40 Mini Async Task Manager:");

class TaskManager {
  constructor() {
    this.tasks = [];
    this.completed = [];
  }

  addTask(taskName, delay, callback) {
    this.tasks.push({ name: taskName, delay: delay, callback: callback });
  }

  executeTasks(callback) {
    if (this.tasks.length === 0) {
      callback(this.completed);
      return;
    }

    const task = this.tasks.shift();
    console.log(`Executing: ${task.name}`);

    setTimeout(() => {
      task.callback();
      this.completed.push(task.name);
      this.executeTasks(callback);
    }, task.delay);
  }
}

const manager = new TaskManager();
manager.addTask("Task 1", 1000, () => console.log("Task 1 done"));
manager.addTask("Task 2", 1000, () => console.log("Task 2 done"));
manager.addTask("Task 3", 1000, () => console.log("Task 3 done"));

manager.executeTasks((completed) => {
  console.log("All tasks completed:", completed);
});
