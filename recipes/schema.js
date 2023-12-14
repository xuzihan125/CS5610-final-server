import mongoose from "mongoose";
import Likes from "../likes/model.js";
import RecipeUsesIngredient from "../recipes_use_ingredients/model.js";
import RecipeHasNutrient from "../recipes_have_nutrients/model.js";

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    spoonacularId: Number,
    image: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    cuisine: {
        type: String,
        enum: ['African', 'Asian', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese', 'Other'],
        default: 'Other'
    },
    ingredients: {
        type: [{
            ingredient: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ingredients'
            },
            quantity: {
                type: Number,
            },
            unit: String
        }]
    },
    nutrients: {
        type: [{
            nutrient: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'nutrients'
            },
            amount: Number,
            unit: String
        }]
    },
    instructions: {
        type: [{
            step: {
                type: Number,
                required: true
            },
            instruction: {
                type: String,
                required: true
            }
        }],
        required: true
    },
    isVegetarian: { type: Boolean, default: false },
    isGlutenFree: { type: Boolean, default: false }
}, { collection: 'recipes' })

recipeSchema.pre('remove', async function (next) {
    try {
        await Likes.deleteMany({ recipe: this._id });
        await RecipeUsesIngredient.deleteMany({ recipe: this._id });
        await RecipeHasNutrient.deleteMany({ recipe: this._id });
        next();
    } catch (error) {
        next(error);
    }
})

export default recipeSchema;