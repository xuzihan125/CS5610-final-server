import * as dao from "./dao.js";

function RecipeHasNutrientsRoutes(app) {

    const recipesHasNutrient = async (req, res) => {
        const recipe = req.params.recipe;
        const nutrient = req.params.nutrient;
        const status = await dao.recipesHasNutrient(recipe, nutrient);
        res.json(status);
    }

    const recipesUnhasNutrient = async (req, res) => {
        const recipe = req.params.recipe;
        const nutrient = req.params.nutrient;
        const status = await dao.recipesUnhasNutrient(recipe, nutrient);
        res.json(status);
    }

    const findRecipesHavingNutrient = async (req, res) => {
        const nutrient = req.params.nutrient;
        const recipes = await dao.findRecipesHavingNutrient(nutrient);
        res.json(recipes);
    }

    const findNutrientsInRecipe = async (req, res) => {
        const recipe = req.params.recipe;
        const nutrients = await dao.findNutrientsInRecipe(recipe);
        res.json(nutrients);
    }

    app.post("/recipes/:recipe/nutrients/:nutrient", recipesHasNutrient);
    app.delete("/recipes/:recipe/nutrients/:nutrient", recipesUnhasNutrient);
    app.get("/recipes/:recipe/nutrients", findNutrientsInRecipe);
    app.get("/nutrients/:nutrient/recipes", findRecipesHavingNutrient);

}

export default RecipeHasNutrientsRoutes;