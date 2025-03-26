const mongoose = require("../config/database");
const Producto = require("../models/producto.models");
const Usuario = require("../models/usuario.models");
const MetodoPago = require("../models/metodo-pago.models");

const schemaFactura = new mongoose.Schema({
    cantidad: {
        type: Number,
        required: [true, "La cantidad es obligatoria"]
    },
    total: {
        type: mongoose.Types.Decimal128,
        required: [true, "El total es obligatorio"]
    },
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",  // Se debe usar el nombre exacto del modelo
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    metodoPago: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MetodoPago",
        required: true
    }
}, { versionKey: false });

const Factura = mongoose.model("Factura", schemaFactura);
module.exports = Factura;
