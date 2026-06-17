// ============================================
// LEVEL 1: Promise Fundamentals (Q1-Q10)
// ============================================

// Q1: Create a Promise that resolves after 2 seconds with "Hello World"
console.log("Q1: Promise that resolves after 2 seconds");
const q1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 2000);
});

q1.then((data) => {
  console.log("Q1 Result:", data);
});

// Q2: Create a Promise that rejects after 3 seconds with "Server Down"
console.log("Q2: Promise that rejects after 3 seconds");
const q2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Server Down");
  }, 3000);
});

q2.catch((error) => {
  console.log("Q2 Error:", error);
});

// Q3: Create a Promise that randomly resolves or rejects
console.log("Q3: Promise that randomly resolves or rejects");
const q3 = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve("Success! Random number: " + random);
  } else {
    reject("Failed! Random number: " + random);
  }
});

q3.then((data) => {
  console.log("Q3 Success:", data);
}).catch((error) => {
  console.log("Q3 Failed:", error);
});

// Q4: Create a Promise that checks age (age >= 18 resolve, otherwise reject)
console.log("Q4: Promise that validates age");
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You are eligible. Age: " + age);
    } else {
      reject("You are not eligible. Age: " + age);
    }
  });
}

checkAge(20)
  .then((data) => {
    console.log("Q4 Result:", data);
  })
  .catch((error) => {
    console.log("Q4 Error:", error);
  });

// Q5: Create a Promise that validates password length
console.log("Q5: Promise that validates password");
function validatePassword(password) {
  return new Promise((resolve, reject) => {
    if (password.length >= 8) {
      resolve("Password is valid. Length: " + password.length);
    } else {
      reject("Password too short. Length: " + password.length + " (minimum 8)");
    }
  });
}

validatePassword("SecurePass123")
  .then((data) => {
    console.log("Q5 Result:", data);
  })
  .catch((error) => {
    console.log("Q5 Error:", error);
  });

// Q6: Create a Promise that validates email
console.log("Q6: Promise that validates email");
function validateEmail(email) {
  return new Promise((resolve, reject) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      resolve("Email is valid: " + email);
    } else {
      reject("Email is invalid: " + email);
    }
  });
}

validateEmail("user@example.com")
  .then((data) => {
    console.log("Q6 Result:", data);
  })
  .catch((error) => {
    console.log("Q6 Error:", error);
  });

// Q7: Create a Promise that simulates bank withdrawal
console.log("Q7: Promise that simulates bank withdrawal");
function bankWithdraw(amount, balance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount <= balance) {
        const newBalance = balance - amount;
        resolve({
          status: "Withdrawal successful",
          withdrawAmount: amount,
          remainingBalance: newBalance,
        });
      } else {
        reject(
          "Insufficient funds. Balance: " + balance + ", Requested: " + amount,
        );
      }
    }, 1000);
  });
}

bankWithdraw(5000, 10000)
  .then((data) => {
    console.log("Q7 Result:", data);
  })
  .catch((error) => {
    console.log("Q7 Error:", error);
  });

// Q8: Create a Promise that simulates ATM transaction
console.log("Q8: Promise that simulates ATM transaction");
function atmTransaction(action, amount, balance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (action === "withdraw") {
        if (amount <= balance) {
          resolve({
            action: "withdraw",
            amount: amount,
            newBalance: balance - amount,
            timestamp: new Date().toLocaleTimeString(),
          });
        } else {
          reject("ATM Error: Insufficient balance");
        }
      } else if (action === "deposit") {
        resolve({
          action: "deposit",
          amount: amount,
          newBalance: balance + amount,
          timestamp: new Date().toLocaleTimeString(),
        });
      } else {
        reject("ATM Error: Invalid action");
      }
    }, 1500);
  });
}

atmTransaction("withdraw", 3000, 8000)
  .then((data) => {
    console.log("Q8 Result:", data);
  })
  .catch((error) => {
    console.log("Q8 Error:", error);
  });

// Q9: Create a Promise that resolves with user object
console.log("Q9: Promise that resolves with user object");
function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "John Doe",
        email: "john@example.com",
        role: "user",
        createdAt: new Date(),
      });
    }, 500);
  });
}

getUser(1).then((userData) => {
  console.log("Q9 Result:", userData);
});

// Q10: Create a Promise that rejects with custom error object
console.log("Q10: Promise that rejects with custom error object");
function customErrorPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const customError = {
        status: 500,
        message: "Internal Server Error",
        code: "ERR_SERVER",
        timestamp: new Date(),
        details: "Database connection failed",
      };
      reject(customError);
    }, 800);
  });
}

customErrorPromise().catch((error) => {
  console.log("Q10 Error:", error);
});

console.log("\n============================================");
console.log("LEVEL 2: Then Chaining (Q11-Q20)");
console.log("============================================\n");

// Q11: Promise chain: 10 → 20 → 40 → 80
console.log("Q11: Chain - 10 → 20 → 40 → 80");
Promise.resolve(10)
  .then((num) => {
    console.log("Q11 Step 1:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Q11 Step 2:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Q11 Step 3:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Q11 Final Result:", num);
  });

