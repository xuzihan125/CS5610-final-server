import mongoose from "mongoose";

const recipesHaveNutrientsSchema = new mongoose.Schema({
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipes'
    },
    nutrient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nutrients'
    }
}, { collection: 'recipes_have_nutrients' });

export default recipesHaveNutrientsSchema;

