import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
      await mongoose.connect(process.env.MONGO_URL);
      console.log(`Connected to MongoDB database ${mongoose.connection.host}`)
    }
    catch{
      console.log(`Mongoose Database Error ${error}`)
    }
}

export default connectDB;