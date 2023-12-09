import express from 'express';
import 'dotenv/config';
import mongoose from "mongoose";
import cors from 'cors';
import RecipeRoutes from './recipes/routes.js';
import UserRoutes from './users/routes.js';

mongoose.disconnect();
mongoose.connect("mongodb://127.0.0.1:27017/recipe");
const app = express();
app.use(cors());
app.use(express.json());
RecipeRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);