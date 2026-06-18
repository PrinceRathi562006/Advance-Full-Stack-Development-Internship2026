// ============================================
// ASYNC/AWAIT MASTERY - 50 QUESTIONS
// ============================================

// ============================================
// LEVEL 1 (Q1-Q10): Async Function Basics
// ============================================

// Q1: Create an async function that returns "Hello World"
console.log("\n===== Q1: Async function returning Hello World =====");
async function q1_helloWorld() {
  return "Hello World";
}

q1_helloWorld().then((result) => {
  console.log("Q1 Result:", result);
});

// Q2: Create an async function that returns a user object
console.log("\n===== Q2: Async function returning user object =====");
async function q2_getUser() {
  return {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "admin"
  };
}

q2_getUser().then((result) => {
  console.log("Q2 Result:", result);
});

// Q3: Create an async function that returns an array of products
console.log("\n===== Q3: Async function returning products array =====");
async function q3_getProducts() {
  return [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 2000 }
  ];
}

q3_getProducts().then((result) => {
  console.log("Q3 Result:", result);
});

// Q4: Create an async function that returns current date
console.log("\n===== Q4: Async function returning current date =====");
async function q4_getCurrentDate() {
  return new Date().toLocaleDateString();
}

q4_getCurrentDate().then((result) => {
  console.log("Q4 Result:", result);
});

// Q5: Create an async function that returns random number
console.log("\n===== Q5: Async function returning random number =====");
async function q5_getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

q5_getRandomNumber().then((result) => {
  console.log("Q5 Result:", result);
});

// Q6: Create an async function that returns student details
console.log("\n===== Q6: Async function returning student details =====");
async function q6_getStudentDetails() {
  return {
    rollNo: 101,
    name: "Rajesh Kumar",
    class: "12-A",
    marks: 95,
    section: "Science"
  };
}

q6_getStudentDetails().then((result) => {
  console.log("Q6 Result:", result);
});

// Q7: Create an async function that returns company details
console.log("\n===== Q7: Async function returning company details =====");
async function q7_getCompanyDetails() {
  return {
    name: "Tech Corp",
    founded: 2015,
    employees: 5000,
    industry: "Technology",
    headquarters: "Bangalore"
  };
}

q7_getCompanyDetails().then((result) => {
  console.log("Q7 Result:", result);
});

// Q8: Create an async function that returns cart items
console.log("\n===== Q8: Async function returning cart items =====");
async function q8_getCartItems() {
  return [
    { productId: 1, name: "Laptop", quantity: 1, price: 50000 },
    { productId: 2, name: "Mouse", quantity: 2, price: 500 }
  ];
}

q8_getCartItems().then((result) => {
  console.log("Q8 Result:", result);
});

// Q9: Create an async function that returns total order amount
console.log("\n===== Q9: Async function returning total order amount =====");
async function q9_getTotalOrderAmount() {
  const cartItems = [
    { price: 50000, quantity: 1 },
    { price: 500, quantity: 2 }
  ];
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return total;
}

q9_getTotalOrderAmount().then((result) => {
  console.log("Q9 Result: Total Amount =", result);
});

// Q10: Create an async function and verify it always returns Promise
console.log("\n===== Q10: Verify async function returns Promise =====");
async function q10_returnsPromise() {
  return "This is an async function";
}

const promiseResult = q10_returnsPromise();
console.log("Q10 Result: Is it a Promise?", promiseResult instanceof Promise);
promiseResult.then((result) => {
  console.log("Q10 Resolved Value:", result);
});

// ============================================
// LEVEL 2 (Q11-Q20): Await Basics
// ============================================

// Q11: Create getUser() and use await to print user
console.log("\n===== Q11: Use await with getUser() =====");
async function q11_main() {
  async function getUser() {
    return { id: 1, name: "Alice", email: "alice@example.com" };
  }

  const user = await getUser();
  console.log("Q11 User:", user);
}

q11_main();

// Q12: Create getProduct() and use await
console.log("\n===== Q12: Use await with getProduct() =====");
async function q12_main() {
  async function getProduct() {
    return { id: 1, name: "iPhone", price: 80000, brand: "Apple" };
  }

  const product = await getProduct();
  console.log("Q12 Product:", product);
}

q12_main();

// Q13: Create getOrders() and use await
console.log("\n===== Q13: Use await with getOrders() =====");
async function q13_main() {
  async function getOrders() {
    return [
      { orderId: 101, status: "Delivered", total: 5000 },
      { orderId: 102, status: "Processing", total: 3000 }
    ];
  }

  const orders = await getOrders();
  console.log("Q13 Orders:", orders);
}

q13_main();

// Q14: Create getPayment() and use await
console.log("\n===== Q14: Use await with getPayment() =====");
async function q14_main() {
  async function getPayment() {
    return {
      transactionId: "TXN123",
      amount: 50000,
      status: "Success",
      method: "Credit Card"
    };
  }

  const payment = await getPayment();
  console.log("Q14 Payment:", payment);
}

q14_main();

// Q15: Create delay function using Promise
console.log("\n===== Q15: Create wait(2000) delay function =====");
async function q15_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  console.log("Q15 - Starting wait...");
  await wait(2000);
  console.log("Q15 - Waited 2 seconds!");
}

q15_main();

// Q16: Print Start, wait 2 sec, print End
console.log("\n===== Q16: Sequential execution with delay =====");
async function q16_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  console.log("Q16 - Start");
  await wait(2000);
  console.log("Q16 - End (after 2 seconds)");
}

q16_main();

