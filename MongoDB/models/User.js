const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      min: 18,
      max: 60,
    },

    city: {
      type: String,
    },

    skills: [
      {
        type: String,
      },
    ],

    wishlist: [
      {
        type: String,
      },
    ],

    cart: [cartSchema],

    likedPosts: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);