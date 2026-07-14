require("dotenv").config();
const connectDB = require("./config/db");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const Student = require("./models/Student");
const User = require("./models/User.js");
const userData = require("./data/userData.js");

async function main() {
  try {
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

    // const students = await Student.find({ course: "B.Tech",age: {$gte:23} });
    // console.log(students);

    // update details

    // await Student.updateOne(
    //   {name:"Rahul"},
    //   {
    //     $set:{
    //       course:"Java Full Stack"
    //     }
    //   }
    // )

    // console.log("updated Student");

    // const result = await Student.findOneAndUpdate(
    //   {name:"Sachin"},
    //   {
    //     $set:{
    //       course:"Jatin Full Stack"
    //     }
    //   },
    //   {
    //   new:true
    //   }
    // )

    // const result = await Student.findByIdAndUpdate(
    //   "6a4de856c325548101bc3c8c",
    //   {
    //     $set:{
    //       course:"Java Full Stack"
    //     }
    //   },
    //   {
    //   new:true
    //   }
    // )

    // console.log(result);

    // await Student.insertOne(
    //   {
    //   name: "Bob",
    //   email: "bob@gmail.com",
    //   age: 18,
    //   course: "B.Com",
    //   address: "PQR Colony",
    //   phoneNumber: "9876233212"
    // }
    // )

    // await Student.findOneAndUpdate(
    //   {name:"Bob"},
    //   {
    //     $set:{
    //       age:67
    //     }
    //   },
    //   {
    //     runValidators:true
    //   }
    // )

    // const result = await Student.findOneAndUpdate(
    //   {name:"XYZ"},
    //   {
    //     $set:{
    //       age:34
    //     }
    //   }
    // )

    // console.log(result);

    // const result = await Student.updateOne(
    //   {name:"XYZ"},
    //   {
    //     $set:{
    //       age:56
    //     }
    //   },
    //   {
    //     upsert:true
    //   }
    // )
    // console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

async function product() {
  try {
    await connectDB();

    // await User.insertMany(userData);

    // console.log("User inserted successfully");

    // await User.updateOne(
    //   {name:"Ram"},
    //   {
    //     $push:{
    //       wishlist:{
    //         $each: ["PS5", "Gaming Chair", "Diary"]
    //       }
    //     }
    //   }
    // )

    // await User.updateOne(
    //   { name: "Ram" },
    //   {
    //     $addToSet: {
    //       skills: "React",
    //     },
    //   },
    // );

    // await User.updateOne(
    //   { name: "Ram" },
    //   {
    //     $pull: {
    //       skills: "React",
    //     },
    //   },
    // );

    // await User.updateOne(
    //   {},
    //   {
    //     $rename:{
    //       city: "Location"
    //     }
    //   }
    // )

    // await User.updateOne(
    //   {
    //     name: "Riya",
    //     "cart.product": "Speaker",
    //   },
    //   {
    //     $set: {
    //       "cart.$.qty": 10,
    //     },
    //   },
    // );

    // console.log("updated");

    // Aggreagation pipeline ->

    // const result = await User.aggregate([
    //   // Stage 1:- find out user whose location is Noida.
    //   // $match
    //   {
    //     $match:{
    //       city:"Kanpur"
    //     }
    //   },
    //   // Stage 2:- show only specified fields
    //   // $project - field ki value ko select krne ka liya
    //   {
    //     $project:{
    //       name:1,
    //       age:1,
    //       _id:0
    //     }
    //   },
    //   // stage 3:-
    //   // $sort -> sort on the basis of any parameter
    //   {
    //     $sort:{
    //       age:-1
    //     }
    //   },
    //   // Stage 4:- limit to top 3
    //   {
    //     $limit:3
    //   },
    //   // Stage 5:- skip starting 2
    //   {
    //     $skip:2
    //   }
    // ]);

    const page = 1;
    const limit = 10;

    const result = await User.aggregate([
      {
        $sort: {
          marks: -1,
        },
      },
      {
        $skip: (page - 1) * limit,
      },
      {
        $limit: limit,
      },
    ]);

    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

product();