// Q17: Print 1, wait, 2, wait, 3
console.log("\n===== Q17: Multiple sequential prints with delays =====");
async function q17_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  console.log("Q17 - 1");
  await wait(1000);
  console.log("Q17 - 2");
  await wait(1000);
  console.log("Q17 - 3");
}

q17_main();

// Q18: Create async greeting system
console.log("\n===== Q18: Async greeting system =====");
async function q18_greetingSystem() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const greetings = ["Hello!", "Good Morning!", "Welcome!"];

  for (let greeting of greetings) {
    console.log("Q18 - " + greeting);
    await wait(500);
  }
}

q18_greetingSystem();

// Q19: Create async OTP verification
console.log("\n===== Q19: Async OTP verification =====");
async function q19_otpVerification() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function sendOTP(email) {
    console.log("Q19 - Sending OTP to", email);
    await wait(1000);
    return "123456";
  }

  async function verifyOTP(otp) {
    console.log("Q19 - Verifying OTP:", otp);
    await wait(800);
    return otp === "123456";
  }

  const otp = await sendOTP("user@example.com");
  const isVerified = await verifyOTP(otp);
  console.log("Q19 - OTP Verified:", isVerified);
}

q19_otpVerification();

// Q20: Create async login simulation
console.log("\n===== Q20: Async login simulation =====");
async function q20_loginSimulation() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function validateCredentials(email, password) {
    console.log("Q20 - Validating credentials...");
    await wait(800);
    return email === "user@example.com" && password === "pass123";
  }

  async function createSession(userId) {
    console.log("Q20 - Creating session for user:", userId);
    await wait(600);
    return { userId: userId, sessionId: "sess_" + Math.random() };
  }

  const isValid = await validateCredentials("user@example.com", "pass123");
  if (isValid) {
    const session = await createSession("user123");
    console.log("Q20 - Login successful:", session);
  }
}

q20_loginSimulation();

// ============================================
// LEVEL 3 (Q21-Q30): Async + Try Catch
// ============================================

// Q21: Create async function that throws error and handle with try catch
console.log("\n===== Q21: Async error handling with try catch =====");
async function q21_main() {
  async function riskyFunction() {
    throw new Error("Something went wrong!");
  }

  try {
    console.log("Q21 - Attempting risky operation...");
    await riskyFunction();
  } catch (error) {
    console.log("Q21 - Error caught:", error.message);
  }
}

q21_main();

// Q22: Create async login validation (invalid login throws error)
console.log("\n===== Q22: Async login validation =====");
async function q22_main() {
  async function loginValidation(email, password) {
    if (email !== "admin@example.com" || password !== "admin123") {
      throw new Error("Invalid credentials!");
    }
    return { email: email, status: "logged in" };
  }

  try {
    console.log("Q22 - Attempting login...");
    const result = await loginValidation("user@example.com", "wrong");
    console.log("Q22 - Login result:", result);
  } catch (error) {
    console.log("Q22 - Login failed:", error.message);
  }
}

q22_main();

// Q23: Create async bank withdrawal (insufficient balance throws error)
console.log("\n===== Q23: Async bank withdrawal =====");
async function q23_main() {
  async function withdrawMoney(accountBalance, withdrawAmount) {
    if (withdrawAmount > accountBalance) {
      throw new Error("Insufficient balance! Available: " + accountBalance);
    }
    return {
      withdrawn: withdrawAmount,
      remaining: accountBalance - withdrawAmount
    };
  }

  try {
    console.log("Q23 - Attempting withdrawal of 50000...");
    const result = await withdrawMoney(10000, 50000);
    console.log("Q23 - Withdrawal successful:", result);
  } catch (error) {
    console.log("Q23 - Withdrawal failed:", error.message);
  }
}

q23_main();

// Q24: Create async payment gateway simulation
console.log("\n===== Q24: Async payment gateway simulation =====");
async function q24_main() {
  async function processPayment(amount, cardNumber) {
    if (!cardNumber || cardNumber.length < 16) {
      throw new Error("Invalid card number!");
    }
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    }
    return {
      transactionId: "TXN" + Date.now(),
      amount: amount,
      status: "Success"
    };
  }

  try {
    console.log("Q24 - Processing payment...");
    const result = await processPayment(5000, "1234567890123456");
    console.log("Q24 - Payment successful:", result);
  } catch (error) {
    console.log("Q24 - Payment failed:", error.message);
  }
}

q24_main();

// Q25: Create async registration validator
console.log("\n===== Q25: Async registration validator =====");
async function q25_main() {
  async function registerUser(email, password, age) {
    if (!email.includes("@")) {
      throw new Error("Invalid email!");
    }
    if (password.length < 8) {
      throw new Error("Password too short!");
    }
    if (age < 18) {
      throw new Error("Must be 18 or older!");
    }
    return { email: email, status: "Registered", userId: "user_" + Date.now() };
  }

  try {
    console.log("Q25 - Registering user...");
    const result = await registerUser("john@example.com", "SecurePass123", 25);
    console.log("Q25 - Registration successful:", result);
  } catch (error) {
    console.log("Q25 - Registration failed:", error.message);
  }
}

q25_main();

// Q26: Create async email validator
console.log("\n===== Q26: Async email validator =====");
async function q26_main() {
  async function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format: " + email);
    }
    return { email: email, isValid: true };
  }

  try {
    console.log("Q26 - Validating email...");
    const result = await validateEmail("invalid-email");
    console.log("Q26 - Validation result:", result);
  } catch (error) {
    console.log("Q26 - Validation error:", error.message);
  }
}

q26_main();

