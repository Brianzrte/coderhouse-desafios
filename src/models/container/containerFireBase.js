import admin from 'firebase-admin';
import config from '../../database/config.js';

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();

console.log('firebase initialized');
 
class FirebaseContainer {

    constructor(collection) {
        this.collection = db.collection(collection);
    }

    async getAll() {
        try{
            return await (await this.collection.get()).docs.map(doc => {
                return { ...doc.data(), id: doc.id };
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async getById(id) {
        if (!id) throw new Error('Error: no se encontro id');
        try {
            const doc = await this.collection.doc(id).get();
            if (!doc.exists) throw new error('Error: no se encontro documento para el id: ' + id);
            return { ...doc.data(), id: doc.id };
        } catch (error) {
            throw new Error(error);
        }
    }

    async save(obj) {

        try{
            const objeto = await this.collection.add(obj);
            return { ...obj, id: objeto.id };
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, obj) {
        try{
            const ok = await this.collection.doc(id).update(obj);
            if(ok) return { message: 'Actualizado correctamente' };
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id) {
        if(!id) throw new Error('Error: no se encontro id');
        
        try{
            const ok = await this.collection.doc(id).delete();
            if(ok) return { message: 'Eliminado correctamente' };
        } catch (error) {
            throw new Error(error);
        }
    } 
}

export default FirebaseContainer;