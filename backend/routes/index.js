const { Router } = require("express");
const { curriculumRouter } = require("./curriculum");
const authRoutes = require("./authRoutes")
const lectureRouter = require("./lecture")
const courseRouter = require("./course")
const previousRouter = require('./previous')

// Rest object
const router = Router();

router.use("/curriculum", curriculumRouter);
router.use("/auth", authRoutes);
router.use("/lecture", lectureRouter)
router.use("/course", courseRouter)
router.use("/previous", previousRouter)

module.exports = { router };
