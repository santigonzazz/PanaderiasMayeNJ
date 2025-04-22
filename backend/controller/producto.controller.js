const modeloProducto = require('../models/producto.models');

exports.buscar = async (req, res) => {
    try {
        let resultado = await modeloProducto.find();
        console.log("Productos encontrados:", resultado);
        res.status(200).json(resultado);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ mensaje: "Hubo un error al obtener los productos" });
    }
};

exports.crearProducto = async (req, res) => {
    console.log("Datos recibidos en el backend:", req.body); // Verifica qué datos llegan al servidor

    try {
        let nuevoProducto = new modeloProducto(req.body);
        let insercion = await nuevoProducto.save();

        console.log("Producto guardado en MongoDB:", insercion);
        res.status(201).json({ mensaje: "Registro exitoso", producto: insercion });
    } catch (error) {
        console.error("Error al crear producto:", error);
        res.status(500).json({ mensaje: "Se presentó un error", error });
    }
};


exports.actualizarProducto = async (req, res) => {
    try {
        let productoActualizado = await modeloProducto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!productoActualizado) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        console.log("Producto actualizado:", productoActualizado);
        res.status(200).json({ mensaje: "Actualización exitosa", producto: productoActualizado });
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        res.status(500).json({ mensaje: "Se presentó un error al actualizar el producto", error });
    }
};

exports.listarProductos = async (req, res) => {
    try {
        const productos = await modeloProducto.find().populate("categoria");
        console.log("Productos encontrados:", productos);
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al listar productos:", error);
        res.status(500).json({ mensaje: "Hubo un error al obtener los productos" });
    }
};

exports.eliminarProductoPorNombre = async (req, res) => {
    try {
        const productoEliminado = await modeloProducto.findOneAndDelete({ nombre: req.params.nombre });

        if (!productoEliminado) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        console.log("Producto eliminado:", productoEliminado);
        res.status(200).json({ mensaje: "Producto eliminado correctamente", producto: productoEliminado });
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).json({ mensaje: "Se presentó un error al eliminar el producto", error });
    }
};
