import Ingredient from './model.js';

export const findAllIngredients = () => {
    return Ingredient.find()
}

export const findIngredientById = (id) => {
    return Ingredient.findById(id)
}

export const findIngredientByName = (name) => {
    return Ingredient.find({ name: name })
}

export const findIngredientsBySearchTerm = (searchTerm) => {
    return Ingredient.find({ name: { $regex: searchTerm, $options: 'i' } })
}

export const createIngredient = (ingredient) => {
    return Ingredient.create(ingredient)
}

export const updateIngredient = (id, ingredient) => {
    return Ingredient.updateOne({ _id: id }, { $set: ingredient })
}

export const deleteIngredient = (id) => {
    return Ingredient.deleteOne({ _id: id })
}

