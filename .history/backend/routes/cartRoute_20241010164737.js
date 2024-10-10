import express from "express";

import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middlewares/auth.js";

const cartRouter = express.Router();

//add items to user cart
cartRouter.post("/add", authMiddleware, addToCart);

//remove items from user cart
cartRouter.post("/remove", authMiddleware, removeFromCart);

//fetch user cart
cartRouter.post("/", authMiddleware, getCart);

export default cartRouter;
