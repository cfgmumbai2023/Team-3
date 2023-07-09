const Course = require("../models/Course")
const CourseUser = require("../models/CourseUser")
const User = require("../models/userModel")

// A - E, A is 0, Z is max
const alpha = {
    A: 0,
    B: 1, 
    C: 2, 
    D: 3,
    E: 4
}

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
    console.log(userId)
    const course = await Course.findById(cId)
    const user = await User.findById(userId)
    // const courseReq = alpha[course.minimumQualification]
    // const userReq = alpha[user.vbbb]

    // ! Logic to determine if possible to approve subscription
    console.log(user)
    if (course.numberOfYears > user.yearsOfExperience) {
        return res.status(401).send({
            message: "Not eligible"
        })
    }

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
