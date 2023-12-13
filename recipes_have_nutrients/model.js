import recipesHaveNutrientsSchema from './schema.js';
import mongoose from 'mongoose';

const RecipesHaveNutrients = mongoose.model('recipes_have_nutrients', recipesHaveNutrientsSchema);

export default RecipesHaveNutrients;