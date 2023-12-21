import mongoose from "mongoose";

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
    instructions: String,
    isVegetarian: { type: Boolean, default: false },
    isGlutenFree: { type: Boolean, default: false }
}, { collection: 'recipes' })

export default recipeSchema;