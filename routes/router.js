const exp = require('express');
const router = exp.Router();

const controladorProducto = require('../backend/controller/producto.controller');

router.get('/productos', controladorProducto.getProductos);
//router.get('/productos/listar', controladorProducto.listarProductos);
router.post('/productos/crear', controladorProducto.addProducto);
//router.put('/productos/:id', controladorProducto.actualizarProducto);
//router.delete('/productos/nombre/:nombre', controladorProducto.eliminarProductoPorNombre);


module.exports = router;
