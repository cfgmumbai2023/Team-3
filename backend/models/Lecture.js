const mongoose = require("mongoose")

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
    duration: {
        type: Number // fill it manually
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Lecture', lectureSchema)