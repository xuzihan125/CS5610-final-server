import RecipesUseIngredients from './model.js';

export const recipeUsesIngredient = (recipe, ingredient) => {
    return RecipesUseIngredients.create({ recipe: recipe, ingredient: ingredient })
}

export const recipeUnusesIngredient = (recipe, ingredient) => {
    return RecipesUseIngredients.deleteOne({ recipe: recipe, ingredient: ingredient })
}

export const findRecipesUsingIngredient = (ingredient) => {
    return RecipesUseIngredients.find({ ingredient: ingredient }).populate("recipe")
}

export const findIngredientsUsedByRecipe = (recipe) => {
    return RecipesUseIngredients.find({ recipe: recipe }).populate("ingredient")
}