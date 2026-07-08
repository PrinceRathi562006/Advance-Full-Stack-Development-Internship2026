const mongoose = require("mongoose");
require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = require("./config/db");
const User = require("./models/User");
const userData = require("./data");

async function main() {
  try {
    await connectDB();

    // await User.insertMany(userData);
    // console.log("all users inserted successfully");

    // 1. Retrieve all users from the collection.

    // const allUsers = await User.find();
    // console.log(allUsers);

    // 2. Retrieve all users enrolled in the MERN course.

    // const allUsers = await User.find({course : "MERN"});
    // console.log(allUsers);

    // 3. Retrieve all female users.

    // const allUsers = await User.find({gender : "Female"});
    // console.log(allUsers);

    // 4. Retrieve all placed users.

    // const allUsers = await User.find({ isPlaced: true });
    // console.log(allUsers);

    // 5. Retrieve all users from Kanpur.

    // const result = await User.find( { city : "Kanpur" } );
    // console.log(result);

    // 6. Retrieve users whose age is exactly 22

    // const result = await User.find({ age : 22 });
    // console.log(result);

    // 7. Retrieve users whose salary is 0.

    // const result = await User.find({salary:0});
    // console.log(result);

    // 8. Retrieve users who scored 91 marks.

    // const result = await User.find({ marks: 91 });
    // console.log(result);

    // 9. Retrieve all users enrolled in the React course.

    // const result = await User.find({ course: "React" });
    // console.log(result);

    // 10. Retrieve all male users.

    // const result = await User.find({ gender: "Male" });
    // console.log(result);

    // 11. Retrieve users whose age is greater than 22.

    // const result = await User.find({ age: { $gt: 22 } });
    // console.log(result);

    // 12. Retrieve users whose age is less than 22.

    // const result = await User.find({ age: { $lt: 22 } });
    // console.log(result);

    // 13. Retrieve users whose marks are greater than or equal to 80.

    // const result = await User.find({ marks: { $gte: 80 } });
    // console.log(result);

    // 14. Retrieve users whose marks are less than 70.

    // const result = await User.find({ marks: { $lt: 70 } });
    // console.log(result);

    // 15. Retrieve users whose salary is greater than 800000.

    // const result = await User.find({ salary: { $gt: 800000 } });
    // console.log(result);

    // 16. Retrieve users whose age is between 20 and 24.

    // const result = await User.find({ age: { $gte: 20, $lte: 24 } });
    // console.log(result);

    // 17. Retrieve users whose marks are between 75 and 90.

    // const result = await User.find({ marks: { $gte: 75, $lte: 90 } });
    // console.log(result);

    // 18. Retrieve users whose salary is between 700000 and 1000000.

    // const result = await User.find({ salary: { $gte: 700000, $lte: 1000000 } });
    // console.log(result);

    // 19. Retrieve users whose course is either React or Node.

    // const result = await User.find({ course: { $in: ["React", "Node"] } });
    // console.log(result);

    // 20. Retrieve users who belong to either Delhi or Kanpur.

    // const result = await User.find({ city: { $in: ["Delhi", "Kanpur"] } });
    // console.log(result);

    // 21. Return only the name field.

    // const result = await User.find({}, { name: 1 });
    // console.log(result);

    // const result = await User.find().select("name");
    // console.log(result);

    // 22. Return only name and marks.

    // const result = await User.find({}, { name: 1, marks: 1 });
    // console.log(result);

    // 23. Exclude the salary field.

    // const result = await User.find({}, { salary: 0 });
    // console.log(result);

    // 24. Exclude the marks field.

    // const result = await User.find({}, { marks: 0 });
    // console.log(result);

    // 25. Exclude the gender field.

    // const result = await User.find({}, { gender: 0 });
    // console.log(result);

    // 26. Return only name and skills.

    // const result = await User.find({}, { name: 1, skills: 1 });
    // console.log(result);

    // 27. Exclude the _id field.

    // const result = await User.find({}, { _id: 0 });
    // console.log(result);

    // 28. Return only course and city.

    // const result = await User.find({}, { course: 1, city: 1 });
    // console.log(result);

    // 29. Return only the salary field.

    // const result = await User.find({}, { salary: 1 });
    // console.log(result);

    // 30. Return only age and city.

    // const result = await User.find({}, { age: 1, city: 1 });
    // console.log(result);

    // 31. Sort users by marks in ascending order.

    // const result = await User.find().sort({ marks: 1 });
    // console.log(result);

    // 32. Sort users by marks in descending order.

    // const result = await User.find().sort({ marks: -1 });
    // console.log(result);

    // 33. Sort users by salary in ascending order.

    // const result = await User.find().sort({ salary: 1 });
    // console.log(result);

    // 34. Sort users by age in descending order.

    // const result = await User.find().sort({ age: -1 });
    // console.log(result);

    // 35. Sort users alphabetically by name.

    // const result = await User.find().sort({ name: 1 });
    // console.log(result);

    // 36. Sort users by city in reverse alphabetical order.

    // const result = await User.find().sort({ city: -1 });
    // console.log(result);

    // 37. Retrieve the top 5 users based on marks.

    // const result = await User.find().sort({ marks: -1 }).limit(5);
    // console.log(result);

    // 38. Retrieve the bottom 3 users based on salary.

    // const result = await User.find().sort({ salary: 1 }).limit(3);
    // console.log(result);

    // 39. Retrieve the youngest user.

    // const result = await User.findOne().sort({ age: 1 });
    // console.log(result);

    // 40. Retrieve the oldest user.

    // const result = await User.findOne().sort({ age: -1 });
    // console.log(result);

    // 41. Retrieve the first 5 users.

    // const result = await User.find().limit(5);
    // console.log(result);

    // 42. Skip the first 5 users and return the remaining users.

    // const result = await User.find().skip(5);
    // console.log(result);

    // 43. Retrieve the second page with a page size of 3.

    // const result = await User.find().skip(3).limit(3);
    // console.log(result);

    // 44. Retrieve the third page with a page size of 2.

    // const result = await User.find().skip(4).limit(2);
    // console.log(result);

    // 45. Retrieve the fifth page with a page size of 2.

    // const result = await User.find().skip(8).limit(2);
    // console.log(result);

    // 46. Retrieve users whose name starts with R.

    // const result = await User.find({ name: /^R/ });
    // console.log(result);

    // const result = await User.find({ name: {$regex : "^R" }});
    // console.log(result);

    // 47. Retrieve users whose name ends with a.

    // const result = await User.find({ name: /a$/ });
    // console.log(result);

    // const result = await User.find({name: {$regex:"a$"}});
    // console.log(result);

    // 48. Retrieve users whose name contains "it".

    // /i search - it, IT, iT case sensitive

    // const result = await User.find({ name: /it/i });
    // console.log(result);

    // const result = await User.find({
    //     name: { $regex: "it", $options: "i" }
    // });
    // console.log(result);

    // 49. Retrieve users whose city starts with K.

    // const result = await User.find({ city: /^K/ });
    // console.log(result);

    // 50. Retrieve users whose course contains "Re".

    // const result = await User.find({ course: /Re/i });
    // console.log(result);

    // 51. Retrieve all React users whose marks are greater than 80.

    // const result = await User.find({ course: "React", marks: { $gt: 80 } });
    // console.log(result);

    // 52. Retrieve all Kanpur users whose age is greater than 20.

    // const result = await User.find({ city: "Kanpur", age: { $gt: 20 } });
    // console.log(result);

    // 53. Retrieve all placed users whose salary is greater than 800000.

    // const result = await User.find({ isPlaced: true, salary: { $gt: 800000 } });
    // console.log(result);

    // 54. Retrieve all female users from Delhi.

    // const result = await User.find({ gender: "Female", city: "Delhi" });
    // console.log(result);

    // 55. Retrieve all male users from Kanpur.

    // const result = await User.find({ gender: "Male", city: "Kanpur" });
    // console.log(result);

    // 56. Retrieve React users sorted by marks in descending order.

    // const result = await User.find({ course: "React" }).sort({ marks: -1 });
    // console.log(result);

    // 57. Retrieve the top 3 highest-paid users.

    // const result = await User.find().sort({ salary: -1 }).limit(3);
    // console.log(result);

    // 58. Retrieve the top 5 scorers and return only their name and marks.

    // const result = await User.find({}, { name: 1, marks: 1 }).sort({ marks: -1 }).limit(5);
    // console.log(result);

    // 59. Retrieve users from Delhi sorted by age.

    // const result = await User.find({ city: "Delhi" }).sort({ age: 1 });
    // console.log(result);

    // 60. Retrieve users whose age is greater than 20 and marks are greater than 80.

    // const result = await User.find({ age: { $gt: 20 }, marks: { $gt: 80 } });
    // console.log(result);

    // 61. Retrieve any one user enrolled in the MERN course.

    // const result = await User.findOne({ course: "MERN" });
    // console.log(result);

    // 62. Retrieve a user using their _id.

    // const result = await User.findById("6a4e51783e77de65cc6232e3");
    // console.log(result);

    // 63. Count the total number of users in the collection.

    // const result = await User.countDocuments();
    // console.log(result);

    // 64. Check whether any user belongs to Mumbai.

    // const result = await User.exists({ city: "Mumbai" });
    // console.log(result);

    // 65. Retrieve all unique course names from the collection.

    // const result = await User.distinct("course");
    // console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();
