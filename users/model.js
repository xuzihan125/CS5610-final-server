import userSchema from "./schema.js";
import mongoose from "mongoose";
const User = mongoose.model("users", userSchema);
export default User;