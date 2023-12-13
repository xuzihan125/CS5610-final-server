import Nutrient from "./model.js";

export const findAllNutrients = () => {
    return Nutrient.find()
}

export const findNutrientById = (id) => {
    return Nutrient.findById(id)
}

export const findNutrientByName = (name) => {
    return Nutrient.find({ name: name })
}

export const findNutrientBySearchTerm = (searchTerm) => {
    return Nutrient.find({ name: { $regex: searchTerm, $options: 'i' } })
}

export const createNutrient = (nutrient) => {
    return Nutrient.create(nutrient)
}

export const updateNutrient = (id, nutrient) => {
    return Nutrient.updateOne({ _id: id }, { $set: nutrient })
}

export const deleteNutrient = (id) => {
    return Nutrient.deleteOne({ _id: id })
}