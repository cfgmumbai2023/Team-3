const mongoose = require("mongoose")

const trackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lecture: {
        type: mongoose.Types.ObjectId,
        ref: 'Lecture',
        required: true
    },
    seconds: {
        type: Number,
        default: 0
    }
})