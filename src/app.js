import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api', router);
app.use('/', (req, res, next) => {
    res.send('backend de ecommerce');
});


const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

connectedServer.on("error", error => console.log(`Error en servidor ${error}`));












