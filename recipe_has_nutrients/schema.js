import mongoose from "mongoose";

const recipeHasNutrientsSchema = new mongoose.Schema({
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipes'
    },
    nutrient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nutrients'
    }
}, { collection: 'recipe_has_nutrients' });

export default recipeHasNutrientsSchema;

