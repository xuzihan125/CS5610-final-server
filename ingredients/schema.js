import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    usedBy: [
        {
            recipe: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'recipes'
            },
        }
    ]
}, { collection: 'ingredients' })

export default ingredientSchema;