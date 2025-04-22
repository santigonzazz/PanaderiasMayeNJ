const mongoose = require("../config/database");
const Producto = require("../models/producto.models");

const schemaReserva = new mongoose.Schema({
    cantidad: {
        type: Number,
        required: [true, "La cantidad es obligatoria"],
        min: [1, "La cantidad debe ser al menos 1"]
    },
    total: {
        type: mongoose.Types.Decimal128,
        required: [true, "El total es obligatorio"],
        min: [0.0, "El total no puede ser negativo"]
    },
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",  // Asegurar que coincida con el nombre exacto del modelo
        required: [true, "El producto es obligatorio"]
    }
}, { versionKey: false });

const Reserva = mongoose.model("Reserva", schemaReserva);
module.exports = Reserva;
