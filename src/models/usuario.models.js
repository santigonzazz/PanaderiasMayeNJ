const mongoose = require("../config/database");

const schemaUsuario = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        trim: true
    },
    apellido: {
        type: String,
        required: [true, "El apellido es obligatorio"],
        trim: true
    },
    celular: {
        type: String,
        required: [true, "El número de celular es obligatorio"],
        match: [/^\d{10}$/, "El número de celular debe tener 10 dígitos"]
    },
    email: {
        type: String,
        required: [true, "El correo electrónico es obligatorio"],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Debe ser un correo electrónico válido"]
    },
    clave: {
        type: String,
        required: [true, "La clave es obligatoria"],
        minlength: [6, "La clave debe tener al menos 6 caracteres"]
    },
    direccion: {
        type: String,
        default: "",
        trim: true
    },
    rol: {
        type: String,
        enum: ["EMPLEADO", "CLIENTE"],
        default: "CLIENTE"
    }
}, { versionKey: false });

const Usuario = mongoose.model("Usuario", schemaUsuario);
module.exports = Usuario;
