import * as dao from './dao.js';

function RecipeRoutes(app) {
    const findRecipeById = async (req, res) => {
        const recipe = await dao.findRecipeById(req.params.recipeId);
        // console.log(req.params.recipeId);
        res.json(recipe);
    }

    const findAllRecipes = async (req, res) => {
        const recipes = await dao.findAllRecipes();
        res.json(recipes);
    }

    app.get('/recipes/:recipeId', findRecipeById);
    app.get('/recipes', findAllRecipes);
}

export default RecipeRoutes;