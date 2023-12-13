import mongoose from "mongoose";

const likesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipes'
    },

}, { collection: 'likes' });

export default likesSchema;