// Q27: Create async password validator
console.log("\n===== Q27: Async password validator =====");
async function q27_main() {
  async function validatePassword(password) {
    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters!");
    }
    if (!/[A-Z]/.test(password)) {
      throw new Error("Password must contain uppercase letter!");
    }
    if (!/[0-9]/.test(password)) {
      throw new Error("Password must contain number!");
    }
    return { isValid: true, strength: "Strong" };
  }

  try {
    console.log("Q27 - Validating password...");
    const result = await validatePassword("SecurePass123");
    console.log("Q27 - Password valid:", result);
  } catch (error) {
    console.log("Q27 - Password validation error:", error.message);
  }
}

q27_main();

// Q28: Create async ATM simulation
console.log("\n===== Q28: Async ATM simulation =====");
async function q28_main() {
  const atmPin = "1234";
  let balance = 50000;

  async function verifyPin(pin) {
    if (pin !== atmPin) {
      throw new Error("Incorrect PIN!");
    }
    return true;
  }

  async function checkBalance() {
    return balance;
  }

  async function withdraw(amount) {
    if (amount > balance) {
      throw new Error("Insufficient funds!");
    }
    balance -= amount;
    return { withdrawn: amount, remaining: balance };
  }

  try {
    console.log("Q28 - ATM: Enter PIN");
    await verifyPin("1234");
    console.log("Q28 - PIN verified!");

    console.log("Q28 - Checking balance...");
    const bal = await checkBalance();
    console.log("Q28 - Current balance:", bal);

    console.log("Q28 - Withdrawing 10000...");
    const result = await withdraw(10000);
    console.log("Q28 - Withdrawal successful:", result);
  } catch (error) {
    console.log("Q28 - ATM Error:", error.message);
  }
}

q28_main();

// Q29: Create async product purchase flow
console.log("\n===== Q29: Async product purchase flow =====");
async function q29_main() {
  async function checkProductAvailability(productId) {
    if (productId <= 0) {
      throw new Error("Invalid product ID!");
    }
    return { productId: productId, available: true, stock: 10 };
  }

  async function processPayment(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    }
    return { transactionId: "TXN" + Date.now(), status: "Success" };
  }

  async function generateOrder(productId) {
    return { orderId: "ORD" + Date.now(), productId: productId, status: "Confirmed" };
  }

  try {
    console.log("Q29 - Starting purchase...");
    const product = await checkProductAvailability(1);
    console.log("Q29 - Product available:", product);

    const payment = await processPayment(5000);
    console.log("Q29 - Payment processed:", payment);

    const order = await generateOrder(product.productId);
    console.log("Q29 - Order created:", order);
  } catch (error) {
    console.log("Q29 - Purchase failed:", error.message);
  }
}

q29_main();

// Q30: Create async order cancellation flow
console.log("\n===== Q30: Async order cancellation flow =====");
async function q30_main() {
  async function verifyOrder(orderId) {
    if (!orderId) {
      throw new Error("Invalid order ID!");
    }
    return { orderId: orderId, status: "Active", amount: 5000 };
  }

  async function processRefund(orderId, amount) {
    return { orderId: orderId, refundAmount: amount, status: "Refunded" };
  }

  async function updateOrderStatus(orderId, status) {
    return { orderId: orderId, status: status };
  }

  try {
    console.log("Q30 - Cancelling order...");
    const order = await verifyOrder("ORD123456");
    console.log("Q30 - Order found:", order);

    const refund = await processRefund(order.orderId, order.amount);
    console.log("Q30 - Refund processed:", refund);

    const updated = await updateOrderStatus(order.orderId, "Cancelled");
    console.log("Q30 - Order cancelled:", updated);
  } catch (error) {
    console.log("Q30 - Cancellation failed:", error.message);
  }
}

q30_main();

// ============================================
// LEVEL 4 (Q31-Q35): Sequential Execution
// ============================================

// Q31: Login → Get User → Get Orders → Payment
console.log("\n===== Q31: Sequential flow - Login → User → Orders → Payment =====");
async function q31_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function login(email, password) {
    console.log("Q31 - 1. Logging in...");
    await wait(800);
    return { userId: "user123", email: email };
  }

  async function getUser(userId) {
    console.log("Q31 - 2. Getting user details...");
    await wait(600);
    return { userId: userId, name: "John Doe", email: "john@example.com" };
  }

  async function getOrders(userId) {
    console.log("Q31 - 3. Getting orders...");
    await wait(700);
    return [
      { orderId: 101, total: 5000 },
      { orderId: 102, total: 3000 }
    ];
  }

  async function processPayment(amount) {
    console.log("Q31 - 4. Processing payment of", amount);
    await wait(800);
    return { transactionId: "TXN" + Date.now(), status: "Success" };
  }

  try {
    const loginResult = await login("john@example.com", "pass123");
    const user = await getUser(loginResult.userId);
    const orders = await getOrders(user.userId);
    const payment = await processPayment(8000);
    console.log("Q31 - All steps completed successfully!");
  } catch (error) {
    console.log("Q31 - Error:", error.message);
  }
}

q31_main();

// Q32: Create movie booking flow
console.log("\n===== Q32: Movie booking flow =====");
async function q32_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function searchMovies(genre) {
    console.log("Q32 - Searching movies for:", genre);
    await wait(500);
    return [
      { movieId: 1, title: "Action Movie", genre: genre, rating: 8.5 },
      { movieId: 2, title: "Adventure", genre: genre, rating: 8.2 }
    ];
  }

  async function selectSeats(movieId, seats) {
    console.log("Q32 - Selecting seats:", seats);
    await wait(600);
    return { movieId: movieId, seats: seats, status: "Selected" };
  }

  async function processBookingPayment(amount) {
    console.log("Q32 - Processing payment:", amount);
    await wait(700);
    return { bookingId: "BK" + Date.now(), amount: amount, status: "Paid" };
  }

  async function generateTicket(bookingId) {
    console.log("Q32 - Generating ticket...");
    await wait(400);
    return { bookingId: bookingId, ticketId: "TK" + Date.now(), status: "Confirmed" };
  }

  try {
    const movies = await searchMovies("Action");
    const seats = await selectSeats(movies[0].movieId, ["A1", "A2"]);
    const payment = await processBookingPayment(400);
    const ticket = await generateTicket(payment.bookingId);
    console.log("Q32 - Booking complete! Ticket:", ticket);
  } catch (error) {
    console.log("Q32 - Booking failed:", error.message);
  }
}

