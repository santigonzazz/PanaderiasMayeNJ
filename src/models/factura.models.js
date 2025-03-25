const mongoose = require("../config/database");
const Producto = require("../models/producto.models");
const Usuario = require("../models/usuario.models");
const MetodoPago = require("../models/metodo-pago.models")
const schemaCategoria = new mongoose.Schema({
    cantidad: {
        type: Number,
        required: true
    },
    total: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'producto',
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    metodoPago: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'metodoPago',
        required: true
    }
}, { versionKey: false });

const Factura = mongoose.model("factura", schemaCategoria);
module.exports = Factura;