import mongoose from "mongoose";

const recipesUseIngredientsSchema = new mongoose.Schema({
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipes'
    },
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ingredients'
    },

}, { collection: 'recipes_use_ingredients' });

export default recipesUseIngredientsSchema;