import productos from '../../database/db.js';
import { v4 as uuidv4 } from 'uuid';



class Productos {
   
    constructor() {
        this.productos = productos;
    }

    async find() {
        return this.productos;
    }

    async findById(id) {
        return this.productos.find(producto => producto.id === id);
    }

    async create(producto) {
        const nuevoProducto = { ...producto, id: uuidv4() };
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }

    async update(product) {
        const index = this.productos.findIndex(producto => producto.id === product.id);
        if(index === -1) return null;
        this.productos[index] = product;
        return product;
    }
    

    async delete(id) {
        const index = this.productos.findIndex(producto => producto.id === id);
        if(index === -1) return null;

        const producto = this.productos[index];
        this.productos.splice(index, 1);
        return producto;
    }

}

export default Productos();