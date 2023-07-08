const { Router } = require("express");
const { addCourse, subscribeToCourse } = require("../controllers/course")

const courseRouter = Router()

courseRouter.post("/", addCourse)
courseRouter.post("/:cId", subscribeToCourse)

module.exports = courseRouter