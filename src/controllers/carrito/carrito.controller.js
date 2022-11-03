import { carritoDao as carrito }  from '../../models/index.js'


const createCartController = async (req, res, next) => {
    try {
        res.status(201).json(await carrito.createCart()); 
    } catch (error) {
        next(error);
    }
}

const getCartController = async (req, res, next) => {
    try{
        const { id } = req.params;
        if (!id) next(new Error('Error: no se encontro id de carrito'));

        res.status(200).json(await carrito.getById(id) || new Error('Error: no se encontro carrito'));
    } catch (error) {
        next(error);
    }
}

const pushToCartController = async (req, res, next) => {
    // compruebo que el req.body no este vacio
    try {
        const { id } = req.params;
        const  productos   = req.body;
        if (!id) next(new Error('Error: no se encontro id de carrito'));
        if (!productos) next(new Error('Error: no se encontro producto'));

        res.status(200).json(await carrito.pushToCart(productos, id));
    } catch (error) {
        next(error);
    }
    
}

const deleteCartController = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) throw new Error('Error: no se encontro id de carrito');

        res.status(200).json(await carrito.delete(id))  
    } catch (error) {
        next(error);
    }
}

const deleteProductController = async (req, res, next) => {
    try{
        const { id } = req.params;
        const { idProducto } = req.params;
        if (!id) throw new Error('Error: no se encontro id de carrito');
        if (!idProducto) throw new Error('Error: no se encontro id de producto');

        res.status(200).json(await carrito.deleteProduct(id, idProducto))
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