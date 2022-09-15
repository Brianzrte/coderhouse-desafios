const express = require('express');
const rutaApi = require('./routers/app.routers');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

const  productos  = require('./data/productos');

//engine

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

//rutas
app.use('/api', rutaApi);


app.get('/', (req, res) => {
    res.render('index', {
        productos,
        showForm: true
    });
})

app.get('/productos', (req, res) => {
    res.render('index', {
        productos,
        showForm : false
    });
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})