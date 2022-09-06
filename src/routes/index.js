import express from 'express';
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const {default: productosRoutes } = await import('./productos/productos.routes.js');


router.use('/productos', productosRoutes);
router.use('*', (req, res) => {
    res.status(404).json({
        error: -2,
        descripcion: 'la ruta ' + req.baseUrl + ' no existe'
    });
});

export default router;