require("dotenv").config();
const connectDB = require("./config/db");
const dns = require('dns');

dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);

const Student = require("./models/Student");

async function main(){
  try{
    await connectDB();


    // const student = new Student({
    //   name:"Sachin",
    //   email:"sachine123@gmail.com",
    //   age:21,
    //   course:"BCA",
    //   address:"abc Colony",
    //   phoneNumber:8932847421
    // })

    // await student.save();

    // .save() -> save user.

    // create method -> create and save both

    // await Student.create({
    //   name:"Rahul",
    //   email:"rahul123@gmail.com",
    //   age:24,
    //   course:"MCA",
    //   address:"abc Colony",
    //   phoneNumber:9932347421
    // })

    // console.log("Student registered succesfully....");

    // insertOne - to insert one user.
    // await Student.insertOne({
    //   name:"Nitin",
    //   email:"nitin@gmail.com",
    //   age:23,
    //   course:"B.Tech",
    //   address:"Rohtak, Haryana",
    //   phoneNumber:9798982334
    // })

    // console.log("student inserted succesfully....");

  //   const students = [
  //   {
  //     name: "Sachin",
  //     email: "sachin@gmail.com",
  //     age: 21,
  //     course: "BCA",
  //     address: "ABC Colony",
  //     phoneNumber: "9876543210"
  //   },
  //   {
  //     name: "Rahul",
  //     email: "rahul@gmail.com",
  //     age: 22,
  //     course: "B.Tech",
  //     address: "XYZ Colony",
  //     phoneNumber: "9876543211"
  //   },
  //   {
  //     name: "Aman",
  //     email: "aman@gmail.com",
  //     age: 20,
  //     course: "B.Com",
  //     address: "PQR Colony",
  //     phoneNumber: "9876543212"
  //   }
  // ];

  // await Student.insertMany(students);

  // console.log("Students inserted successfully!");

    // find user

    // const students = await Student.find({ course: "B.Tech" });
    // console.log(students);

    // Projection -> to shoow specific number of fields we use projection.

    // const students = await Student.find({ course: "B.Tech" }).select("name email");
    // console.log(students);

    // Operators ->

    const students = await Student.find({ course: "B.Tech",age: {$gte:23} });
    console.log(students);


  } catch(err){
    console.log(err.message);
  }
}

main();