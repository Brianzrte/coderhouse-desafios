import mongoose from 'mongoose'
import containerMongoDB from '../container/containerMongoDB.js'


const { Schema } = mongoose;
const collection = 'productos';

const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String },
    codigo: { type: Number, required: true },
    foto: { type: String, required: true },
    stock: { type: Number, required: true }
});

class Productos extends containerMongoDB {
    constructor() {
        super(collection, ProductoSchema);
    }

    async getByCode(codigo) {
        try{
            return await this.model.findOne({ codigo });
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Productos;