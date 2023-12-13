import * as dao from './dao.js';

function RecipeRoutes(app) {

    const findRecipeById = async (req, res) => {
        const recipe = await dao.findRecipeById(req.params.id);
        res.json(recipe);
    }

    const findAllRecipes = async (req, res) => {
        const recipes = await dao.findAllRecipes();
        res.json(recipes);
    }

    const findRecipeByTitle = async (req, res) => {
        const title = req.params.title;
        const recipe = await dao.findRecipeByTitle(title);
        res.json(recipe);
    }

    const findRecipeBySearchTerm = async (req, res) => {
        const searchTerm = req.params.searchTerm;
        const recipes = await dao.findRecipeBySearchTerm(searchTerm);
        res.json(recipes);
    }

    const createRecipe = async (req, res) => {
        const { title, spoonacularId, image, author, cuisine, ingredients, nutrients, instructions, isVegetarian, isGlutenFree, isDairyFree } = req.body;
        if (!title || !ingredients || !instructions) {
            res.status(400).json({ message: "Title, ingredients, and instructions are required" });
            return;
        }
        const existingRecipeByName = await dao.findRecipeByTitle(title);
        if (existingRecipeByName) {
            res.status(400).json({ message: "Recipe with the same title already exists" });
            return;
        }
        const recipe = await dao.createRecipe({ title, spoonacularId, image, author, cuisine, ingredients, nutrients, instructions, isVegetarian, isGlutenFree, isDairyFree });
        res.json(recipe);
    }

    const updateRecipe = async (req, res) => {
        const id = req.params.id;
        const newRecipe = req.body;
        const duplicateRecipeByName = await dao.findRecipeByTitle(newRecipe.title);
        if (duplicateRecipeByName && duplicateRecipeByName._id != id) {
            res.status(400).json({ message: "Recipe with the same title already exists" });
            return;
        }
        if (!newRecipe.title || !newRecipe.ingredients || !newRecipe.instructions) {
            res.status(400).json({ message: "Title, ingredients, and instructions are required" });
            return;
        }
        const recipe = await dao.updateRecipe(id, newRecipe);
        res.json(recipe);
    }

    const deleteRecipe = async (req, res) => {
        const id = req.params.id;
        const recipe = await dao.deleteRecipe(id);
        res.json(recipe);
    }

    const findAllRecipesByAuthorId = async (req, res) => {
        const authorId = req.params.authorId;
        const recipes = await dao.findAllRecipesByAuthorId(authorId);
        res.json(recipes);
    }

    const findRecipeBySpoonacularId = async (req, res) => {
        const spoonacularId = req.params.spoonacularId;
        const recipe = await dao.findRecipeBySpoonacularId(spoonacularId);
        res.json(recipe);
    }

    app.post('/recipes', createRecipe);
    app.put('/recipes/:id', updateRecipe);
    app.delete('/recipes/:id', deleteRecipe);
    app.get('/recipes/title/:title', findRecipeByTitle);
    app.get('/recipes/search/:searchTerm', findRecipeBySearchTerm);
    app.get('/recipes/:id', findRecipeById);
    app.get('/recipes', findAllRecipes);
    app.get('/recipes/author/:authorId', findAllRecipesByAuthorId);
    app.get('/recipes/spoonacular/:spoonacularId', findRecipeBySpoonacularId);
}

export default RecipeRoutes;