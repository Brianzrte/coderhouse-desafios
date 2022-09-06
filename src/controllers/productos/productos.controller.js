import Productos from "../../models/productos/productos.js";

const productModel = new Productos();

const getAll = async (req, res, next) => {
    try {
        const productos = await productModel.find();
        res.json(productos);
    } catch (error) {
        next(error);
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) throw new Error('Error: no se encontro id de producto');
        
        const producto = await Productos.findById(id);        
        if (!producto) throw new Error('Error: no se encontro producto');
        res.status(200).json(producto);
    
    } catch (error) {
        next(error);    
    }
}

const create = async (req, res, next) => {
    try {
        const { title, price, thumbnail } = req.body;
        if (!title || !price || !thumbnail) throw new Error('Error: no se encontro producto');

        const producto = {
            title,
            price,
            thumbnail
        }
        
        const productoGuardado = await Productos.create(producto);
        if(!productoGuardado) throw new Error('Error: no se pudo guardar el producto');
        res.status(201).json(productoGuardado);

    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) throw new Error('Error: no se encontro id de producto');

        const producto = await Productos.findByIdAndUpdate(id, req.body);
        if (!producto) throw new Error('Error: no se encontro producto');
        res.status(200).json(producto);

    } catch (error) {
        next(error);
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) throw new Error('Error: no se encontro id de producto');

        const producto = await Productos.findByIdAndDelete(id);
        if (!producto) throw new Error('Error: no se encontro producto');
        res.status(200).json(producto);

    } catch (error) {
        next(error);
    }
}

export const productController = {
    getAll,
    getById,
    create,
    update,
    remove
}