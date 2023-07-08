const mongoose = require("mongoose")

const previousSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    lecture: {
        type: mongoose.Types.ObjectId,
        ref: 'Lecture',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Previous', previousSchema)
