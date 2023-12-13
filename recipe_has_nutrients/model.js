import recipeHasNutrientsSchema from './schema.js';
import mongoose from 'mongoose';

const RecipeHasNutrients = mongoose.model('recipe_has_nutrients', recipeHasNutrientsSchema);

export default RecipeHasNutrients;