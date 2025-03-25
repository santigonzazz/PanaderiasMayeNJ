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
    precio: {
        type: mongoose.Types.Decimal128,
        default: 0.0,
        min: 0.0
        },
    descripcion: {
        type: String,
        required: true
    },
    disponibilidad: {
        type: String,
        enum: ["DISPONIBLE", "NO DISPONIBLE"],
        default: "DISPONIBLE"
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria',
        required: true
    }
}, {versionKey: false} )

const Producto = mongoose.model("producto", schemaProducto);
module.exports = Producto;