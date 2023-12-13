import recipeUsesIngredientsSchema from './schema.js';
import mongoose from 'mongoose';

const RecipeUsesIngredients = mongoose.model('recipe_uses_ingredients', recipeUsesIngredientsSchema);

export default RecipeUsesIngredients;