import * as dao from "./dao.js";

function IngredientRoutes(app) {

    const findAllIngredients = async (req, res) => {
        const ingredients = await dao.findAllIngredients();
        res.json(ingredients);
    }

    const findIngredientById = async (req, res) => {
        const id = req.params.id;
        const ingredient = await dao.findIngredientById(id);
        res.json(ingredient);
    }

    const findIngredientByName = async (req, res) => {
        const name = req.params.name;
        const ingredient = await dao.findIngredientByName(name);
        res.json(ingredient);
    }

    const findIngredientsBySearchTerm = async (req, res) => {
        const searchTerm = req.params.searchTerm;
        const ingredients = await dao.findIngredientsBySearchTerm(searchTerm);
        res.json(ingredients);
    }

    const createIngredient = async (req, res) => {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ message: "Name is required" });
            return;
        }
        const existingIngredientByName = await dao.findIngredientByName(name);
        if (!existingIngredientByName) {
            const ingredient = await dao.createIngredient({ name: name });
            res.json(ingredient);
        }

    }

    const updateIngredient = async (req, res) => {
        const id = req.params.id;
        const newIngredient = req.body;
        const duplicateIngredientByName = await dao.findIngredientByName(newIngredient.name);
        if (duplicateIngredientByName && duplicateIngredientByName._id != id) {
            res.status(400).json({ message: "Ingredient already exists" });
            return;
        }
        if (!newIngredient.name) {
            res.status(400).json({ message: "Name is required" });
            return;
        }
        const ingredient = await dao.updateIngredient(id, newIngredient);
        res.json(ingredient);
    }

    const deleteIngredient = async (req, res) => {
        const id = req.params.id;
        const ingredient = await dao.deleteIngredient(id);
        res.json(ingredient);
    }

    app.get('/ingredients', findAllIngredients);
    app.get('/ingredients/:id', findIngredientById);
    app.get('/ingredients/name/:name', findIngredientByName);
    app.get('/ingredients/search/:searchTerm', findIngredientsBySearchTerm);
    app.post('/ingredients', createIngredient);
    app.put('/ingredients/:id', updateIngredient);
    app.delete('/ingredients/:id', deleteIngredient);
}

export default IngredientRoutes;