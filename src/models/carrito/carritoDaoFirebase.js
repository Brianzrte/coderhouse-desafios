import FirebaseContainer from "../container/containerFireBase.js";

const collection = 'carrito';

class Carrito extends FirebaseContainer {
    constructor() {
        super(collection);
    }

    async createCart() {
        const cart = {
            productos: [],
        };
        try {
            const result = await this.collection.add(cart);
            return { message: 'Carrito creado correctamente', id: result.id };
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Agrega un producto al carrito
     * @param {Object} producto {id, nombre, precio, descripcion, codigo, foto, stock}
     * @param {ObjectId} idCarrito id del carrito
     * @returns boolean
     */
    async pushToCart(producto, idCarrito) {
        try {
            const cart = await this.collection.doc(idCarrito).get();
            if (!cart.exists) throw new Error('No existe el carrito');
            const productos = cart.data().productos;
            productos.push(producto);
            await super.update(cart.id, { productos });
            
            return { message: 'Producto agregado correctamente' };
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteProduct(idCarrito, idProducto) {
        try {
            const cart = await this.collection.doc(idCarrito).get();
            if (!cart.exists) throw new Error('Error: No existe el carrito');
            const productos = cart.data().productos;
            const index = productos.findIndex(producto => producto.id === idProducto);

            productos.splice(index, 1);
            await super.update(cart.id, { productos });

            return { message: 'Producto eliminado correctamente' };
        } catch (error) {
            throw new Error(error);
        }
    }
    
}

export default Carrito;