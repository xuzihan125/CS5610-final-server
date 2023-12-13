import Likes from "./model.js";

export const userLikesRecipe = (user, recipe) => {
    return Likes.create({ user: user, recipe: recipe })
}

export const userUnlikesRecipe = (user, recipe) => {
    return Likes.deleteOne({ user: user, recipe: recipe })
}

export const findUsersLikingRecipe = (recipe) => {
    return Likes.find({ recipe: recipe }).populate("user")
}

export const findRecipesLikedByUser = (user) => {
    return Likes.find({ user: user }).populate("recipe")
}