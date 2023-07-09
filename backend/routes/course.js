const { Router } = require("express");
const Curriculum = require('../models/Curriculum')
const { addCourse, subscribeToCourse } = require("../controllers/course");

const courseRouter = Router()

courseRouter.post("/", addCourse)
courseRouter.post("/:cId", subscribeToCourse)
courseRouter.get("/:curId", async (req, res) => {
    const { curId } = req.params
    const curriculum = await Curriculum.findById(curId).populate('courses')
    return res.status(200).send({
        courses: curriculum.courses
    })
})

module.exports = courseRouter