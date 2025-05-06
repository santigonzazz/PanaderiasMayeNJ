const dbProducto = require('../data/product.data')

exports.addProducto = async (req, res) => {
    try {
        const productoIsRegistered = await dbProducto.findProducto({ }, { });
        if (productoIsRegistered) {
            return res.status(400).json({ error: 'Este libro ya se encuentra registrado' });
        }

        const producto = await dbProducto.createProductoRecord(req.body);
        return res.status(200).json({ mensaje: 'Producto registrado con éxito' });
        // return res.redirect('/cataloging');
    } catch (error) {
        console.error(error);
        return res.render('500', { error: error });
    }
};

exports.getProductos = async (req, res) => {
    // Código pendiente de implementación
};

exports.getProductoDetails = async (req, res) => {
    // Código pendiente de implementación
};
