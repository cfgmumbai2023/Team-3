const { Router } = require("express");
const { addCourse } = require("../controllers/course")

const courseRouter = Router()

courseRouter.post("/", addCourse)

module.exports = courseRouter