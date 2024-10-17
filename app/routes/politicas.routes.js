import { Router } from "express";
import { politicasVacaciones } from "../controllers/politicas.Vacaciones.js";

const rutaPoliticas = Router();

rutaPoliticas.get("/vacaciones", politicasVacaciones);

export default rutaPoliticas;