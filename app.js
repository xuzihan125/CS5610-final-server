import express from 'express';
import session from 'express-session';
import cors from 'cors';
import 'dotenv/config';
import mongoose from "mongoose";
import RecipeRoutes from './recipes/routes.js';
import UserRoutes from './users/routes.js';
import FollowsRoutes from './follows/routes.js';
import IngredientRoutes from './ingredients/routes.js';
import RecipesUseIngredientsRoutes from './recipes_use_ingredients/routes.js';
import RecipesHaveNutrientsRoutes from './recipes_have_nutrients/routes.js';
import LikesRoutes from './likes/routes.js';
import NutrientRoutes from './nutrients/routes.js';

mongoose.disconnect();
mongoose.connect("mongodb://127.0.0.1:27017/recipe");
const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(express.json());

RecipeRoutes(app);
UserRoutes(app);
FollowsRoutes(app);
IngredientRoutes(app);
NutrientRoutes(app);
RecipesUseIngredientsRoutes(app);
RecipesHaveNutrientsRoutes(app);
LikesRoutes(app);

app.listen(process.env.PORT || 4000);