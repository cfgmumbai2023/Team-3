const { Router } = require("express");
const { curriculumRouter } = require("./curriculum");
const {authRoutes}= require("./authRoutes")
// Rest object
const router = Router();

router.use("/curriculum", curriculumRouter);
router.use("/auth", authRoutes);


module.exports = { router };
