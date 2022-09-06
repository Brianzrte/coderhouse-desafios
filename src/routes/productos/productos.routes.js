import { Router } from "express";

const router = Router();

import { productController } from '../../controllers/productos/productos.controller.js';
import handlerError from "../../middlewares/error/handleError.js";

router
    .get("/", productController.getAll)
    .get("/:id", productController.getById)
    .post("/", productController.create)
    .put("/:id", productController.update)
    .delete("/:id", productController.remove)
    .use(handlerError)

export default router;
