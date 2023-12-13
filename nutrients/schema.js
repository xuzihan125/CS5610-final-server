import mongoose from 'mongoose';

const nutrientSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
}, { collection: 'nutrients' })

export default nutrientSchema;