import { Router } from "express";
import { getAreas } from "../controllers/areas.controller.js";

const appAreas = Router();

appAreas.get("/", getAreas);

export default appAreas;