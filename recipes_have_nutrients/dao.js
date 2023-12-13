import RecipesHaveNutrients from "./model.js";

export const recipesHasNutrient = (recipe, nutrient) => {
    return RecipesHaveNutrients.create({ recipe: recipe, nutrient: nutrient })
}

export const recipesUnhasNutrient = (recipe, nutrient) => {
    return RecipesHaveNutrients.deleteOne({ recipe: recipe, nutrient: nutrient })
}

export const findRecipesHavingNutrient = (nutrient) => {
    return RecipesHaveNutrients.find({ nutrient: nutrient }).populate("recipe")
}

export const findNutrientsInRecipe = (recipe) => {
    return RecipesHaveNutrients.find({ recipe: recipe }).populate("nutrient")
}