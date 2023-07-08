const JWT = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Authentication failed",
        });
      }

      req.body.userId = decoded.userId;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      error: error,
      message: "Authentication failed",
    });
  }
};

module.exports = authMiddleware;
