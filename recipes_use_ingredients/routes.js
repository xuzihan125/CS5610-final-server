import * as dao from "./dao.js";

function RecipesUseIngredientsRoutes(app) {
    const recipeUsesIngredient = async (req, res) => {
        const recipe = req.params.recipe;
        const ingredient = req.params.ingredient;
        const status = await dao.recipeUsesIngredient(recipe, ingredient);
        res.json(status);
    }

    const recipeUnusesIngredient = async (req, res) => {
        const recipe = req.params.recipe;
        const ingredient = req.params.ingredient;
        const status = await dao.recipeUnusesIngredient(recipe, ingredient);
        res.json(status);
    }

    const findRecipesUsingIngredient = async (req, res) => {
        const ingredient = req.params.ingredient;
        const recipes = await dao.findRecipesUsingIngredient(ingredient);
        res.json(recipes);
    }

    const findIngredientsUsedByRecipe = async (req, res) => {
        const recipe = req.params.recipe;
        const ingredients = await dao.findIngredientsUsedByRecipe(recipe);
        res.json(ingredients);
    }

    app.post("/recipes/:recipe/ingredients/:ingredient", recipeUsesIngredient);
    app.delete("/recipes/:recipe/ingredients/:ingredient", recipeUnusesIngredient);
    app.get("/recipes/:recipe/ingredients", findIngredientsUsedByRecipe);
    app.get("/ingredients/:ingredient/recipes", findRecipesUsingIngredient);
}

export default RecipesUseIngredientsRoutes;