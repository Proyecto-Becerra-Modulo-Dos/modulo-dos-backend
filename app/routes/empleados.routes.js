import { Router } from "express";
import { crearEmpleado } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.post("/crear", crearEmpleado);

export default rutaEmpleados;