q32_main();

// Q33: Create food delivery flow
console.log("\n===== Q33: Food delivery flow =====");
async function q33_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function searchRestaurants(cuisine) {
    console.log("Q33 - Searching restaurants for:", cuisine);
    await wait(500);
    return [
      { restaurantId: 1, name: "Pizza Palace", cuisine: cuisine, rating: 4.5 }
    ];
  }

  async function selectFood(restaurantId, items) {
    console.log("Q33 - Selecting food items:", items);
    await wait(600);
    return { restaurantId: restaurantId, items: items, total: 500 };
  }

  async function confirmOrder(restaurantId, amount) {
    console.log("Q33 - Confirming order...");
    await wait(700);
    return { orderId: "ORD" + Date.now(), status: "Confirmed", amount: amount };
  }

  async function assignDeliveryAgent(orderId) {
    console.log("Q33 - Assigning delivery agent...");
    await wait(800);
    return { orderId: orderId, agentId: "AGENT123", eta: "30 mins" };
  }

  try {
    const restaurants = await searchRestaurants("Italian");
    const order = await selectFood(restaurants[0].restaurantId, ["Pizza", "Coke"]);
    const confirmed = await confirmOrder(restaurants[0].restaurantId, order.total);
    const delivery = await assignDeliveryAgent(confirmed.orderId);
    console.log("Q33 - Order placed! Delivery ETA:", delivery.eta);
  } catch (error) {
    console.log("Q33 - Order failed:", error.message);
  }
}

q33_main();

// Q34: Create train ticket booking flow
console.log("\n===== Q34: Train ticket booking flow =====");
async function q34_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function searchTrains(from, to, date) {
    console.log("Q34 - Searching trains from", from, "to", to);
    await wait(600);
    return [
      { trainId: 1, name: "Express 101", from: from, to: to, date: date, fare: 500 }
    ];
  }

  async function checkAvailability(trainId, classType) {
    console.log("Q34 - Checking availability for", classType);
    await wait(400);
    return { trainId: trainId, classType: classType, available: 5, fare: 500 };
  }

  async function selectPassengers(trainId, passengerCount) {
    console.log("Q34 - Selecting", passengerCount, "passengers");
    await wait(500);
    return { trainId: trainId, passengers: passengerCount, totalFare: 500 * passengerCount };
  }

  async function processTicketPayment(amount) {
    console.log("Q34 - Processing payment:", amount);
    await wait(700);
    return { paymentId: "PAY" + Date.now(), status: "Success" };
  }

  try {
    const trains = await searchTrains("Delhi", "Mumbai", "2024-06-20");
    const availability = await checkAvailability(trains[0].trainId, "AC");
    const passengers = await selectPassengers(trains[0].trainId, 2);
    const payment = await processTicketPayment(passengers.totalFare);
    console.log("Q34 - Ticket booked successfully!");
  } catch (error) {
    console.log("Q34 - Booking failed:", error.message);
  }
}

q34_main();

// Q35: Create college admission flow
console.log("\n===== Q35: College admission flow =====");
async function q35_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function submitApplication(applicantName, email) {
    console.log("Q35 - Submitting application for:", applicantName);
    await wait(600);
    return { applicationId: "APP" + Date.now(), status: "Submitted" };
  }

  async function evaluateQualifications(applicationId, marks, percentage) {
    console.log("Q35 - Evaluating qualifications...");
    await wait(800);
    if (percentage < 70) {
      throw new Error("Marks insufficient for admission!");
    }
    return { applicationId: applicationId, qualified: true };
  }

  async function conductInterview(applicationId) {
    console.log("Q35 - Scheduling interview...");
    await wait(700);
    return { applicationId: applicationId, interviewScore: 85, status: "Passed" };
  }

  async function generateAdmissionLetter(applicationId) {
    console.log("Q35 - Generating admission letter...");
    await wait(500);
    return { applicationId: applicationId, admissionId: "ADM" + Date.now(), status: "Admitted" };
  }

  try {
    const application = await submitApplication("Rajesh Kumar", "rajesh@example.com");
    const evaluation = await evaluateQualifications(application.applicationId, 480, 80);
    const interview = await conductInterview(application.applicationId);
    const admission = await generateAdmissionLetter(application.applicationId);
    console.log("Q35 - Admission successful! Admission ID:", admission.admissionId);
  } catch (error) {
    console.log("Q35 - Admission process failed:", error.message);
  }
}

q35_main();

// ============================================
// LEVEL 5 (Q36-Q40): Promise.all + Async Await
// ============================================

