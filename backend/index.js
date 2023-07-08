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

const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(morgan('dev'));

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
