const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongoose Database Error ${error}`);
  }
};

module.exports = connectDB;
