const mongoose = require("../config/database");

const schemaMetodoPago = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del método de pago es obligatorio"]
    },
    descripcion: {
        type: String,
        required: [true, "La descripción es obligatoria"]
    },
    estado: {
        type: String,
        enum: ["ACTIVO", "INACTIVO"],
        default: "ACTIVO"
    }
}, { versionKey: false });

const MetodoPago = mongoose.model("MetodoPago", schemaMetodoPago);
module.exports = MetodoPago;
