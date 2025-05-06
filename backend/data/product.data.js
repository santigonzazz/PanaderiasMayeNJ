const Producto = require('../models/producto.models');

exports.findProducto = async (filter, projection) => {
    try {
        if (!projection) return await Producto.findOne(filter);
        else return await Producto.findOne(filter, projection);
    } catch (error) {
        return error;
    }
};

exports.createProductoRecord = async (productoInfo) => {
    try {
        return new Producto(productoInfo).save();
    } catch (error) {
        return error;
    }
};

exports.updateProductoRecord = async (filter, update) => {
};
exports.deleteProductoRecord = async (filter) => {
};
