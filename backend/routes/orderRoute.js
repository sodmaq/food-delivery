import express from "express";
import authMiddleware from "../middlewares/auth.js";
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

//place order
orderRouter.post("/place", authMiddleware, placeOrder);

export default orderRouter;
