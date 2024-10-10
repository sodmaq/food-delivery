import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
    userId: {
        type: String,
        required: true,
    },
    food: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
)