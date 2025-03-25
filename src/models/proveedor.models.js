const mongoose = require("../config/database");
const Producto = require("../models/producto.models")
const schemaCategoria = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    catalogoProductos: {
        type: String,
        required: true
    }
}, { versionKey: false });

const Proveedor = mongoose.model("proveedor", schemaCategoria);
module.exports = Proveedor;