// Q12: Promise chain: Ram → RAM → RAM MOHAN → RAM MOHAN DIXIT
console.log("Q12: Name processing chain");
Promise.resolve("Ram")
  .then((name) => {
    console.log("Q12 Step 1:", name);
    return name.toUpperCase();
  })
  .then((name) => {
    console.log("Q12 Step 2:", name);
    return name + " MOHAN";
  })
  .then((name) => {
    console.log("Q12 Step 3:", name);
    return name + " DIXIT";
  })
  .then((name) => {
    console.log("Q12 Final Result:", name);
  });

// Q13: Product price processing chain
console.log(
  "Q13: Product price chain - Add GST → Apply Discount → Final Price",
);
Promise.resolve(1000)
  .then((price) => {
    console.log("Q13 Original Price:", price);
    const gst = price * 0.18;
    return price + gst;
  })
  .then((priceWithGST) => {
    console.log("Q13 Price with GST (18%):", priceWithGST);
    const discount = priceWithGST * 0.1;
    return priceWithGST - discount;
  })
  .then((finalPrice) => {
    console.log("Q13 Final Price (after 10% discount):", finalPrice);
  });

// Q14: Login → Get User → Get Orders → Get Payment
console.log(
  "Q14: Multi-step chain - Login → Get User → Get Orders → Get Payment",
);
function login(credentials) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 123, token: "abc123" });
    }, 500);
  });
}

function getUser(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 123, name: "John", email: "john@example.com" });
    }, 500);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { orderId: 1, amount: 500 },
        { orderId: 2, amount: 1200 },
      ]);
    }, 500);
  });
}

function getPayment(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId: orderId, status: "completed", amount: 500 });
    }, 500);
  });
}

login({ email: "john@example.com", password: "pass123" })
  .then((loginData) => {
    console.log("Q14 Step 1 - Login:", loginData);
    return getUser(loginData.token);
  })
  .then((userData) => {
    console.log("Q14 Step 2 - User:", userData);
    return getOrders(userData.userId);
  })
  .then((orders) => {
    console.log("Q14 Step 3 - Orders:", orders);
    return getPayment(orders[0].orderId);
  })
  .then((payment) => {
    console.log("Q14 Step 4 - Payment:", payment);
  });

// Q15: Movie booking flow
console.log("Q15: Movie booking flow");
function selectMovie() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ movieId: 1, title: "Inception", price: 250 });
    }, 300);
  });
}

function selectSeats() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ seats: ["A1", "A2"], count: 2 });
    }, 300);
  });
}

function processPayment(amount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, transactionId: "TXN123", amount: amount });
    }, 300);
  });
}

function generateTicket(bookingData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ticketId: "TICK123", confirmationCode: "CONF456" });
    }, 300);
  });
}

selectMovie()
  .then((movie) => {
    console.log("Q15 Step 1 - Movie Selected:", movie.title);
    return selectSeats().then((seats) => {
      return { movie, seats };
    });
  })
  .then((data) => {
    console.log("Q15 Step 2 - Seats Selected:", data.seats.seats);
    return processPayment(data.movie.price * data.seats.seats.count).then(
      (payment) => {
        return { ...data, payment };
      },
    );
  })
  .then((data) => {
    console.log("Q15 Step 3 - Payment Processed");
    return generateTicket(data);
  })
  .then((ticket) => {
    console.log("Q15 Step 4 - Ticket Generated:", ticket.ticketId);
  });

// Q16: Food ordering flow
console.log("Q16: Food ordering flow");
function browseMenu() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Biryani", price: 300 },
        { id: 2, name: "Butter Chicken", price: 250 },
      ]);
    }, 300);
  });
}

function placeOrder(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId: "ORD123", items: items, total: 550 });
    }, 300);
  });
}

function estimateDelivery(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ estimatedTime: "30 mins", deliveryFee: 50 });
    }, 300);
  });
}

browseMenu()
  .then((menu) => {
    console.log("Q16 Step 1 - Menu browsed:", menu.length, "items");
    return placeOrder([menu[0], menu[1]]);
  })
  .then((order) => {
    console.log("Q16 Step 2 - Order placed:", order.orderId);
    return estimateDelivery(order.orderId);
  })
  .then((delivery) => {
    console.log("Q16 Step 3 - Delivery time:", delivery.estimatedTime);
  });

// Q17: College admission flow
console.log("Q17: College admission flow");
function submitApplication() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ applicationId: "APP123", status: "submitted" });
    }, 300);
  });
}

function passEntrance() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const score = Math.random() * 100;
      if (score > 50) {
        resolve({ score: score, status: "passed" });
      } else {
        reject({ score: score, status: "failed" });
      }
    }, 300);
  });
}

function completeMeritProcess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ rank: 150, cutoff: 200 });
    }, 300);
  });
}

submitApplication()
  .then((app) => {
    console.log("Q17 Step 1 - Application submitted:", app.applicationId);
    return passEntrance();
  })
  .then((exam) => {
    console.log(
      "Q17 Step 2 - Entrance exam passed with score:",
      exam.score.toFixed(2),
    );
    return completeMeritProcess();
  })
  .then((merit) => {
    console.log(
      "Q17 Step 3 - Merit list: Rank",
      merit.rank,
      "< Cutoff",
      merit.cutoff,
      "- Congratulations!",
    );
  })
  .catch((error) => {
    console.log(
      "Q17 Error - Entrance exam failed with score:",
      error.score.toFixed(2),
    );
  });

