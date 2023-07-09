const mongoose = require("mongoose");

const curriculumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }]
})

module.exports = mongoose.model('Curriculum',  curriculumSchema);
