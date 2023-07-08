import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    mediaType: {
        type: String,
        required: true,
    },
    mediaPath: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export default lectureSchema