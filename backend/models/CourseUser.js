const mongoose = require('mongoose')

const courseUserSchema = new mongoose.Schema({
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
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('CourseUser', courseUserSchema)
