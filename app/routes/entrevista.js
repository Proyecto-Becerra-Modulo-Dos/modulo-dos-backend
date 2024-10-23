import { Router } from "express";
import { mostrarCandidato, programarEntrevista } from "../controllers/entrevista";

const rutaEntrevista = Router();

rutaEntrevista.post("/programarentrevista", programarEntrevista)
rutaEntrevista.get("/mostrarcandidato/:idReclutamiento", mostrarCandidato)


export default rutaEntrevista;