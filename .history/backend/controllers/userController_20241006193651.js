import userModel from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

//login user

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
};

//register user

export const registerUser = async (req, res) => {};

module.exports = { loginUser, registerUser };
