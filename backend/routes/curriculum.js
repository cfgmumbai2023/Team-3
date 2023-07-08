const { Router } = require('express')
const { getCurriculums, postCurriculum, appendCourse } = require('../controllers/curriculum')

const curriculumRouter = Router()

curriculumRouter.get("/:cId", getCurriculums)
curriculumRouter.post("/", postCurriculum)
curriculumRouter.post("/append/:curId", appendCourse)

module.exports = { curriculumRouter }