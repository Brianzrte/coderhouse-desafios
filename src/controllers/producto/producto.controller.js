import productoApi from "../../models/index.js";

const getController = async (req, res, next) => {
    try{
        return (!req.params.id) 
            ? res.status(200).json(await productoApi.getAll())
            : res.status(200).json(await productoApi.getById(req.params.id));

    } catch (error) {
        next(error);
    }
}

const saveController = async (req, res, next) => {
    
    try{
        if(req.body.constructor === Object && Object.keys(req.body).length === 0)
            throw new Error('Error: no se encontro productoApi');
    
        //verifico si el codigo ya existe
        const productoApi = await productoApi.getByCode(req.body.codigo);
        console.log(productoApi);
        if(productoApi) throw new Error('Error: el codigo ya existe');

        res.status(201).json(await productoApi.save({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion : req.body.descripcion,
            codigo : req.body.codigo,
            foto : req.body.foto,
            stock : req.body.stock
        }));

    } catch (error) {
        next(error)
    }
}

const updateController = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('Error: no se encontro id de productoApi');

        if(req.body.constructor === Object && Object.keys(req.body).length === 0)
            throw new Error('Error: no se encontro productoApi');

        const { nombre, precio, descripcion, codigo, foto, stock } = req.body;

        res.status(200).json( await productoApi.update(id, {
            nombre,
            precio,
            descripcion,
            codigo,
            foto,
            stock
        }) );

    } catch (error) {
        next(error);
    }
    
}

const deleteController = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('Error: no se encontro id de productoApi');

        res.status(200).json( await productoApis.delete(id) );
    } catch (error) {
        next(error);
    }
}

//exports
export {
    getController,
    saveController,
    updateController,
    deleteController
}