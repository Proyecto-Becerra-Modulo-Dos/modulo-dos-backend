import { Router } from "express";
import { crearCompensacion, desactivarCompensacion, editarCompensacion, listarCompensaciones, obtenerCompensacion } from "../controllers/compensaciones.controllers";

const rutaCompensaciones = Router();

rutaCompensaciones.get("/", listarCompensaciones);
rutaCompensaciones.post("/crear", crearCompensacion);
rutaCompensaciones.post("/editar", editarCompensacion);
rutaCompensaciones.get("/obtener/:id", obtenerCompensacion);
rutaCompensaciones.post("/desactivar", desactivarCompensacion);

export default rutaCompensaciones;