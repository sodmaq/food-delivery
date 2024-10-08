import express from "express";
import { loginUser, registerUser } from "../controllers/userController";

const userRouter = express.Router();

// Login user
userRouter.post("/login", loginUser);

// Register user
userRouter.post("/register", registerUser);

export default userRouter;
