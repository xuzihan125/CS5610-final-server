import * as dao from './dao.js';

function NutrientRoutes(app) {

    const findAllNutrients = async (req, res) => {
        const nutrients = await dao.findAllNutrients();
        res.json(nutrients);
    }

    const findNutrientById = async (req, res) => {
        const id = req.params.id;
        const nutrient = await dao.findNutrientById(id);
        res.json(nutrient);
    }

    const findNutrientByName = async (req, res) => {
        const name = req.params.name;
        const nutrient = await dao.findNutrientByName(name);
        res.json(nutrient);
    }

    const findNutrientsBySearchTerm = async (req, res) => {
        const searchTerm = req.params.searchTerm;
        const nutrients = await dao.findNutrientsBySearchTerm(searchTerm);
        res.json(nutrients);
    }

    const createNutrient = async (req, res) => {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ message: "Name is required" });
            return;
        }
        const existingNutrientByName = await dao.findNutrientByName(name);
        if (!existingNutrientByName) {
            const nutrient = await dao.createNutrient({ name: name });
            res.json(nutrient);
        }
    }

    const updateNutrient = async (req, res) => {
        const id = req.params.id;
        const newNutrient = req.body;
        const duplicateNutrientByName = await dao.findNutrientByName(newNutrient.name);
        if (duplicateNutrientByName && duplicateNutrientByName._id != id) {
            res.status(400).json({ message: "Nutrient already exists" });
            return;
        }
        if (!newNutrient.name) {
            res.status(400).json({ message: "Name is required" });
            return;
        }
        const nutrient = await dao.updateNutrient(id, newNutrient);
        res.json(nutrient);
    }

    const deleteNutrient = async (req, res) => {
        const id = req.params.id;
        const nutrient = await dao.deleteNutrient(id);
        res.json(nutrient);
    }

    app.get('/nutrients', findAllNutrients);
    app.get('/nutrients/:id', findNutrientById);
    app.get('/nutrients/name/:name', findNutrientByName);
    app.get('/nutrients/search/:searchTerm', findNutrientsBySearchTerm);
    app.post('/nutrients', createNutrient);
    app.put('/nutrients/:id', updateNutrient);
    app.delete('/nutrients/:id', deleteNutrient);
}

export default NutrientRoutes;