const fs = require('fs');

class Contenedor {

    constructor(nombre){
        this.nombre = nombre;
        if (! fs.existsSync(this.nombre)) {
            fs.writeFileSync(this.nombre, JSON.stringify([],null,2), 'utf8');
        } else {
            this.productos = JSON.parse(fs.readFileSync(this.nombre, 'utf8'));
        }
    }

    async save(obj){
        try {
            const registros = await this.getAll();
            const nuevoRegistro = { ...obj, id : await this.generarID() };
            registros.push(nuevoRegistro);
            await fs.promises.writeFile(this.nombre, JSON.stringify(registros,null,2), 'utf8')
            return nuevoRegistro.id;
        } catch (error) {
            console.log(error);
        }
    }

    async generarID(){
        try {
            const registros = await this.getAll();
            //obtengo el mayor id
            const mayorID = registros.reduce((max, registro) => max > registro.id ? max : registro.id, 0);
            return mayorID + 1;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id){
        try {
            const registros = await this.getAll();
            const registro = registros.find(registro => registro.id === id);
            return registro;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        return this.productos;
    }

    async deleteById(id){
        try {
            const registros = await this.getAll();
            const registrosActualizados = registros.filter(registro => registro.id !== id);
            await fs.promises.writeFile(this.nombre, JSON.stringify(registrosActualizados,null,2), 'utf8')
            console.log('Registro eliminado');
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.nombre, JSON.stringify([],null,2), 'utf8')
            console.log('Registros eliminados');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Contenedor;