import { Router } from "express";
import { crearToken } from "../middlewares/jtw.js";

const appToken = Router();

appToken.get('/:nombre',crearToken)

export default appToken