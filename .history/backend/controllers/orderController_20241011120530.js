import orderModel from "../models/orderModel";
import userModel from "../models/userModel";
import Stripe from "stripe";

//placing user order for frontend

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const newOrder = new orderModel({
    userId: req.body.userId,
    items: req.body.items,
    amount: req.body.amount,
    address: req.body.address,
  });
  await newOrder.save();
  await userModel.findByIdAndUpdate(req.body.userId, {
    cartData: {},
  });
};

export default { placeOrder };
