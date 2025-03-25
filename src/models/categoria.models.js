const mongoose = require("../config/database");

const schemaCategoria = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        enum: ["Postres", "Helados", "Sin Gluten", "Bolleria", "Bebidas", "Pan"],
        default: "Pan"
    }
}, { versionKey: false });

const Categoria = mongoose.model("categoria", schemaCategoria);
module.exports = Categoria;