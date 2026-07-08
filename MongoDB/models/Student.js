const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            min:3
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        age:{
            type:Number,
            required:true
        },
        course:{
            type:String,
        },
        address:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:Number,
            required:true,
            unique:true,
            min:10
        }
    }
)

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;