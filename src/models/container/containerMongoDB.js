import mongoose from 'mongoose' // Importamos mongoose
import config from '../../database/config.js'
import { asPOJO, removeField, renameField } from '../../utils/objectUtils.js';


await mongoose.connect(config.mongodb.uri, config.mongodb.options);


class MongoseDBContainer {
    constructor(collection, schema) {
        this.model = mongoose.model(collection, schema);
    }

    async getAll() {
        try{
            return await this.model.find({}, {__v: 0});
        } catch (error) {
            throw new Error(error);
        }
    }

    async getById(id) {
        try{

            return await this.model.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async save(obj) {
        try{

            const objeto = new this.model(obj);
            return await objeto.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, obj) {
        try{
            const res = await this.model.findByIdAndUpdate(id, obj);
            if(res) return { message: 'Actualizado correctamente' };
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id) {
        try{
            const ok = await this.model.findByIdAndRemove(id);
            if(ok) return { message: 'Eliminado correctamente' };
        } catch (error) {
            throw new Error(error);
        }
    }
}


export default MongoseDBContainer;