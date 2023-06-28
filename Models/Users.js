import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill the name"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please fill the phoneNumber"],
  },
  address: {
    type: String,
    required: [true, "Please fill the address"],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Please select a gender"],
  },
  role: {
    type: String,
    enum: ["user", "staff", "admin"],
    required: [true, "Please select a role"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Please enter an email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

export default mongoose.model("User", UserSchema);
