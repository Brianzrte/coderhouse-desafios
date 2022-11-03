import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const router = express.Router();


//middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//Obtengo el path absoluto del archivo actua para tomar los nombres de los archivos para luego importarlos dinamicamente
const ___filename = fileURLToPath(import.meta.url);
const PATH_ROUTER = path.dirname(___filename);


//obtengo los nombres de las carpetas para importar las rutas dinamicamente
fs.readdirSync(PATH_ROUTER).filter(async (file) => {
    if (file === 'routes.js') return;
    await import(`./${file}/${file}.routes.js`).then((module) => {
        router.use(`/${file}`, module.default);
        console.log(`Ruta ${file} cargada`);
    });

    //si no encuentra la ruta, devuelve un 404
    router.use('*', (req, res) => {
        res.status(404).json({
            error: -2,
            descripcion: 'la ruta ' + req.baseUrl + ' no existe'
        });
    });
});



export default router;