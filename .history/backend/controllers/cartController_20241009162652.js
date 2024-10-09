import userModel from "../models/userModel";

//add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
  } catch (error) {}
};

//remove items from user cart
const removeFromCart = async (req, res) => {};

//fetch user cart
const getCart = async (req, res) => {};

export { addToCart, removeFromCart, getCart };
