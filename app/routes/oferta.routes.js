import { Router } from "express";
import { agregarOferta, verBeneficios } from "../controllers/oferta.controller";

const rutaOferta = Router();

rutaOferta.post("/agregaroferta", agregarOferta);
rutaOferta.get("/beneficios", verBeneficios);

export default rutaOferta;