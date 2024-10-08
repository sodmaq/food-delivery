import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

//login user
userRouter.post("/login", loginUser);

//register user
userRouter.post("/register", registerUser);

export default userRouter;
