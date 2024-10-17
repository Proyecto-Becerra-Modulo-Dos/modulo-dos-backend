import { Router } from "express";
import { mostrarNombre, mostrarRecluta } from "../controllers/reclutamiento";

const rutareculta = Router();


rutareculta.get("/nombre", mostrarNombre);
rutareculta.get("/datoscompletos/:idReclutamiento", mostrarRecluta);



export default rutareculta;