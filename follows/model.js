import followsSchema from "./schema.js";
import mongoose from "mongoose";

const Follows = mongoose.model("follows", followsSchema);

export default Follows;