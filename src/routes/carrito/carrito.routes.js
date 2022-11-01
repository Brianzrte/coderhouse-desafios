import express from 'express';
const router = express.Router();
import handlerError from '../../middlewares/error/handlerError.js'

//controladores
import {
    createCartController,
    getCartController,
    pushToCartController,
    deleteCartController,
    deleteProductController
} from '../../controllers/carrito/carrito.controller.js'

//rutas
router.post('/', createCartController);
router.get('/:id/productos', getCartController);
router.post('/:id/productos', pushToCartController);
router.delete('/:id', deleteCartController);
router.delete('/:id/productos/:idProducto', deleteProductController);
router.use(handlerError);

//exports
export default router;

