const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        trim:true
    },
    age:{
        type:Number,
        required:true,
    },
    course:{
        type:String,
        enum:["MERN", "React", "Node", "Java", "Python"],
        required:true,
        trim:true
    },
    marks:{
        type:Number,
        default:0
    },
    city:{
        type:String,
        enum:["Kanpur", "Lucknow", "Delhi", "Noida", "Jaipur", "Mumbai"],
        required:true,
        trim:true
    },
    gender:{
        type:String,
        enum:["Male", "Female", "Others"],
        required:true,
        trim:true,
    },
    skills:{
        type:[String],
        default:[]
    },
    isPlaced:{
        type:Boolean,
        required:true,
        default:false
    },
    salary:{
        type:Number,
        default:0
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;