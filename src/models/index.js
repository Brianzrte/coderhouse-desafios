import Producto from "./producto/producto.model.js";
import Carrito from "./carrito/carrito.model.js";

const carritoApi = new Carrito();
const productoApi = new Producto();

export {
    productoApi,
    carritoApi 
}