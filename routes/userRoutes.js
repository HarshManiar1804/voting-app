const express = require("express");
const router = express.Router();
const User = require("../model/user");
const { jwtAuthMiddleware, generateToken } = require("../middleware/jwt");

// signup route
router.post("/signup", async (req, res) => {
  try {
    const data = req.body; // body contains the user data

    const newUser = new User(data); // create a new user object
    const response = await newUser.save(); // save the user to the database

    const payload = {
      id: response._id,
    };
    console.log(JSON.stringify(payload));
    const token = generateToken(payload);
    console.log("Generated token is ", token);
    res.status(200).json({ response: response, token: token });
    console.log("User created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
});

// login route

router.post("/login", async (req, res) => {
  try {
    const { aadharCardNumber, password } = req.body;

    const user = await User.findOne({ aadharCardNumber: aadharCardNumber });

    if(!user) return res.status(404).json("User not found"); // user not founduser
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
});
