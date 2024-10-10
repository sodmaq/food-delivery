import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dB_url = process.env.DB_URL;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dB_url, {
      connectTimeoutMS: 5000,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
