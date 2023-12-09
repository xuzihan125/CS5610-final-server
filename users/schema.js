import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    birthday: Date,
    isVegeterian: { type: Boolean, default: false },
    isVegan: { type: Boolean, default: false },
    isLactoseIntolerant: { type: Boolean, default: false },
    isGlutenIntolerant: { type: Boolean, default: false },
    role: {
        type: String,
        enum: ['ADMIN', 'PREMIUM_USER', 'REGULAR_USER'],
        default: 'REGULAR_USER'
    },
    createdOn: { type: Date, default: Date.now },
}, { collection: 'users' });

export default userSchema;