import * as dao from "./dao.js";

function RecipesUseIngredientsRoutes(app) {
    const recipesUsesIngredient = async (req, res) => {
        const recipe = req.params.recipe;
        const ingredient = req.params.ingredient;
        const status = await dao.recipesUsesIngredient(recipe, ingredient);
        res.json(status);
    }

    const recipesUnusesIngredient = async (req, res) => {
        const recipe = req.params.recipe;
        const ingredient = req.params.ingredient;
        const status = await dao.recipesUnusesIngredient(recipe, ingredient);
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

    app.post("/recipes/:recipe/ingredients/:ingredient", recipesUsesIngredient);
    app.delete("/recipes/:recipe/ingredients/:ingredient", recipesUnusesIngredient);
    app.get("/recipes/:recipe/ingredients", findIngredientsUsedByRecipe);
    app.get("/ingredients/:ingredient/recipes", findRecipesUsingIngredient);
}

export default RecipesUseIngredientsRoutes;