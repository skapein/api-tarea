import mongoose from "mongoose";

export const AutoresSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    nacionalidad: { type: String, required: true },
    anio_nacimiento: { type: Date, required: true },
    genero: { type: String, required: true }
});

AutoresSchema.index({ nombre: 1 }, { unique: true });