// Q36: Fetch Users, Products, Orders together using Promise.all
console.log("\n===== Q36: Fetch multiple data with Promise.all =====");
async function q36_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getUsers() {
    console.log("Q36 - Fetching users...");
    await wait(1000);
    return [
      { userId: 1, name: "User 1" },
      { userId: 2, name: "User 2" }
    ];
  }

  async function getProducts() {
    console.log("Q36 - Fetching products...");
    await wait(800);
    return [
      { productId: 1, name: "Product 1" },
      { productId: 2, name: "Product 2" }
    ];
  }

  async function getOrders() {
    console.log("Q36 - Fetching orders...");
    await wait(600);
    return [
      { orderId: 1, status: "Delivered" },
      { orderId: 2, status: "Processing" }
    ];
  }

  try {
    const [users, products, orders] = await Promise.all([
      getUsers(),
      getProducts(),
      getOrders()
    ]);

    console.log("Q36 - Users:", users);
    console.log("Q36 - Products:", products);
    console.log("Q36 - Orders:", orders);
  } catch (error) {
    console.log("Q36 - Error:", error.message);
  }
}

q36_main();

// Q37: Create 5 APIs with delays and execute parallel
console.log("\n===== Q37: Execute 5 APIs in parallel =====");
async function q37_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function api1() {
    await wait(1000);
    return "API 1 Response";
  }

  async function api2() {
    await wait(800);
    return "API 2 Response";
  }

  async function api3() {
    await wait(600);
    return "API 3 Response";
  }

  async function api4() {
    await wait(900);
    return "API 4 Response";
  }

  async function api5() {
    await wait(700);
    return "API 5 Response";
  }

  try {
    const startTime = Date.now();
    const results = await Promise.all([api1(), api2(), api3(), api4(), api5()]);
    const endTime = Date.now();

    console.log("Q37 - Results:", results);
    console.log("Q37 - Total time:", (endTime - startTime), "ms (parallelized)");
  } catch (error) {
    console.log("Q37 - Error:", error.message);
  }
}

q37_main();

// Q38: Build dashboard loader - Load User, Orders, Products, Notifications together
console.log("\n===== Q38: Dashboard loader with Promise.all =====");
async function q38_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function loadUser() {
    console.log("Q38 - Loading user...");
    await wait(700);
    return { userId: 1, name: "John", role: "Admin" };
  }

  async function loadOrders() {
    console.log("Q38 - Loading orders...");
    await wait(900);
    return [
      { orderId: 101, status: "Delivered" },
      { orderId: 102, status: "Processing" }
    ];
  }

  async function loadProducts() {
    console.log("Q38 - Loading products...");
    await wait(600);
    return [
      { productId: 1, name: "Laptop", inStock: true },
      { productId: 2, name: "Mouse", inStock: true }
    ];
  }

  async function loadNotifications() {
    console.log("Q38 - Loading notifications...");
    await wait(500);
    return [
      { notificationId: 1, message: "Order delivered" },
      { notificationId: 2, message: "New product available" }
    ];
  }

  try {
    const startTime = Date.now();
    const [user, orders, products, notifications] = await Promise.all([
      loadUser(),
      loadOrders(),
      loadProducts(),
      loadNotifications()
    ]);
    const endTime = Date.now();

    console.log("Q38 - Dashboard loaded in", (endTime - startTime), "ms");
    console.log("Q38 - User:", user.name);
    console.log("Q38 - Orders count:", orders.length);
    console.log("Q38 - Products count:", products.length);
    console.log("Q38 - Notifications count:", notifications.length);
  } catch (error) {
    console.log("Q38 - Dashboard load failed:", error.message);
  }
}

q38_main();

// Q39: Create image gallery loader using Promise.all
console.log("\n===== Q39: Image gallery loader with Promise.all =====");
async function q39_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function loadImage(imageId) {
    await wait(Math.random() * 800 + 200);
    return { imageId: imageId, url: "/images/img_" + imageId + ".jpg", loaded: true };
  }

  try {
    console.log("Q39 - Loading 6 images in parallel...");
    const startTime = Date.now();

    const images = await Promise.all([
      loadImage(1),
      loadImage(2),
      loadImage(3),
      loadImage(4),
      loadImage(5),
      loadImage(6)
    ]);

    const endTime = Date.now();

    console.log("Q39 - Images loaded in", (endTime - startTime), "ms");
    console.log("Q39 - Total images:", images.length);
    images.forEach((img) => {
      console.log("Q39 -", img.url, "loaded!");
    });
  } catch (error) {
    console.log("Q39 - Gallery load failed:", error.message);
  }
}

q39_main();

// Q40: Create multiple file downloader using Promise.all
console.log("\n===== Q40: Multiple file downloader with Promise.all =====");
async function q40_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function downloadFile(fileName) {
    const fileSize = Math.floor(Math.random() * 5000 + 1000);
    console.log("Q40 - Downloading", fileName, "(" + fileSize + " KB)...");
    await wait(Math.random() * 1000 + 500);
    return { fileName: fileName, size: fileSize, status: "Downloaded" };
  }

  try {
    console.log("Q40 - Starting download manager...");
    const startTime = Date.now();

    const files = await Promise.all([
      downloadFile("document1.pdf"),
      downloadFile("image1.jpg"),
      downloadFile("video1.mp4"),
      downloadFile("archive.zip"),
      downloadFile("report.xlsx")
    ]);

    const endTime = Date.now();

    console.log("Q40 - All files downloaded in", (endTime - startTime), "ms");
    let totalSize = 0;
    files.forEach((file) => {
      console.log("Q40 -", file.fileName, file.size, "KB");
      totalSize += file.size;
    });
    console.log("Q40 - Total downloaded:", totalSize, "KB");
  } catch (error) {
    console.log("Q40 - Download failed:", error.message);
  }
}

q40_main();

// ============================================
// LEVEL 6 (Q41-Q44): Promise.allSettled()
// ============================================

