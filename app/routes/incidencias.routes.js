import { Router } from "express";
import { postIncidencias,getIncidencias, putIncidencias } from "../controllers/V1/incidencias.controller.js";
import routesVersioning from 'express-routes-versioning';
import { get2Incidencias } from "../controllers/V2/incidencias.controller.js";
import { validateToken } from "../middlewares/jtw.js";
import { limitReq } from "../middlewares/limitReq.js";
import { incidenciaDTO } from "../middlewares/secure/incidencias.dto.js";

const appIncidencias = Router();

const version = routesVersioning();
appIncidencias.use(validateToken, limitReq());


appIncidencias.get('/',version({
    "1.0.0": getIncidencias,
    "2.2.1": get2Incidencias
}));    
appIncidencias.post('/', incidenciaDTO, version({
    "1.0.0": postIncidencias
}));
appIncidencias.put("/", putIncidencias);


export default appIncidencias