const Categoria = require("../models/categoria.models"); // Asegúrate de que la ruta sea correcta

// Obtener todas las categorías
exports.obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener categorías", error });
    }
};
// Obtener una categoría por ID
exports.obtenerCategoriaPorId = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id);
        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener la categoría", error });
    }
};

// Crear una nueva categoría
exports.crearCategoria = async (req, res) => {
    try {
        const nuevaCategoria = new Categoria(req.body);
        await nuevaCategoria.save();
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear la categoría", error });
    }
};

// Actualizar una categoría
exports.actualizarCategoria = async (req, res) => {
    try {
        const categoriaActualizada = await Categoria.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!categoriaActualizada) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }
        res.json(categoriaActualizada);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al actualizar la categoría", error });
    }
};

// Eliminar una categoría
exports.eliminarCategoria = async (req, res) => {
    try {
        const categoriaEliminada = await Categoria.findByIdAndDelete(req.params.id);
        if (!categoriaEliminada) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }
        res.json({ mensaje: "Categoría eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar la categoría", error });
    }
};