// Q41: Create 3 successful APIs and 2 failed APIs, show all results
console.log("\n===== Q41: Promise.allSettled with mixed results =====");
async function q41_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function successApi1() {
    await wait(500);
    return "API 1 Success";
  }

  async function successApi2() {
    await wait(600);
    return "API 2 Success";
  }

  async function successApi3() {
    await wait(400);
    return "API 3 Success";
  }

  async function failApi1() {
    await wait(500);
    throw new Error("API 4 Failed - Server Down");
  }

  async function failApi2() {
    await wait(600);
    throw new Error("API 5 Failed - Timeout");
  }

  try {
    const results = await Promise.allSettled([
      successApi1(),
      failApi1(),
      successApi2(),
      successApi3(),
      failApi2()
    ]);

    console.log("Q41 - All results (with failures):");
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log("Q41 - Result", (index + 1), "✓ Success:", result.value);
      } else {
        console.log("Q41 - Result", (index + 1), "✗ Failed:", result.reason.message);
      }
    });

    const successCount = results.filter((r) => r.status === "fulfilled").length;
    const failCount = results.filter((r) => r.status === "rejected").length;
    console.log("Q41 - Success:", successCount, "| Failed:", failCount);
  } catch (error) {
    console.log("Q41 - Error:", error.message);
  }
}

q41_main();

// Q42: Build admin dashboard using allSettled
console.log("\n===== Q42: Admin dashboard with allSettled =====");
async function q42_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function loadUserStats() {
    await wait(500);
    return { users: 15000, activeUsers: 8500 };
  }

  async function loadRevenueData() {
    await wait(700);
    throw new Error("Revenue API temporarily unavailable");
  }

  async function loadOrderStats() {
    await wait(600);
    return { totalOrders: 25000, deliveredOrders: 23000 };
  }

  async function loadProductCatalog() {
    await wait(800);
    throw new Error("Product catalog sync failed");
  }

  async function loadSystemHealth() {
    await wait(400);
    return { serverStatus: "Healthy", cpuUsage: 45 };
  }

  try {
    console.log("Q42 - Loading admin dashboard...");
    const results = await Promise.allSettled([
      loadUserStats(),
      loadRevenueData(),
      loadOrderStats(),
      loadProductCatalog(),
      loadSystemHealth()
    ]);

    console.log("Q42 - Dashboard Status:");
    const widgets = ["User Stats", "Revenue", "Orders", "Products", "System Health"];

    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log("Q42 -", widgets[index], "✓ Loaded:", JSON.stringify(result.value));
      } else {
        console.log("Q42 -", widgets[index], "✗ Error:", result.reason.message);
      }
    });
  } catch (error) {
    console.log("Q42 - Dashboard error:", error.message);
  }
}

q42_main();

// Q43: Build batch file uploader (some uploads fail)
console.log("\n===== Q43: Batch file uploader with allSettled =====");
async function q43_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function uploadFile(fileName, size) {
    if (size > 50000) {
      // Fail if file too large
      await wait(300);
      throw new Error("File too large: " + fileName);
    }
    await wait(Math.random() * 500 + 200);
    return { fileName: fileName, size: size, uploadId: "UP_" + Date.now() };
  }

  try {
    const files = [
      { name: "document.pdf", size: 5000 },
      { name: "image.jpg", size: 3000 },
      { name: "video.mp4", size: 60000 }, // Too large
      { name: "audio.mp3", size: 8000 },
      { name: "archive.zip", size: 55000 } // Too large
    ];

    console.log("Q43 - Starting batch upload...");
    const uploadPromises = files.map((file) =>
      uploadFile(file.name, file.size)
    );

    const results = await Promise.allSettled(uploadPromises);

    console.log("Q43 - Upload Results:");
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log("Q43 -", files[index].name, "✓ Uploaded");
      } else {
        console.log("Q43 -", files[index].name, "✗ Failed:", result.reason.message);
      }
    });

    const uploaded = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.filter((r) => r.status === "rejected").length;
    console.log("Q43 - Summary: Uploaded", uploaded, "| Failed", failed);
  } catch (error) {
    console.log("Q43 - Upload error:", error.message);
  }
}

q43_main();

// Q44: Build student result processor (some students fail)
console.log("\n===== Q44: Student result processor with allSettled =====");
async function q44_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function processStudentResult(studentId, marks) {
    await wait(Math.random() * 300 + 100);

    if (marks < 35) {
      throw new Error("Student " + studentId + " failed exam");
    }

    const percentage = (marks / 100) * 100;
    let grade;
    if (percentage >= 90) grade = "A";
    else if (percentage >= 80) grade = "B";
    else if (percentage >= 70) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    return {
      studentId: studentId,
      marks: marks,
      percentage: percentage.toFixed(2),
      grade: grade,
      status: "Passed"
    };
  }

  try {
    const students = [
      { id: "S001", marks: 92 },
      { id: "S002", marks: 45 },
      { id: "S003", marks: 78 },
      { id: "S004", marks: 32 }, // Failed
      { id: "S005", marks: 88 },
      { id: "S006", marks: 25 } // Failed
    ];

    console.log("Q44 - Processing student results...");
    const resultPromises = students.map((student) =>
      processStudentResult(student.id, student.marks)
    );

    const results = await Promise.allSettled(resultPromises);

    console.log("Q44 - Result Processing Complete:");
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        const res = result.value;
        console.log("Q44 -", res.studentId, "✓", res.grade, "(" + res.percentage + "%)");
      } else {
        console.log("Q44 -", students[index].id, "✗", result.reason.message);
      }
    });

    const passed = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.filter((r) => r.status === "rejected").length;
    console.log("Q44 - Summary: Passed", passed, "| Failed", failed);
  } catch (error) {
    console.log("Q44 - Processing error:", error.message);
  }
}

q44_main();

// ============================================
// LEVEL 7 (Q45-Q47): Promise.race() + Promise.any()
// ============================================

