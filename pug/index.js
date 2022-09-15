const express = require('express');
const rutaApi = require('./routers/app.routers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const  productos  = require('./data/productos');

//engine
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "./views"));

//rutas
app.use('/api', rutaApi);


app.get('/', (req, res) => {
    res.render('partials/main', {
        productos,
        showForm: true
    });
})

app.get('/productos', (req, res) => {
    res.render('partials/main', {
        productos,
        showForm : false
    });
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})