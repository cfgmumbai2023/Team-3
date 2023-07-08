const Course = require("../models/Course")
const CourseUser = require("../models/CourseUser")

const addCourse = async (req, res) => {
    const course = await Course.create({
        ...req.body
    });
    res.status(201).send({
        course
    })
}

const subscribeToCourse = async (req, res) => {
    const { cId } = req.params;
    const { userId } = req.body;

    // ! Logic to determine if possible to approve subscription

    const subscription = await CourseUser.create({
        course: cId,
        user: userId
    })

    res.status(201).send({
        subscription
    })
}

module.exports = {
    addCourse,
    subscribeToCourse
}
