const mongoose = require("mongoose");

const curriculumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
    }]
})

module.exports = mongoose.model('Curriculum',  curriculumSchema);
