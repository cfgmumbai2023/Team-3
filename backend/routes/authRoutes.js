const express = require("express");

const { registerController, loginController, currentUserController } = require("../controllers/authController.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/current-user", authMiddleware, currentUserController); // Apply the authMiddleware to the route

module.exports = router;
