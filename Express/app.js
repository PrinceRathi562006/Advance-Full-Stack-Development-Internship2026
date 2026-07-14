const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dns = require("dns");

const User = require("./model/Register");

dotenv.config();

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log("❌ MongoDB Connection Failed");
        console.log(err.message);
    });


// HOME

app.get("/", (req, res) => {
    res.send("Welcome to Express & MongoDB Server");
});


// SIGNUP 

app.post("/signup", async (req, res) => {
    try {

        const user = new User(req.body);

        await user.save();

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
});


// GET ALL USERS

app.get("/users", async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json({
            success: true,
            totalUsers: users.length,
            users
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});


// GET USER BY ID

app.get("/users/:id", async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});


// UPDATE USER

app.put("/users/:id", async (req, res) => {

    try {

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User Updated Successfully",
            updatedUser
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});


// DELETE USER

app.delete("/users/:id", async (req, res) => {

    try {

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});