// Q18: Train ticket booking flow
console.log("Q18: Train ticket booking flow");
function searchTrains(from, to, date) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { trainId: "T001", name: "Rajdhani", time: "10:00", price: 1500 },
        { trainId: "T002", name: "Shatabdi", time: "14:30", price: 2000 },
      ]);
    }, 300);
  });
}

function bookSeat(trainId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ seatNumber: "2A", status: "booked" });
    }, 300);
  });
}

function confirmBooking(trainId, seat) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ pnr: "PNR123456", status: "confirmed" });
    }, 300);
  });
}

searchTrains("Mumbai", "Delhi", "2024-01-15")
  .then((trains) => {
    console.log("Q18 Step 1 - Trains found:", trains.length);
    return bookSeat(trains[0].trainId).then((seat) => {
      return { train: trains[0], seat };
    });
  })
  .then((data) => {
    console.log("Q18 Step 2 - Seat booked:", data.seat.seatNumber);
    return confirmBooking(data.train.trainId, data.seat.seatNumber);
  })
  .then((booking) => {
    console.log("Q18 Step 3 - Booking confirmed. PNR:", booking.pnr);
  });

// Q19: Chain where each step waits 1 second
console.log("Q19: Chain with 1 second delays between steps");
Promise.resolve("Start")
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Q19 Step 1:", data);
        resolve("Step 1 Complete");
      }, 1000);
    });
  })
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Q19 Step 2:", data);
        resolve("Step 2 Complete");
      }, 1000);
    });
  })
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Q19 Step 3:", data);
        resolve("Step 3 Complete");
      }, 1000);
    });
  })
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Q19 Step 4:", data);
        resolve("All steps done!");
      }, 1000);
    });
  })
  .then((result) => {
    console.log("Q19 Final:", result);
  });

// Q20: Chain of 10 .then() calls
console.log("Q20: Chain of 10 .then() calls");
Promise.resolve(1)
  .then((num) => {
    console.log("Q20 Then 1:", num);
    return num + 1;
  })
  .then((num) => {
    console.log("Q20 Then 2:", num);
    return num + 1;
  })
  .then((num) => {
    console.log("Q20 Then 3:", num);
    return num + 1;
  })
  .then((num) => {
    console.log("Q20 Then 4:", num);
    return num + 1;
  })
  .then((num) => {
    console.log("Q20 Then 5:", num);
    return num + 1;
  })
  .then((num) => {
    console.log("Q20 Then 6:", num);
    return num + 1;
  })
  .then((num) => {
    console.log("Q20 Then 7:", num);
    return num + 1;
  })
  .then((num) => {
    console.log("Q20 Then 8:", num);
    return num + 1;
  })
  .then((num) => {
    console.log("Q20 Then 9:", num);
    return num + 1;
  })
  .then((num) => {
    console.log("Q20 Then 10 (Final):", num);
    return num + 1;
  });

console.log("\n============================================");
console.log("LEVEL 3: Catch Propagation (Q21-Q25)");
console.log("============================================\n");

// Q21: Throw error inside first .then() and handle in catch
console.log("Q21: Error thrown in first .then(), caught in .catch()");
Promise.resolve("Start")
  .then((data) => {
    console.log("Q21 Step 1:", data);
    throw new Error("Error in Step 1");
  })
  .then((data) => {
    console.log("Q21 Step 2:", data); // This won't execute
  })
  .then((data) => {
    console.log("Q21 Step 3:", data); // This won't execute
  })
  .catch((error) => {
    console.log("Q21 Caught Error:", error.message);
  });

// Q22: Throw error inside third .then(), observe skipped thens
console.log("Q22: Error thrown in third .then(), observe skipped steps");
Promise.resolve(1)
  .then((num) => {
    console.log("Q22 Step 1: Executing");
    return num + 1;
  })
  .then((num) => {
    console.log("Q22 Step 2: Executing");
    return num + 1;
  })
  .then((num) => {
    console.log("Q22 Step 3: Throwing error");
    throw new Error("Error in Step 3");
  })
  .then((num) => {
    console.log("Q22 Step 4: Skipped"); // Won't execute
  })
  .catch((error) => {
    console.log("Q22 Caught Error:", error.message);
  });

// Q23: Chain with Step1 → Step2 → Error → Catch
console.log("Q23: Intentional error chain");
Promise.resolve("Data")
  .then((data) => {
    console.log("Q23 Step 1:", data);
    return data;
  })
  .then((data) => {
    console.log("Q23 Step 2:", data);
    return data;
  })
  .then((data) => {
    console.log("Q23 Step 3: Throwing error");
    throw new Error("Intentional Error");
  })
  .catch((error) => {
    console.log("Q23 Caught in catch:", error.message);
  });

