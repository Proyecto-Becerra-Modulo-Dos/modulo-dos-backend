import { Router } from "express";
import { crearEmpleado } from "../controllers/empleados.controllers.js";

const rutaEmpleados = Router();

rutaEmpleados.post("/crear", crearEmpleado);

export default rutaEmpleados;