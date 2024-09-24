import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const uploads = multer({ storage: storage }).single("image");

foodRouter.post("/add", uploads, addFood);
foodRouter.get("/list", listFood);
foodRouter.delete("/remove/:id", removeFood);

export default foodRouter;
