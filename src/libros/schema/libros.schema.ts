import mongoose from "mongoose";

export const LibrosSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    genero: { type: String, required: true },
    anio_publicación: { type: Date, required: true },
    editorial: { type: String, required: true }
});

LibrosSchema.index({ nombre: 1 }, { unique: true });