// Q24: Recover from error inside catch and continue chain
console.log("Q24: Error recovery in catch block");
Promise.resolve(10)
  .then((num) => {
    console.log("Q24 Step 1:", num);
    throw new Error("Error occurred");
  })
  .catch((error) => {
    console.log("Q24 Caught error:", error.message);
    console.log("Q24 Recovering and returning 100");
    return 100; // Recover and continue
  })
  .then((num) => {
    console.log("Q24 Resumed after recovery:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Q24 Final result:", num);
  });

// Q25: Multiple catches and observe which one executes
console.log("Q25: Multiple catch blocks");
Promise.resolve(5)
  .then((num) => {
    console.log("Q25 Step 1:", num);
    if (num < 10) {
      throw new Error("Number too small");
    }
    return num;
  })
  .catch((error) => {
    console.log("Q25 First catch:", error.message);
    throw new Error("Re-throwing from first catch");
  })
  .catch((error) => {
    console.log("Q25 Second catch:", error.message);
    return "Recovered";
  })
  .catch((error) => {
    console.log("Q25 Third catch:", error.message); // Won't execute
  })
  .then((result) => {
    console.log("Q25 Final result:", result);
  });

console.log("\n============================================");
console.log("LEVEL 4: Callback → Promise Conversion (Q26-Q30)");
console.log("============================================\n");

// Q26: Convert callback based greeting function into Promise
console.log("Q26: Greeting function - Callback to Promise");

// Original callback version
function greetingCallback(name, callback) {
  setTimeout(() => {
    callback("Hello, " + name + "!");
  }, 500);
}

// Promise version
function greeting(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, " + name + "!");
    }, 500);
  });
}

greeting("John").then((message) => {
  console.log("Q26 Result:", message);
});

// Q27: Convert callback based calculator into Promise
console.log("Q27: Calculator function - Callback to Promise");

function addCallback(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 300);
}

function add(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 300);
  });
}

add(5, 3).then((result) => {
  console.log("Q27 Result: 5 + 3 =", result);
});

// Q28: Convert callback based login into Promise
console.log("Q28: Login function - Callback to Promise");

function loginCallback(email, password, callback, errorCallback) {
  setTimeout(() => {
    if (email === "user@example.com" && password === "pass123") {
      callback({ userId: 1, email: email });
    } else {
      errorCallback("Invalid credentials");
    }
  }, 500);
}

function loginPromise(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "pass123") {
        resolve({ userId: 1, email: email });
      } else {
        reject("Invalid credentials");
      }
    }, 500);
  });
}

loginPromise("user@example.com", "pass123")
  .then((user) => {
    console.log("Q28 Login successful:", user.email);
  })
  .catch((error) => {
    console.log("Q28 Login error:", error);
  });

// Q29: Convert callback based file download simulation into Promise
console.log("Q29: File download - Callback to Promise");

function downloadFileCallback(fileName, callback, errorCallback) {
  setTimeout(() => {
    if (fileName) {
      callback({ fileName: fileName, size: "2.5MB", status: "downloaded" });
    } else {
      errorCallback("File not found");
    }
  }, 800);
}

function downloadFile(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fileName) {
        resolve({ fileName: fileName, size: "2.5MB", status: "downloaded" });
      } else {
        reject("File not found");
      }
    }, 800);
  });
}

downloadFile("document.pdf")
  .then((file) => {
    console.log("Q29 Downloaded:", file.fileName, "-", file.size);
  })
  .catch((error) => {
    console.log("Q29 Error:", error);
  });

// Q30: Convert callback based weather API simulation into Promise
console.log("Q30: Weather API - Callback to Promise");

function getWeatherCallback(city, callback, errorCallback) {
  setTimeout(() => {
    const weatherData = {
      Mumbai: { temp: 35, condition: "Sunny" },
      Delhi: { temp: 28, condition: "Cloudy" },
      Bangalore: { temp: 25, condition: "Rainy" },
    };
    if (weatherData[city]) {
      callback(weatherData[city]);
    } else {
      errorCallback("City not found");
    }
  }, 600);
}

function getWeather(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const weatherData = {
        Mumbai: { temp: 35, condition: "Sunny" },
        Delhi: { temp: 28, condition: "Cloudy" },
        Bangalore: { temp: 25, condition: "Rainy" },
      };
      if (weatherData[city]) {
        resolve(weatherData[city]);
      } else {
        reject("City not found");
      }
    }, 600);
  });
}

getWeather("Mumbai")
  .then((weather) => {
    console.log(
      "Q30 Weather in Mumbai:",
      weather.temp + "°C,",
      weather.condition,
    );
  })
  .catch((error) => {
    console.log("Q30 Error:", error);
  });

console.log("\n============================================");
console.log("LEVEL 5: Promise.all() (Q31-Q35)");
console.log("============================================\n");

// Q31: Fetch User, Orders, Products using Promise.all
console.log("Q31: Promise.all - Fetch User, Orders, Products");

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John", email: "john@example.com" });
    }, 500);
  });
}

function fetchOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { orderId: 1, amount: 500 },
        { orderId: 2, amount: 1200 },
      ]);
    }, 700);
  });
}

function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { productId: 1, name: "Laptop", price: 50000 },
        { productId: 2, name: "Phone", price: 30000 },
      ]);
    }, 600);
  });
}

