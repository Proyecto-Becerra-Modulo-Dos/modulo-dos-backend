import { Router } from "express";
import { mostrarNombre } from "../controllers/reclutamiento";

const rutareculta = Router();


rutareculta.get("/nombre", mostrarNombre);



export default rutareculta;