// Q45: Create 3 servers, return fastest response using race
console.log("\n===== Q45: Promise.race with 3 servers =====");
async function q45_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function server1() {
    await wait(2000);
    return "Server 1 Response";
  }

  async function server2() {
    await wait(1000);
    return "Server 2 Response (Fastest!)";
  }

  async function server3() {
    await wait(1500);
    return "Server 3 Response";
  }

  try {
    console.log("Q45 - Racing 3 servers...");
    const startTime = Date.now();
    const fastestResponse = await Promise.race([server1(), server2(), server3()]);
    const endTime = Date.now();

    console.log("Q45 - Fastest response:", fastestResponse);
    console.log("Q45 - Time taken:", (endTime - startTime), "ms");
  } catch (error) {
    console.log("Q45 - Error:", error.message);
  }
}

q45_main();

// Q46: Server1 Fail, Server2 Fail, Server3 Success using Promise.any
console.log("\n===== Q46: Promise.any - Return first success =====");
async function q46_main() {
  function wait(ms) {
    return new Promise((resolve, reject) => setTimeout(() => reject(new Error("Failed")), ms));
  }

  function waitSuccess(ms) {
    return new Promise((resolve) => setTimeout(() => resolve("Server 3 Success!"), ms));
  }

  try {
    console.log("Q46 - Trying multiple servers...");
    const result = await Promise.any([
      wait(500),
      wait(800),
      waitSuccess(1200)
    ]);

    console.log("Q46 - First successful response:", result);
  } catch (error) {
    console.log("Q46 - All servers failed");
  }
}

q46_main();

// Q47: Build API timeout mechanism using race
console.log("\n===== Q47: API timeout mechanism using race =====");
async function q47_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function fetchData() {
    console.log("Q47 - Fetching data from API...");
    await wait(3000); // API takes 3 seconds
    return { data: "Important Information", status: "Success" };
  }

  function timeoutPromise(ms) {
    return new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout after " + ms + "ms")), ms)
    );
  }

  try {
    const result = await Promise.race([
      fetchData(),
      timeoutPromise(2000) // Timeout after 2 seconds
    ]);

    console.log("Q47 - Data received:", result);
  } catch (error) {
    console.log("Q47 - Error:", error.message);
  }
}

q47_main();

// ============================================
// LEVEL 8 (Q48): Async Iteration
// ============================================

// Q48: Create async generator and consume using for await...of
console.log("\n===== Q48: Async generator with for await...of =====");
async function q48_main() {
  async function* studentGenerator() {
    const students = ["Ram", "Shyam", "Mohan"];

    for (let student of students) {
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("Q48 - Yielding:", student);
      yield student;
    }
  }

  try {
    console.log("Q48 - Consuming async generator...");
    for await (let student of studentGenerator()) {
      console.log("Q48 - Got student:", student);
    }
  } catch (error) {
    console.log("Q48 - Error:", error.message);
  }
}

q48_main();

// ============================================
// LEVEL 9 (Q49): Real Project - Async Notes Manager
// ============================================

// Q49: Build Async Notes Manager
console.log("\n===== Q49: Async Notes Manager =====");
async function q49_main() {
  // Simulated database
  let notes = [];
  let noteId = 0;

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Add Note
  async function addNote(title, content) {
    console.log("Q49 - Adding note:", title);
    await wait(500);
    noteId++;
    const note = {
      id: noteId,
      title: title,
      content: content,
      createdAt: new Date().toISOString()
    };
    notes.push(note);
    return note;
  }

  // Fetch Notes
  async function fetchNotes() {
    console.log("Q49 - Fetching all notes...");
    await wait(400);
    return notes;
  }

  // Update Note
  async function updateNote(id, title, content) {
    console.log("Q49 - Updating note ID:", id);
    await wait(600);
    const note = notes.find((n) => n.id === id);
    if (!note) {
      throw new Error("Note not found!");
    }
    note.title = title;
    note.content = content;
    note.updatedAt = new Date().toISOString();
    return note;
  }

  // Delete Note
  async function deleteNote(id) {
    console.log("Q49 - Deleting note ID:", id);
    await wait(500);
    const index = notes.findIndex((n) => n.id === id);
    if (index === -1) {
      throw new Error("Note not found!");
    }
    const deletedNote = notes.splice(index, 1);
    return deletedNote[0];
  }

  try {
    // Add notes
    await addNote("Meeting Notes", "Discuss project timeline");
    await addNote("Shopping List", "Milk, Bread, Eggs");
    await addNote("Ideas", "New feature concepts");

    // Fetch and display
    let allNotes = await fetchNotes();
    console.log("Q49 - Total notes:", allNotes.length);

    // Update note
    await updateNote(2, "Shopping List", "Milk, Bread, Eggs, Butter");

    // Fetch again
    allNotes = await fetchNotes();
    console.log("Q49 - Updated notes:", allNotes.length);

    // Delete note
    await deleteNote(1);

    // Final fetch
    allNotes = await fetchNotes();
    console.log("Q49 - Final notes count:", allNotes.length);
    console.log("Q49 - Remaining notes:", allNotes);
  } catch (error) {
    console.log("Q49 - Error:", error.message);
  }
}

q49_main();

// ============================================
// LEVEL 10 (Q50): FINAL BOSS - Complete E-Commerce Async Flow
// ============================================

