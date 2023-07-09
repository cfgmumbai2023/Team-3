const express = require("express");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const { fileURLToPath } = require('url');
const { dirname } = require('path');
const multer = require('multer');
const fs = require('fs');
const imageDownloader = require("image-downloader");
const connectDB = require('./config/db.js');
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes.js");
const { router } = require("./routes/index.js");

// Rest object
const app = express();

// Dot config
dotenv.config();

connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5001',
}));
app.use(morgan('dev'));
app.use("/uploads", express.static(__dirname + '/uploads'))

app.use('/api', router);

app.get('/test', (req, res) => {
  res.json('test ok');
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
