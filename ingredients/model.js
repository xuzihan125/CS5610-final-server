import mongoose from "mongoose";
import schema from "./schema.js";

const Ingredient = mongoose.model("ingredients", schema);

export default Ingredient;