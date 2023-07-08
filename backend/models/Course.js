const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
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
        ref: 'Lecture',
        required: true
    }]
});

module.exports = mongoose.model('Course', courseSchema);
