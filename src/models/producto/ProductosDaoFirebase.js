import FirebaseContainer from "../container/containerFireBase.js";

const collection = 'productos';

class Producto extends FirebaseContainer {
    constructor() {
        super(collection);
    }

    //obtengo un producto por su codigo
    async getByCode(codigo) {
        try{
            const producto = await this.collection.where('codigo', '==', codigo).get();
            if(producto.empty) return false;
            return producto.docs[0].data();
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Producto;