import mongoose from "mongoose";

const recipeUsesIngredientsSchema = new mongoose.Schema({
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipes'
    },
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ingredients'
    },

}, { collection: 'recipe_uses_ingredients' });

export default recipeUsesIngredientsSchema;