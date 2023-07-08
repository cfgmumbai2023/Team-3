const Lecture = require('../models/Lecture')
const Course = require('../models/Course')

/*
* {
*   mediaType: string
*   mediaPath: string
*   title: string
*   description: string
*   duration?: int
* }
*/
const addLecture = async (req, res) => {
    const { cId } = req.params;
    console.log(cId)
    const lecture = await Lecture.create({
        ...req.body
    });
    const course = await Course.findById(cId)
    course.lectures.push(lecture)
    await course.save()
    res.status(201).send({
        status: true
    })
}

const getLectures = async (req, res) => {
    const { cId } = req.params;
    const course = await Course.findById(cId).populate('lectures')
    res.status(201).send({
        lectures: course.lectures
    })
}

module.exports = {
    addLecture,
    getLectures
}