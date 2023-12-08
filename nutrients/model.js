import mongoose from "mongoose";
import schema from "./schema.js";

const Nutrient = mongoose.model("nutrients", schema);

export default Nutrient;