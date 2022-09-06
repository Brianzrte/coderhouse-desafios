import productos from "../database/db.js";

const generateID = () => {
    //busco el mayor id de la lista de productos y le sumo 1
    const maxID = productos.reduce((max, producto) => {
        if (producto.id > max) {
            max = producto.id;
        }
        return max;
    }, 0);
    return maxID + 1;
}

export default generateID;
