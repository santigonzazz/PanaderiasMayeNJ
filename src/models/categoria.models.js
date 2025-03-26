const mongoose = require("../config/database");

const schemaCategoria = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre de la categoría es obligatorio"]
    },
    descripcion: {
        type: String,
        required: [true, "La descripción de la categoría es obligatoria"]
    },
    estado: {
        type: String,
        enum: ["Postres", "Helados", "Sin Gluten", "Bolleria", "Bebidas", "Pan"],
        default: "Pan"
    }
}, { versionKey: false });

const Categoria = mongoose.model("Categoria", schemaCategoria); // Nombre con mayúscula para convenciones de MongoDB
module.exports = Categoria;
