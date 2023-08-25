import { Router } from "express";
import { postIncidencias,getIncidencias, putIncidencias } from "../controllers/incidencias.controller.js";
import { body } from 'express-validator';

const appIncidencias = Router();

//const version = routesVersioning();

appIncidencias.get('/',getIncidencias);
appIncidencias.post('/', [
    body('categoria')
        .notEmpty().withMessage('La categoria es obligatoria')
        .isString().withMessage('El dato debe ser de tipo string')
        .matches(/^[a-z A-Z]+$/).withMessage('Solo acepta letras')
], postIncidencias);
appIncidencias.put("/", putIncidencias);


export default appIncidencias