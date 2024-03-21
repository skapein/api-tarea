import mongoose from "mongoose";

export const AutoresSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    nacionalidad: { type: String, required: true },
    genero: { type: String, required: true },
    nacionalidad: { type: String, required: true }
});

ActoresSchema.index({ nombre: 1 }, { unique: true });
