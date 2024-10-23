import { Router } from "express";
import { mostrarPoliticasTrabajoRemoto } from "../controllers/trabajo.remoto.controllers";
 

const rutaTrabajoRemoto = Router();

rutaTrabajoRemoto.get("/", mostrarPoliticasTrabajoRemoto);


export default rutaTrabajoRemoto;

