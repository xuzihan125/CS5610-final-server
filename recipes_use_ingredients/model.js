import recipesUseIngredientsSchema from './schema.js';
import mongoose from 'mongoose';

const RecipesUseIngredients = mongoose.model('recipes_use_ingredients', recipesUseIngredientsSchema);

export default RecipesUseIngredients;