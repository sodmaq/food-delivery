import userModel from "../models/userModel";

//add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findOneAndUpdate(req.body.userId, { cartData });
  } catch (error) {}
};

//remove items from user cart
const removeFromCart = async (req, res) => {};

//fetch user cart
const getCart = async (req, res) => {};

export { addToCart, removeFromCart, getCart };
