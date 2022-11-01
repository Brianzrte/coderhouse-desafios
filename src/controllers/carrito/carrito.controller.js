import carritoApiApi  from '../../models/index.js'


const createCartController = async (req, res, next) => {
    try {
        res.status(201).json(await carritoApi.createCart()); 
    } catch (error) {
        next(error);
    }
    
}

const getCartController = async (req, res, next) => {
    try{
        const { id } = req.params;
        if (!id) next(new Error('Error: no se encontro id de carritoApi'));

        res.status(200).json(await carritoApi.getById(id))
    } catch (error) {
        next(error);
    }
}

const pushToCartController = async (req, res, next) => {
    // compruebo que el req.body no este vacio
    try {
        const { id } = req.params;
        const  productos   = req.body;
        if (!id) next(new Error('Error: no se encontro id de carritoApi'));
        if (!productos) next(new Error('Error: no se encontro producto'));

        res.status(200).json(await carritoApi.pushToCart(productos, id));
    } catch (error) {
        next(error);
    }
    
}

const deleteCartController = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) throw new Error('Error: no se encontro id de carritoApi');

        res.status(200).json(await carritoApi.delete(id))  
    } catch (error) {
        next(error);
    }
}

const deleteProductController = async (req, res, next) => {
    try{
        const { id } = req.params;
        const { idProducto } = req.params;
        if (!id) throw new Error('Error: no se encontro id de carritoApi');
        if (!idProducto) throw new Error('Error: no se encontro id de producto');

        res.status(200).json(await carritoApi.deleteProduct(id, idProducto))
    } catch (error) {
        next(error);
    }
}

//exports
export  {
    createCartController,
    getCartController,
    pushToCartController,
    deleteCartController,
    deleteProductController,
};