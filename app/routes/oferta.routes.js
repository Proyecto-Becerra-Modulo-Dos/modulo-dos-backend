import { Router } from "express";
import { agregarOferta } from "../controllers/oferta.controller";

const rutaOferta = Router();

rutaOferta.post("/agregaroferta", agregarOferta);

export default rutaOferta;