Promise.all([fetchUser(), fetchOrders(), fetchProducts()]).then(
  ([user, orders, products]) => {
    console.log("Q31 Results:");
    console.log("  User:", user.name);
    console.log("  Orders count:", orders.length);
    console.log("  Products count:", products.length);
  },
);

// Q32: Create 5 promises with different delays and run using Promise.all
console.log("Q32: Promise.all - 5 promises with different delays");

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 - 1 sec"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 - 2 sec"), 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3 - 0.5 sec"), 500);
});

const promise4 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 4 - 1.5 sec"), 1500);
});

const promise5 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 5 - 0.8 sec"), 800);
});

Promise.all([promise1, promise2, promise3, promise4, promise5]).then(
  (results) => {
    console.log("Q32 All promises resolved in order of completion time:");
    results.forEach((result, index) => {
      console.log(`  ${index + 1}. ${result}`);
    });
  },
);

// Q33: One Promise rejects - observe Promise.all behavior
console.log("Q33: Promise.all - One promise rejects");

const successPromise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Success 1"), 300);
});

const failurePromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("This one failed!"), 500);
});

const successPromise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Success 2"), 400);
});

Promise.all([successPromise1, failurePromise, successPromise2])
  .then((results) => {
    console.log("Q33 All resolved:", results);
  })
  .catch((error) => {
    console.log("Q33 Promise.all rejected because:", error);
  });

// Q34: Dashboard loader using Promise.all
console.log("Q34: Dashboard loader using Promise.all");

function loadUserDashboard() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ widgets: 3 }), 400);
  });
}

function loadAnalytics() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ charts: 5 }), 600);
  });
}

function loadNotifications() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ unread: 12 }), 300);
  });
}

function loadSettings() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ preferences: { theme: "dark" } }), 500);
  });
}

Promise.all([
  loadUserDashboard(),
  loadAnalytics(),
  loadNotifications(),
  loadSettings(),
]).then(([dashboard, analytics, notifications, settings]) => {
  console.log("Q34 Dashboard fully loaded:");
  console.log("  Dashboard widgets:", dashboard.widgets);
  console.log("  Analytics charts:", analytics.charts);
  console.log("  Notifications:", notifications.unread);
  console.log("  Theme:", settings.preferences.theme);
});

// Q35: Parallel file downloader using Promise.all
console.log("Q35: Parallel file downloader using Promise.all");

function downloadFile1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ file: "document1.pdf", size: "2MB" }), 800);
  });
}

function downloadFile2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ file: "document2.docx", size: "1.5MB" }), 1200);
  });
}

function downloadFile3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ file: "image.png", size: "3MB" }), 600);
  });
}

function downloadFile4() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ file: "video.mp4", size: "50MB" }), 1500);
  });
}

const startTime = Date.now();

Promise.all([
  downloadFile1(),
  downloadFile2(),
  downloadFile3(),
  downloadFile4(),
]).then((files) => {
  const elapsed = Date.now() - startTime;
  console.log("Q35 All files downloaded in parallel:");
  files.forEach((file) => {
    console.log(`  ${file.file} - ${file.size}`);
  });
  console.log(`  Total time: ${elapsed}ms (fastest individual took ~1500ms)`);
});

console.log("\n============================================");
console.log("LEVEL 6: Promise.allSettled() (Q36-Q38)");
console.log("============================================\n");

// Q36: 3 Success, 2 Fail - Return all results using Promise.allSettled
console.log("Q36: Promise.allSettled - Mixed success and failures");

const settledPromises = [
  Promise.resolve("Success 1"),
  Promise.reject("Failure 1"),
  Promise.resolve("Success 2"),
  Promise.resolve("Success 3"),
  Promise.reject("Failure 2"),
];

Promise.allSettled(settledPromises).then((results) => {
  console.log("Q36 All results (settled):");
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`  ${index + 1}. ✓ ${result.value}`);
    } else {
      console.log(`  ${index + 1}. ✗ ${result.reason}`);
    }
  });
});

// Q37: Admin dashboard loader - Some APIs fail but show remaining data
console.log("Q37: Admin dashboard with partial failures");

function loadUsersAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ users: 150 }), 300);
  });
}

function loadReportsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Reports API is down"), 400);
  });
}

function loadAnalyticsAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ pageViews: 5000 }), 350);
  });
}

function loadSettingsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Settings API timeout"), 500);
  });
}

Promise.allSettled([
  loadUsersAPI(),
  loadReportsAPI(),
  loadAnalyticsAPI(),
  loadSettingsAPI(),
]).then((results) => {
  console.log("Q37 Admin Dashboard Status:");
  if (results[0].status === "fulfilled") {
    console.log("  ✓ Users loaded:", results[0].value.users);
  } else {
    console.log("  ✗ Users failed:", results[0].reason);
  }
  if (results[1].status === "fulfilled") {
    console.log("  ✓ Reports loaded:", results[1].value);
  } else {
    console.log("  ✗ Reports failed:", results[1].reason);
  }
  if (results[2].status === "fulfilled") {
    console.log("  ✓ Analytics loaded:", results[2].value.pageViews);
  } else {
    console.log("  ✗ Analytics failed:", results[2].reason);
  }
  if (results[3].status === "fulfilled") {
    console.log("  ✓ Settings loaded:", results[3].value);
  } else {
    console.log("  ✗ Settings failed:", results[3].reason);
  }
});

