import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ___filename = fileURLToPath(import.meta.url);
const PATH_ROUTER = path.dirname(___filename);

import Producto from '../producto/producto.model.js';
const productos = new Producto();


class Carrito {

    constructor() {
        this.carritos = [];
        this.path = path.join(PATH_ROUTER, '../../data/carritos.json');
        this.load();
    }

    load() {
        try {
            const load = async () => {
                if(!fs.existsSync(this.path)) {
                    fs.writeFileSync(this.path, JSON.stringify([],null,2), 'utf-8');
                }
                const data = await fs.readFileSync(this.path, 'utf-8');
                this.carritos = JSON.parse(data, null, 2);
            };
            load();
        } catch (error) {
            console.log(error);
            this.carritos = [];
        }
    }

    saveFile() {
        try {
            const saveFile = async () => {
                await fs.writeFileSync(this.path, JSON.stringify(this.carritos, null, 2), 'utf-8');
            };
            saveFile();
        } catch (error) {
            console.log(error);
        }
    }

    //metodos
    createCart(){ 
        const cart = {
            id: uuidv4(),
            productos: [],
            timestamp: Date.now()
        }
        this.carritos.push(cart);
        this.saveFile();
        return cart.id;
    }

    getCart(id){
        const cart = this.carritos.find(cart => cart.id === id);
        return (cart) ? cart.productos : null;
    }

    pushToCart(id, idProductos){
        const cart = this.carritos.find(cart => cart.id === id);
        if(!cart) return null;

        //recorro la lista de idProductos
        for(let i = 0; i < idProductos.length; i++){
            const producto = productos.getById(idProductos[i]);
            if(producto){
                cart.productos.push(producto);
            } else {
                return null;
            }
        }
        this.saveFile();
        return cart.productos;
    }

    deleteCart(id){
        const cart = this.carritos.find(cart => cart.id === id);
        if(!cart) return null;

        const index = this.carritos.indexOf(cart);
        this.carritos.splice(index, 1);
        this.saveFile();
        return this.carritos;
    }

    deleteProduct(id, idProducto){
        const cart = this.carritos.find(cart => cart.id === id);
        if(!cart) return null;

        const producto = cart.productos.find(producto => producto.id === idProducto);
        if(!producto) return null;

        const index = cart.productos.indexOf(producto);
        cart.productos.splice(index, 1);
        this.saveFile();
        return cart.productos;
    }
}

export default Carrito;