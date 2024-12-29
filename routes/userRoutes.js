const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/signup", async (req, res) => {
  try {
    const data = req.body; // body contains the user data

    const newUser = new User(data); // create a new user object
    const response = await newUser.save(); // save the user to the database

    res.status(200).json(response);
    console.log("User created successfully");
  } catch (error) {}
});