// Q38: Batch upload simulator using Promise.allSettled
console.log("Q38: Batch upload with Promise.allSettled");

function uploadFile(fileName) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 1000;
    const shouldFail = Math.random() > 0.7; // 30% failure rate

    setTimeout(() => {
      if (shouldFail) {
        reject({ fileName: fileName, error: "Upload failed" });
      } else {
        resolve({
          fileName: fileName,
          size: Math.random() * 10 + "MB",
          status: "uploaded",
        });
      }
    }, delay);
  });
}

const filesToUpload = [
  "document1.pdf",
  "document2.pdf",
  "document3.pdf",
  "document4.pdf",
  "document5.pdf",
];

Promise.allSettled(filesToUpload.map((file) => uploadFile(file))).then(
  (results) => {
    console.log("Q38 Batch upload results:");
    let successCount = 0;
    let failureCount = 0;

    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(`  ✓ ${result.value.fileName} - ${result.value.size}`);
        successCount++;
      } else {
        console.log(`  ✗ ${result.reason.fileName} - ${result.reason.error}`);
        failureCount++;
      }
    });

    console.log(`  Summary: ${successCount} uploaded, ${failureCount} failed`);
  },
);

console.log("\n============================================");
console.log("LEVEL 7: Promise.race() & Promise.any() (Q39)");
console.log("============================================\n");

// Q39-A: Server 1 (5s) vs Server 2 (2s) vs Server 3 (1s) - Return fastest using Promise.race
console.log("Q39-A: Promise.race - Find fastest server");

function server1Response() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Server 1 response - 5 sec"), 5000);
  });
}

function server2Response() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Server 2 response - 2 sec"), 2000);
  });
}

function server3Response() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Server 3 response - 1 sec"), 1000);
  });
}

Promise.race([server1Response(), server2Response(), server3Response()]).then(
  (result) => {
    console.log("Q39-A Fastest response:", result);
  },
);

// Q39-B: Server1 (Reject), Server2 (Reject), Server3 (Resolve) - Return first success using Promise.any
console.log("Q39-B: Promise.any - Find first successful server");

function failServer1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Server 1 failed"), 1000);
  });
}

function failServer2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Server 2 failed"), 500);
  });
}

function successServer3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Server 3 success!"), 800);
  });
}

Promise.any([failServer1(), failServer2(), successServer3()])
  .then((result) => {
    console.log("Q39-B First successful response:", result);
  })
  .catch((error) => {
    console.log("Q39-B All servers failed");
  });

console.log("\n============================================");
console.log("LEVEL 8: FINAL BOSS (Q40) - Food Delivery System");
console.log("============================================\n");

console.log("Q40: Complete Promise-Based Food Delivery System\n");

// Food Delivery System with all requirements
function userLogin(credentials) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email && credentials.password) {
        if (Math.random() > 0.1) {
          // 10% chance of failure
          resolve({ userId: 1, token: "token123", email: credentials.email });
        } else {
          reject(new Error("Login failed: Invalid credentials"));
        }
      } else {
        reject(new Error("Login failed: Missing credentials"));
      }
    }, 500);
  });
}

function fetchUserProfile(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // 10% chance of failure
        resolve({
          userId: 1,
          name: "John Doe",
          email: "john@example.com",
          address: "123 Main St",
          phone: "9876543210",
        });
      } else {
        reject(new Error("Failed to fetch user profile"));
      }
    }, 600);
  });
}

function fetchRestaurants(location) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // 10% chance of failure
        resolve([
          { restaurantId: 1, name: "Pizza Palace", rating: 4.5 },
          { restaurantId: 2, name: "Burger Barn", rating: 4.2 },
          { restaurantId: 3, name: "Biryani House", rating: 4.8 },
        ]);
      } else {
        reject(new Error("Failed to fetch restaurants"));
      }
    }, 700);
  });
}

function fetchMenu(restaurantId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const menus = {
        1: [
          { itemId: 1, name: "Margherita Pizza", price: 300 },
          { itemId: 2, name: "Pepperoni Pizza", price: 350 },
        ],
        2: [
          { itemId: 3, name: "Classic Burger", price: 200 },
          { itemId: 4, name: "Cheese Burger", price: 250 },
        ],
        3: [
          { itemId: 5, name: "Hyderabadi Biryani", price: 400 },
          { itemId: 6, name: "Chicken Biryani", price: 380 },
        ],
      };

      if (Math.random() > 0.1) {
        // 10% chance of failure
        resolve(menus[restaurantId] || []);
      } else {
        reject(new Error("Failed to fetch menu"));
      }
    }, 500);
  });
}

function placeOrder(restaurantId, items, userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // 10% chance of failure
        // Filter out undefined items and calculate total
        const validItems = items
          ? items.filter((item) => item && item.price)
          : [];
        const total = validItems.reduce((sum, item) => sum + item.price, 0);
        resolve({
          orderId: "ORD" + Math.random().toString(36).substr(2, 9),
          restaurantId: restaurantId,
          items: items,
          total: total,
          status: "placed",
          timestamp: new Date().toLocaleTimeString(),
        });
      } else {
        reject(new Error("Failed to place order"));
      }
    }, 600);
  });
}

