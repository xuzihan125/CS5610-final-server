import mongoose from "mongoose";
import Follows from "../follows/model.js";
import Likes from "../likes/model.js";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    birthday: Date,
    isVegeterian: { type: Boolean, default: false },
    isGlutenIntolerant: { type: Boolean, default: false },
    role: {
        type: String,
        enum: ['ADMIN', 'PREMIUM_USER', 'USER'],
        default: 'USER'
    },
    createdOn: { type: Date, default: Date.now },
}, { collection: 'users_recipe' });

export default userSchema;
