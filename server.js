import express from 'express';
import dotenv from 'dotenv';
import appIncidencias from './app/routes/incidencias.routes.js';
dotenv.config();

const app = express();
app.use(express.json());
const config = JSON.parse(process.env.SERVER)

app.use('/incidencias', appIncidencias)

app.listen(config, () => {
    console.log(`Server listening on http://${config.host}:${config.port}`); 
});