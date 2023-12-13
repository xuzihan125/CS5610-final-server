import likesSchema from "./schema.js";
import mongoose from "mongoose";

const Likes = mongoose.model("likes", likesSchema);

export default Likes;