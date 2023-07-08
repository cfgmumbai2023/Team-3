const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "coach", "instructor"],
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is requied"],
    },
    license: {
      type: String,
      required: function () {
        if (this.role === "coach") {
          return true;
        }
        return false;
      },
    },
    fileURL: {
      type: String, // Change the data type based on your requirements
      required: function () {
        if (this.role === "coach") {
          return true;
        }
        return false;
      },
    },
    yearsOfExperience: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
