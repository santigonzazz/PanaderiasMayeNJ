const mongoose = require("../config/database");
const Categoria = require("../models/categoria.models");

const schemaProducto = new mongoose.Schema({
    foto: { 
        type: String, 
        required: [true, "La foto del producto es obligatoria"] 
    },
    nombre: { 
        type: String, 
        required: [true, "El nombre del producto es obligatorio"],
        trim: true 
    },
    precio: { 
        type: mongoose.Types.Decimal128, 
        default: 0.0, 
        min: [0.0, "El precio no puede ser negativo"]
    },
    descripcion: { 
        type: String, 
        required: [true, "La descripción del producto es obligatoria"] 
    },
    disponibilidad: { 
        type: String, 
        enum: ["DISPONIBLE", "NO DISPONIBLE"], 
        default: "DISPONIBLE" 
    },
    categoria: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Categoria",  // Debe coincidir con el nombre exacto del modelo
        required: [true, "La categoría del producto es obligatoria"] 
    }
}, { versionKey: false });

const Producto = mongoose.model("Producto", schemaProducto);
module.exports = Producto;