// Q50: Build Complete E-Commerce Async Flow
console.log("\n===== Q50: FINAL BOSS - Complete E-Commerce Async Flow =====");
async function q50_main() {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Step 1: Login
  async function login(email, password) {
    console.log("Q50 - Step 1: Logging in with", email);
    await wait(600);
    if (email !== "user@example.com" || password !== "pass123") {
      throw new Error("Invalid credentials!");
    }
    return { userId: "USER123", email: email, loggedInAt: new Date() };
  }

  // Step 2: Get User
  async function getUser(userId) {
    console.log("Q50 - Step 2: Getting user details");
    await wait(500);
    return {
      userId: userId,
      name: "Rajesh Kumar",
      email: "user@example.com",
      phone: "9876543210"
    };
  }

  // Step 3: Get Products
  async function getProducts() {
    console.log("Q50 - Step 3: Fetching available products");
    await wait(700);
    return [
      { productId: 1, name: "Laptop", price: 50000, stock: 5 },
      { productId: 2, name: "Headphones", price: 3000, stock: 15 },
      { productId: 3, name: "USB Cable", price: 300, stock: 100 }
    ];
  }

  // Step 4: Get Cart
  async function getCart(userId) {
    console.log("Q50 - Step 4: Loading cart");
    await wait(400);
    return {
      userId: userId,
      items: [
        { productId: 1, name: "Laptop", price: 50000, quantity: 1 },
        { productId: 2, name: "Headphones", price: 3000, quantity: 2 }
      ],
      total: 56000
    };
  }

  // Step 5: Apply Coupon
  async function applyCoupon(couponCode, cartTotal) {
    console.log("Q50 - Step 5: Applying coupon:", couponCode);
    await wait(500);
    if (couponCode === "SAVE20") {
      return { couponCode: couponCode, discount: (cartTotal * 0.2), discountPercent: 20 };
    }
    return { couponCode: couponCode, discount: 0, discountPercent: 0 };
  }

  // Step 6: Calculate Total
  async function calculateTotal(cartTotal, discount, taxRate = 0.05) {
    console.log("Q50 - Step 6: Calculating total amount");
    await wait(300);
    const tax = (cartTotal - discount) * taxRate;
    const finalTotal = cartTotal - discount + tax;
    return {
      cartTotal: cartTotal,
      discount: discount,
      tax: tax,
      finalTotal: finalTotal
    };
  }

  // Step 7: Payment
  async function processPayment(amount, cardNumber) {
    console.log("Q50 - Step 7: Processing payment of", amount);
    await wait(1000);
    if (!cardNumber || cardNumber.length < 16) {
      throw new Error("Invalid card details!");
    }
    return {
      transactionId: "TXN" + Date.now(),
      amount: amount,
      status: "Success",
      cardLast4: cardNumber.slice(-4)
    };
  }

  // Step 8: Generate Invoice
  async function generateInvoice(orderId, orderDetails) {
    console.log("Q50 - Step 8: Generating invoice");
    await wait(600);
    return {
      invoiceId: "INV" + Date.now(),
      orderId: orderId,
      generatedAt: new Date(),
      orderDetails: orderDetails
    };
  }

  // Step 9: Send Email
  async function sendEmail(email, subject, invoiceId) {
    console.log("Q50 - Step 9: Sending confirmation email to", email);
    await wait(800);
    return {
      to: email,
      subject: subject,
      status: "Sent",
      invoiceAttached: invoiceId
    };
  }

  // Step 10: Track Order
  async function trackOrder(orderId) {
    console.log("Q50 - Step 10: Initiating order tracking");
    await wait(400);
    return {
      orderId: orderId,
      trackingId: "TRK" + Date.now(),
      status: "Order Confirmed",
      estimatedDelivery: "2024-06-25"
    };
  }

  // Bonus Step 11: Delivery
  async function deliveryNotification(orderId, trackingId) {
    console.log("Q50 - Bonus Step: Setting up delivery notifications");
    await wait(300);
    return {
      orderId: orderId,
      trackingId: trackingId,
      notificationStatus: "Enabled",
      deliveryPartner: "FastShip Express"
    };
  }

  try {
    console.log("========== E-COMMERCE FLOW STARTED ==========\n");

    // Execute the complete flow
    const user = await login("user@example.com", "pass123");
    const userDetails = await getUser(user.userId);
    const products = await getProducts();
    const cart = await getCart(user.userId);
    const coupon = await applyCoupon("SAVE20", cart.total);
    const totals = await calculateTotal(cart.total, coupon.discount);
    const payment = await processPayment(totals.finalTotal, "1234567890123456");
    const invoice = await generateInvoice(
      "ORD" + Date.now(),
      { items: cart.items, total: totals.finalTotal }
    );
    const email = await sendEmail(
      userDetails.email,
      "Order Confirmation",
      invoice.invoiceId
    );
    const tracking = await trackOrder(invoice.orderId);
    const delivery = await deliveryNotification(invoice.orderId, tracking.trackingId);

    console.log("\n========== E-COMMERCE FLOW COMPLETED ==========");
    console.log("\nFinal Summary:");
    console.log("- Order ID:", invoice.orderId);
    console.log("- Customer:", userDetails.name);
    console.log("- Total Amount:", totals.finalTotal.toFixed(2));
    console.log("- Payment Status:", payment.status);
    console.log("- Invoice:", invoice.invoiceId);
    console.log("- Tracking ID:", tracking.trackingId);
    console.log("- Delivery Partner:", delivery.deliveryPartner);
    console.log("- Estimated Delivery:", tracking.estimatedDelivery);
    console.log("\n✓ All steps completed successfully!");
  } catch (error) {
    console.log("\nQ50 - Error in e-commerce flow:", error.message);
  }
}

q50_main();

// ============================================
// END OF ASYNC/AWAIT MASTERY
// ============================================
console.log("\n\n========================================");
console.log("ALL 50 QUESTIONS COMPLETED!");
console.log("========================================");
