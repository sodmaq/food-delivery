import userModel from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

//login user

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
};

//register user

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
  } catch (error) {}
};

module.exports = { loginUser, registerUser };
