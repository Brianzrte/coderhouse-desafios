const ProductoTest = require("./productos/productos-test.model");

module.exports = {
    Productos: require("./productos/productos.model"),
    Chat: require("./chat/chat.model"),
    ProductosTest : new ProductoTest(5)
};