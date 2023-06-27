import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  role: {
    type: String,
    enum: ["user", "staff", "admin"],
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

export default mongoose.model("User", UserSchema);
