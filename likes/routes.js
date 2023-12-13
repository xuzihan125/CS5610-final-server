import * as dao from "./dao.js";

function LikesRoutes(app) {

    const userLikesRecipe = async (req, res) => {
        const user = req.session["currentUser"]._id;
        const recipe = req.params.recipe;
        const likes = await dao.userLikesRecipe(user, recipe);
        res.json(likes);
    }

    const userUnlikesRecipe = async (req, res) => {
        const user = req.session["currentUser"]._id;
        const recipe = req.params.recipe;
        const status = await dao.userUnlikesRecipe(user, recipe);
        res.json(status);
    }

    const findUsersLikingRecipe = async (req, res) => {
        const recipe = req.params.recipe;
        const users = await dao.findUsersLikingRecipe(recipe);
        res.json(users);
    }

    const findRecipesLikedByUser = async (req, res) => {
        const user = req.params.user;
        const recipes = await dao.findRecipesLikedByUser(user);
        res.json(recipes);
    }

    app.post("/users/:user/likes/:recipe", userLikesRecipe);
    app.delete("/users/:user/likes/:recipe", userUnlikesRecipe);
    app.get("/recipes/:recipe/likes", findUsersLikingRecipe);
    app.get("/users/:user/likes", findRecipesLikedByUser);
}

export default LikesRoutes;