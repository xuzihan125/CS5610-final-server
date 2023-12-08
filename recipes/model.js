import mongoose from "mongoose";
import schema from "./schema.js";

const Recipe = mongoose.model("recipes", schema);

export default Recipe;