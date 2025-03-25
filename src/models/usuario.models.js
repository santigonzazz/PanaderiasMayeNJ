const mongoose = require("../config/database");

const schemaUsuario = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
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
    direccion: {
        type: String,
        blank: true
    },
    rol: {
        type: String,
        enum: ["EMPLEADO", "CLIENTE"],
        default: "CLIENTE"
    }
}, { versionKey: false });

const Usuario = mongoose.model("usuario", schemaCategoria);
module.exports = Usuario;