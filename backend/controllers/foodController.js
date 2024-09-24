import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    image: image_filename,
    price: req.body.price,
    category: req.body.category,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

//all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ total: foods.length, success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findByIdAndDelete(req.params.id);
    fs.unlinkSync(`uploads/${food.image}`);
    res.json({ success: true, message: "Food removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export { addFood, listFood, removeFood };