function processPayment(orderId, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.15) {
        // 15% chance of failure
        resolve({
          paymentId: "PAY" + Math.random().toString(36).substr(2, 9),
          orderId: orderId,
          amount: amount,
          status: "completed",
          method: "Card",
          timestamp: new Date().toLocaleTimeString(),
        });
      } else {
        reject(new Error("Payment processing failed"));
      }
    }, 800);
  });
}

function generateInvoice(orderId, paymentData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // 10% chance of failure
        resolve({
          invoiceId: "INV" + Math.random().toString(36).substr(2, 9),
          orderId: orderId,
          paymentId: paymentData.paymentId,
          amount: paymentData.amount,
          generatedAt: new Date().toLocaleTimeString(),
        });
      } else {
        reject(new Error("Invoice generation failed"));
      }
    }, 400);
  });
}

function sendConfirmationEmail(userEmail, orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // 10% chance of failure
        resolve({
          to: userEmail,
          orderId: orderId,
          status: "email_sent",
          timestamp: new Date().toLocaleTimeString(),
        });
      } else {
        reject(new Error("Failed to send confirmation email"));
      }
    }, 300);
  });
}

function trackOrder(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orderId: orderId,
        status: "in_progress",
        estimatedDelivery: "30 minutes",
        currentLocation: "Restaurant",
      });
    }, 500);
  });
}

function deliverOrder(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orderId: orderId,
        status: "delivered",
        deliveredAt: new Date().toLocaleTimeString(),
        rating: null,
      });
    }, 1000);
  });
}

// Main flow with all error handling
console.log("Starting Food Delivery System...\n");

userLogin({ email: "john@example.com", password: "password123" })
  .then((loginData) => {
    console.log("✓ Step 1 - Login successful");
    console.log(`  User: ${loginData.email}`);
    return fetchUserProfile(loginData.token).then((userProfile) => {
      console.log("✓ Step 2 - User profile fetched");
      console.log(
        `  Name: ${userProfile.name}, Address: ${userProfile.address}`,
      );
      return { loginData, userProfile };
    });
  })
  .then(({ loginData, userProfile }) => {
    return fetchRestaurants(userProfile.address).then((restaurants) => {
      console.log("✓ Step 3 - Restaurants fetched");
      console.log(`  Found ${restaurants.length} restaurants`);
      return { loginData, userProfile, restaurants };
    });
  })
  .then(({ loginData, userProfile, restaurants }) => {
    const selectedRestaurant = restaurants[2]; // Select 3rd restaurant
    console.log(`✓ Step 4 - Selected: ${selectedRestaurant.name}`);

    return fetchMenu(selectedRestaurant.restaurantId).then((menu) => {
      console.log(`✓ Step 5 - Menu fetched (${menu.length} items)`);
      return { loginData, userProfile, restaurants, selectedRestaurant, menu };
    });
  })
  .then(({ loginData, userProfile, restaurants, selectedRestaurant, menu }) => {
    // Filter and select valid items from menu
    const validMenu = menu && menu.length > 0 ? menu : [];
    const selectedItems = validMenu.slice(0, 2); // Select up to 2 items
    console.log(`✓ Step 6 - Items selected (${selectedItems.length} items)`);

    return placeOrder(
      selectedRestaurant.restaurantId,
      selectedItems,
      loginData.userId,
    ).then((order) => {
      console.log(`✓ Step 7 - Order placed: ${order.orderId}`);
      console.log(`  Total: ₹${order.total}`);
      return { loginData, userProfile, order };
    });
  })
  .then(({ loginData, userProfile, order }) => {
    return processPayment(order.orderId, order.total).then((payment) => {
      console.log(`✓ Step 8 - Payment processed: ${payment.paymentId}`);
      return { loginData, userProfile, order, payment };
    });
  })
  .then(({ loginData, userProfile, order, payment }) => {
    return generateInvoice(order.orderId, payment).then((invoice) => {
      console.log(`✓ Step 9 - Invoice generated: ${invoice.invoiceId}`);
      return { loginData, userProfile, order, payment, invoice };
    });
  })
  .then(({ loginData, userProfile, order, payment, invoice }) => {
    return sendConfirmationEmail(userProfile.email, order.orderId).then(
      (email) => {
        console.log(`✓ Step 10 - Confirmation email sent to ${email.to}`);
        return { loginData, userProfile, order, payment, invoice };
      },
    );
  })
  .then(({ loginData, userProfile, order, payment, invoice }) => {
    return trackOrder(order.orderId).then((tracking) => {
      console.log(`✓ Step 11 - Order tracking started`);
      console.log(
        `  Status: ${tracking.status}, ETA: ${tracking.estimatedDelivery}`,
      );
      return { loginData, userProfile, order, payment, invoice, tracking };
    });
  })
  .then(({ loginData, userProfile, order, payment, invoice, tracking }) => {
    return deliverOrder(order.orderId).then((delivery) => {
      console.log(`✓ Step 12 - Order delivered at ${delivery.deliveredAt}`);
      console.log("\n🎉 Food Delivery System Complete!");
      return { success: true, order };
    });
  })
  .catch((error) => {
    console.log(`\n❌ Error in Food Delivery System: ${error.message}`);
    console.log("Transaction failed - Please try again");
  })
  .finally(() => {
    console.log("\n--- End of Q40 ---\n");
  });

