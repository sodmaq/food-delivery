import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.id]) {
      cartData[req.body.id] = 1;
    } else {
      cartData[req.body.id] += 1;
    }

    await userModel.findOneAndUpdate({ _id: req.body.userId }, { cartData });
    res.json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;

    // Check if the item exists in the cart
    if (cartData[req.body.id] && cartData[req.body.id] > 0) {
      cartData[req.body.id] -= 1;

      // If the quantity reaches 0, remove the item
      if (cartData[req.body.id] === 0) {
        delete cartData[req.body.id];
      }

      await userModel.findByIdAndUpdate(
        { _id: req.body.userId },
        { cartData },
        { new: true }
      );
      return res.json({ success: true, message: "Item removed from cart" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Item not in cart or already 0" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//fetch user cart
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, data: cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, removeFromCart, getCart };
