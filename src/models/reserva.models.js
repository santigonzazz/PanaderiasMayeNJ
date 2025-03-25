const mongoose = require("../config/database");
const Producto = require("../models/producto.models")
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
    }
}, { versionKey: false });

const Reserva = mongoose.model("producto", schemaCategoria);
module.exports = Reserva;