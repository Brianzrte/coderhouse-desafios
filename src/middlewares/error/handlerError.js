const erroresNoEncontrado = [
    'Error: no se encontro id de producto',
    'Error: no se encontro id de carrito',
    'Error: no se encontro producto'
]

const handlerError = (err, req, res, next) => {
    console.log(err);

    if (erroresNoEncontrado.includes(err.message)) {
        res.status(404)
    } else {
        res.status(500)
    }
    res.json({ message: err.message })
}

export default handlerError;