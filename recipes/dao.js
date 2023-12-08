import Recipe from "./model.js";
import Ingredient from "../ingredients/model.js";

export const createRecipe = (recipe) => Recipe.create(recipe);
export const findAllRecipes = () => model.find();
export const findAllRecipesByAuthorId = (authorId) => Recipe.find({ author: authorId }).populate('author');
export const findRecipeById = (recipeId) => Recipe.findById(recipeId).populate("ingredients.ingredient");
export const findRecipeByName = (recipeName) => Recipe.find({ title: recipeName });
export const updateRecipe = (recipeId, recipe) => Recipe.updateOne({ _id: recipeId }, { $set: recipe });
export const deleteRecipe = (recipeId) => Recipe.deleteOne({ _id: recipeId });