console.log("\n============================================");
console.log("BONUS: Interview Output Round (IQ1-IQ10)");
console.log("============================================\n");

// IQ1
console.log("IQ1: Predict output:");
console.log("Code: Promise.resolve('A').then(console.log); console.log('B');");
console.log("Expected Output: B, A");
console.log(
  "Explanation: console.log('B') executes immediately (synchronous), then Promise.then() callback executes (microtask)",
);
console.log("Actual Output:");
Promise.resolve("A").then(console.log);
console.log("B");

setTimeout(() => {
  // IQ2
  console.log("\nIQ2: Predict output:");
  console.log(
    "Code: console.log('A'); Promise.resolve().then(()=>{console.log('B');}); console.log('C');",
  );
  console.log("Expected Output: A, C, B");
  console.log(
    "Explanation: Synchronous code runs first (A, C), then microtasks (B)",
  );
  console.log("Actual Output:");
  console.log("A");
  Promise.resolve().then(() => {
    console.log("B");
  });
  console.log("C");

  setTimeout(() => {
    // IQ3
    console.log("\nIQ3: Predict output:");
    console.log(
      "Code: Promise.resolve(10).then(num=>num*2).then(num=>num+5).then(console.log);",
    );
    console.log("Expected Output: 25");
    console.log("Explanation: 10 * 2 = 20, 20 + 5 = 25");
    console.log("Actual Output:");
    Promise.resolve(10)
      .then((num) => num * 2)
      .then((num) => num + 5)
      .then(console.log);

    setTimeout(() => {
      // IQ4
      console.log("\nIQ4: Predict output:");
      console.log("Code: Promise.reject('Error').catch(console.log);");
      console.log("Expected Output: Error");
      console.log("Actual Output:");
      Promise.reject("Error").catch(console.log);

      setTimeout(() => {
        // IQ5
        console.log("\nIQ5: Predict output:");
        console.log(
          "Code: Promise.resolve().then(()=>{throw new Error('Boom');}).catch(err=>console.log(err.message));",
        );
        console.log("Expected Output: Boom");
        console.log("Actual Output:");
        Promise.resolve()
          .then(() => {
            throw new Error("Boom");
          })
          .catch((err) => console.log(err.message));

        setTimeout(() => {
          // IQ6
          console.log("\nIQ6: Predict output:");
          console.log(
            "Code: Promise.resolve().then(()=>{return Promise.resolve(100);}).then(console.log);",
          );
          console.log("Expected Output: 100");
          console.log("Actual Output:");
          Promise.resolve()
            .then(() => {
              return Promise.resolve(100);
            })
            .then(console.log);

          setTimeout(() => {
            // IQ7
            console.log("\nIQ7: Predict output:");
            console.log(
              "Code: Promise.resolve().then(()=>{console.log('A');}).then(()=>{console.log('B');});",
            );
            console.log("Expected Output: A, B");
            console.log("Actual Output:");
            Promise.resolve()
              .then(() => {
                console.log("A");
              })
              .then(() => {
                console.log("B");
              });

            setTimeout(() => {
              // IQ8
              console.log("\nIQ8: Predict output:");
              console.log(
                "Code: Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)]).then(console.log);",
              );
              console.log("Expected Output: [ 1, 2, 3 ]");
              console.log("Actual Output:");
              Promise.all([
                Promise.resolve(1),
                Promise.resolve(2),
                Promise.resolve(3),
              ]).then(console.log);

              setTimeout(() => {
                // IQ9
                console.log("\nIQ9: Predict output:");
                console.log(
                  "Code: Promise.all([Promise.resolve(1),Promise.reject('Failed'),Promise.resolve(3)]).catch(console.log);",
                );
                console.log("Expected Output: Failed");
                console.log("Actual Output:");
                Promise.all([
                  Promise.resolve(1),
                  Promise.reject("Failed"),
                  Promise.resolve(3),
                ]).catch(console.log);

                setTimeout(() => {
                  // IQ10
                  console.log("\nIQ10: Predict complete output:");
                  console.log("Code:");
                  console.log("console.log('Start');");
                  console.log("Promise.resolve().then(()=>{");
                  console.log("  console.log('A');");
                  console.log("  return Promise.resolve('B');");
                  console.log("}).then(console.log);");
                  console.log("console.log('End');");
                  console.log("\nExpected Output: Start, End, A, B");
                  console.log(
                    "Explanation: Synchronous (Start, End) first, then microtasks (A), then chained then (B)",
                  );
                  console.log("\nActual Output:");
                  console.log("Start");
                  Promise.resolve()
                    .then(() => {
                      console.log("A");
                      return Promise.resolve("B");
                    })
                    .then(console.log);
                  console.log("End");

                  setTimeout(() => {
                    console.log(
                      "\n============================================",
                    );
                    console.log("All questions completed!");
                    console.log("============================================");
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 100);
}, 100);
