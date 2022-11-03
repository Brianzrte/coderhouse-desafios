import mongoose from 'mongoose'
import containerMongoDB from '../container/containerMongoDB.js'

const { Schema } = mongoose;
const collection = 'carrito';

const CarritoSchema = new Schema({
    productos: { type: Array, required: true },
});

class Carrito extends containerMongoDB {
    constructor() {
        super(collection, CarritoSchema);
    }

    async createCart() {
        try{
            const cart = new this.model({
                productos: [],
            });
            if (await cart.save())
                return { message: 'Carrito creado correctamente', id: cart._id };
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Recibe un id de carrito y un producto para agregarlo al carrito
     * @param {*} producto  {id, nombre, precio, descripcion, codigo, foto, stock}
     * @param {*} idCarrito  id del carrito
     * @returns boolean
     */
    async pushToCart(producto, idCarrito) {
        try{
            const cart = await this.model.findById(idCarrito);
            if(!cart) throw new Error('No existe el carrito');

            cart.productos.push(producto);
            return await cart.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteProduct(idCarrito, idProducto) {
        try{
            const cart = await this.model.findById(idCarrito);
            const producto = cart.productos.indexOf(producto => producto.id === idProducto);
            
            cart.productos.splice(producto, 1);
            const ok = await cart.save();
            if(ok) return { message: 'Producto eliminado correctamente' };
        } catch (error) {
            throw new Error(error);
        }
    }


}

export default Carrito;