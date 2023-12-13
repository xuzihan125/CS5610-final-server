import Recipe from "./model.js";
import Ingredient from "../ingredients/model.js";
import User from "../users/model.js";
import Nutrient from "../nutrients/model.js";

export const createRecipe = (recipe) => {
    return Recipe.create(recipe);
}
export const findAllRecipes = () => Recipe.find().populate('author').populate('ingredients.ingredient').populate('nutrients.nutrient');
export const findAllRecipesByAuthorId = (authorId) => Recipe.find({ author: authorId }).populate('author').populate('ingredients.ingredient').populate('nutrients.nutrient');
export const findRecipeById = (recipeId) => Recipe.findById(recipeId).populate('author').populate("ingredients.ingredient").populate('nutrients.nutrient');
export const findRecipeByTitle = (recipeName) => Recipe.find({ title: recipeName }).populate('author').populate("ingredients.ingredient").populate('nutrients.nutrient');
export const findRecipeBySearchTerm = (searchTerm) => Recipe.find({ title: { $regex: searchTerm, $options: 'i' } }).populate('author').populate("ingredients.ingredient").populate('nutrients.nutrient');
export const findRecipeBySpoonacularId = (spoonacularId) => Recipe.findOne({ spoonacularId: spoonacularId }).populate('author').populate("ingredients.ingredient").populate('nutrients.nutrient');
export const updateRecipe = (recipeId, recipe) => Recipe.updateOne({ _id: recipeId }, { $set: recipe });
export const deleteRecipe = (recipeId) => Recipe.deleteOne({ _id: recipeId });

