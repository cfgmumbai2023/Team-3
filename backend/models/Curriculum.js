import mongoose, { mongo } from "mongoose";

const curriculumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
    }]
})

export default curriculumSchema;
