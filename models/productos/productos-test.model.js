const uuid = require('uuid').v4;
const { faker } = require('@faker-js/faker');
faker.locale = 'es_MX';

class ProductoTest {
    constructor(cant) {
      this.productos = [];

        for (let i = 0; i < cant; i++) {
            this.productos.push({
                id: uuid(),
                nombre: faker.commerce.productName(),
                foto: faker.image.imageUrl(),
                precio: faker.commerce.price(),
            });
        }
    }

    generateRandomProduct() {
        return {
            nombre : faker.commerce.productName(),
            foto : faker.image.imageUrl(),
            precio : faker.commerce.price()
        }
    }
  
    getById(id) {
      const elem = this.productos.find((elem) => elem.id == id);
      if (!elem) {
        throw new Error(`Error al listar: elemento no encontrado`);
      } else {
        return elem;
      }
    }
  
    getAll() {
      return [...this.productos];
    }
  
    save(elem) {
  
      const newElem = { ...elem, id: uuid() };
      this.productos.push(newElem);
      return newElem;
    }
  
    update(elem) {
      const index = this.productos.findIndex((p) => p.id == elem.id);
      if (index == -1) {
        throw new Error(`Error al actualizar: elemento no encontrado`);
      } else {
        this.productos[index] = elem;
        return elem;
      }
    }
  
    deleteById(id) {
      const index = this.productos.findIndex((elem) => elem.id == id);
      if (index == -1) {
        throw new Error(`Error al borrar: elemento no encontrado`);
      } else {
        return this.productos.splice(index, 1);
      }
    }
  
    deleteAll() {
      this.productos = [];
    }
}
  
module.exports = ProductoTest;
  