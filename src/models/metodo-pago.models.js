const mongoose = require("../config/database");
const Categoria = require("../models/categoria.models")
const schemaProducto = new mongoose.Schema({
    foto: {
        type: String,
        required: true 
    },
    
    nombre: {
        type: String,
        required: true
    },
    disponibilidad: {
        type: String,
        enum: ["DISPONIBLE", "NO DISPONIBLE"],
        default: "DISPONIBLE"
    },
}, {versionKey: false} )

const metodoPago = mongoose.model("metodoPago", schemaProducto);
module.exports = metodoPago;