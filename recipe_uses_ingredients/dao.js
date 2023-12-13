import RecipeUsesIngredients from './model.js';

export const recipesUsesIngredient = (recipe, ingredient) => {
    return RecipeUsesIngredients.create({ recipe: recipe, ingredient: ingredient })
}

export const recipesUnusesIngredient = (recipe, ingredient) => {
    return RecipeUsesIngredients.deleteOne({ recipe: recipe, ingredient: ingredient })
}

export const findRecipesUsingIngredient = (ingredient) => {
    return RecipeUsesIngredients.find({ ingredient: ingredient }).populate("recipe")
}

export const findIngredientsUsedByRecipe = (recipe) => {
    return RecipeUsesIngredients.find({ recipe: recipe }).populate("ingredient")
}