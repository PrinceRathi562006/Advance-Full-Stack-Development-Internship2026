const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    age: {
      type: Number,
      min: 16,
      max: 100,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    address: {
      city: {
        type: String,
        trim: true,
      },
      state: {
        type: String,
        trim: true,
      },
      country: {
        type: String,
        default: "India",
      },
      pincode: {
        type: Number,
      },
    },

    college: {
      type: String,
      required: true,
      trim: true,
    },

    course: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      enum: [
        "CSE",
        "IT",
        "ECE",
        "EEE",
        "ME",
        "CE",
        "BCA",
        "MCA",
        "BBA",
        "MBA",
        "Other",
      ],
    },

    year: {
      type: Number,
      min: 1,
      max: 4,
    },

    rollNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    cgpa: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },

    skills: {
      type: [String],
      default: [],
    },

    isPlaced: {
      type: Boolean,
      default: false,
    },

    company: {
      type: String,
      default: "",
    },

    package: {
      type: Number,
      default: 0,
    },

    role: {
      type: String,
      enum: ["Student", "Admin", "Teacher"],
      default: "Student",
    },

    profilePic: {
      type: String,
      default: "",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);