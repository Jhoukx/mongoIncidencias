import { Router } from "express";
import { postIncidencias } from "../controllers/incidencias.controller.js";

const appIncidencias = Router();

appIncidencias.post('/', postIncidencias);


export default appIncidencias