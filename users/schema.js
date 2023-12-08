import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    birthday: Date,
    role: {
        type: String,
        enum: ['ADMIN', 'PREMIUM_USER', 'REGULAR_USER'],
        default: 'REGULAR_USER'
    },
}, { collection: 'users' });

export default userSchema;