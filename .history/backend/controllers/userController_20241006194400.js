import userModel from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

//login user

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
};

const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
  expiresIn: "7d",
});

//register user

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email" });
    }

    if (password.lenght < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ success: true, message: "User created successfully" });
  } catch (error) {}
};

module.exports = { loginUser, registerUser };
