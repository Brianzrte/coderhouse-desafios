

let productosDao
let carritoDao



switch (process.env.DATASOURCE) {
    case 'fs' : 
        const { default : Carrito } = await import('./carrito/carrito.fs.js')
        const { default : Producto } = await import('./producto/producto.fs.js')

        carritoDao = new Carrito();
        productosDao = new Producto();
        break;
    case 'mongodb':
        
        const {default: ProductosDaoMongoDB }  = await import('./producto/ProductosDaoMongoDB.js');
        const {default: CarritoDaoMongoDB }  = await import('./carrito/CarritoDaoMongoDB.js');
        
        productosDao = new ProductosDaoMongoDB();
        carritoDao = new CarritoDaoMongoDB();

        break;
    
    case 'firebase':
        const {default: ProductosDaoFirebase } = await import('./producto/ProductosDaoFirebase.js');
        const {default: CarritoDaoFirebase } = await import('./carrito/CarritoDaoFirebase.js');

        productosDao = new ProductosDaoFirebase();
        carritoDao = new CarritoDaoFirebase();
        break;
    default: break;
}

export {
    productosDao,
    carritoDao,
};