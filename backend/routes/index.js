const { Router } = require("express");
const { curriculumRouter } = require("./curriculum");

// Rest object
const router = Router();

router.use("/curriculum", curriculumRouter);

module.exports = { router };
