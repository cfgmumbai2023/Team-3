import express from "express";
import cors from "cors";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';
import fs from 'fs';
import imageDownloader from "image-downloader";
import connectDB from './config/db.js'
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//rest object
const app = express();

//dot config
dotenv.config();

connectDB();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
  }));
app.use(morgan('dev'))


app.get('/test', (req, res) => {
    res.json('test ok');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
