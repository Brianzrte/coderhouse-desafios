import productos from '../../database/db.js';
import generateID from '../../utils/generateID.js';

class Productos {
   
    constructor() {
        this.productos = productos;
    }

    find() {
        return this.productos;
    }

    findById(id) {
        const producto =  this.productos.find(producto => producto.id == id);
        return (producto) ? producto : false;
    }

     create(producto) {
        const nuevoProducto = { ...producto, id: generateID() };
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }

     update(product) {
        const index = this.productos.findIndex(producto => producto.id === product.id);
        if(index === -1) return null;
        this.productos[index] = product;
        return product;
    }
    

     delete(id) {
        const index = this.productos.findIndex(producto => producto.id === id);
        if(index === -1) return null;

        const producto = this.productos[index];
        this.productos.splice(index, 1);
        return producto;
    }

}

export default Productos;