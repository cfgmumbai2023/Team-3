const { Router } = require("express");
const { curriculumRouter } = require("./curriculum");
const {authRoutes}= require("./authRoutes")
const { fileUpload } = require("../multer");

// Rest object
const router = Router();

router.use("/curriculum", curriculumRouter);
router.use("/auth", authRoutes);


router.post('/upload', fileUpload.single('test'))

module.exports = { router };
