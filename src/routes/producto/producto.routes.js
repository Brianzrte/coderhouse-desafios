import express from 'express';
const router = express.Router();
import authMiddleware from '../../middlewares/auth/auth.js'
import handlerError from '../../middlewares/error/handlerError.js'

import { 
    getController,
    saveController,
    updateController,
    deleteController
} from '../../controllers/producto/producto.controller.js'

//rutas
router.get('/', getController);
router.get('/:id', getController);
router.post('/', authMiddleware, saveController);
router.put('/:id', authMiddleware, updateController);
router.delete('/:id', authMiddleware, deleteController);
router.use(handlerError);

//exports
export default router;