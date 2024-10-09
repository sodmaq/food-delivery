import express from "express";

import {
  addCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

//add items to user cart
cartRouter.post("/add", addCart);

//remove items from user cart
cartRouter.delete("/remove/:id", removeFromCart);

//fetch user cart
cartRouter.get("/", getCart);
