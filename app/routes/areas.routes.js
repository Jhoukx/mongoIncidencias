import { Router } from "express";
import { getAreas, postAreas } from "../controllers/V1/areas.controller.js";
import routesVersioning from 'express-routes-versioning'
import { validateToken } from "../middlewares/jtw.js";
import { limitReq } from "../middlewares/limitReq.js";
import { areaDTO } from "../middlewares/secure/areas.dto.js";

const appAreas = Router();
const version = routesVersioning();

appAreas.use(validateToken,limitReq());

appAreas.get("/", version({
    "1.0.0": getAreas
}));

appAreas.post("/",areaDTO ,version({
    "1.0.0":postAreas
}));

export default appAreas;