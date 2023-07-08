const Course = require("../models/Course")

const addCourse = async (req, res) => {
    const course = await Course.create({
        ...req.body
    });
    res.status(201).send({
        course
    })
}

module.exports = {
    addCourse
}
