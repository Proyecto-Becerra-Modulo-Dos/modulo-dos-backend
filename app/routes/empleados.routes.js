import { Router } from "express";
import { crearEmpleado, listarEmpleados } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);

export default rutaEmpleados;