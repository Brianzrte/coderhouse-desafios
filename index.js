const contenedor = require('./contenedor.js');
const productos = new contenedor('productos.txt');


const producto = {
    title : 'Producto 1',
    price : 100,
    thumbnail : 'https://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2013/11/11-Libro-1024x723.png'
}

//guardar un producto

productos.save(producto)
    .then(id => console.log('Producto guardado con id: ', id))
    .catch(error => console.log(error));



//ver todos los productos
Promise.resolve(productos.getAll())
    .then(productos => console.log('Productos: ', productos))
    .catch(error => console.log(error));

//ver un producto por id
Promise.resolve(productos.getById(1))
    .then(producto => console.log('Producto: ', producto))
    .catch(error => console.log(error));

//eliminar un producto por id
Promise.resolve(productos.deleteById(8))
    .then(producto => console.log(producto))
    .catch(error => console.log(error));

