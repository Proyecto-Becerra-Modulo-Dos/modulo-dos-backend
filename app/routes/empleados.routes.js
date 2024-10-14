import { Router } from "express";
import { crearEmpleado, FormularioInscripcion, listarEmpleados } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);
rutaEmpleados.put("/inscripcion", FormularioInscripcion);

export default rutaEmpleados;