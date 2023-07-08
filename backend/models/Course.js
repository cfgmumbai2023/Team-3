import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
    mediaType: {
        type: String, // 'video', 'ppt', 'document',
        required: true
    },
    mediaURL: {
        type: String, // URL to media
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    minimumQualification: {
        type: String,
        required: true
    },
    numberOfYears: {
        type: String,
        required: true
    },
    lectures: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }]
});

export default courseSchema;
