const { Router } = require("express");
const { curriculumRouter } = require("./curriculum");
const authRoutes = require("./authRoutes")
const lectureRouter = require("./lecture")
const courseRouter = require("./course")

// Rest object
const router = Router();

router.use("/curriculum", curriculumRouter);
router.use("/auth", authRoutes);
router.use("/lecture", lectureRouter)
router.use("/course", courseRouter)

module.exports = { router };
