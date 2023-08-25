import { Router } from "express";
import { getAreas } from "../controllers/V1/areas.controller.js";

const appAreas = Router();

appAreas.get("/", getAreas);

export default appAreas;