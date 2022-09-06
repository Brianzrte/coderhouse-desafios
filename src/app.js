import express from 'express';
import env from 'dotenv';
import rutas from './routes/index.js';

env.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', rutas);
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


