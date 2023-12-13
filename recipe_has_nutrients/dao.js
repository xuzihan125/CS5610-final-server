import RecipeHasNutrients from "./model.js";

export const recipesHasNutrient = (recipe, nutrient) => {
    return RecipeHasNutrients.create({ recipe: recipe, nutrient: nutrient })
}

export const recipesUnhasNutrient = (recipe, nutrient) => {
    return RecipeHasNutrients.deleteOne({ recipe: recipe, nutrient: nutrient })
}

export const findRecipesHavingNutrient = (nutrient) => {
    return RecipeHasNutrients.find({ nutrient: nutrient }).populate("recipe")
}

export const findNutrientsInRecipe = (recipe) => {
    return RecipeHasNutrients.find({ recipe: recipe }).populate("nutrient")
}