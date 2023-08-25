import express from 'express';
import dotenv from 'dotenv';
import appIncidencias from './app/routes/incidencias.routes.js';
import appAreas from './app/routes/areas.routes.js';
import appToken from './app/routes/token.routes.js';
dotenv.config();

const app = express();
app.use(express.json());
const config = JSON.parse(process.env.SERVER)

app.use('/incidencias', appIncidencias)
app.use('/areas', appAreas)
app.use('/token', appToken)

app.listen(config, () => {
    console.log(`Server listening on http://${config.host}:${config.port}`); 
});