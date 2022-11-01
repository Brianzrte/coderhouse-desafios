const Administrador = true;

const authMiddleware = (req, res, next) => {
    (Administrador) ? next() 
                  : res.status(401).json({
                       error: -1, 
                       descripcion: 'no tienes permisos para acceder a la ruta ' + req.baseUrl + ' con el metodo ' + req.method });
}

export default authMiddleware;

