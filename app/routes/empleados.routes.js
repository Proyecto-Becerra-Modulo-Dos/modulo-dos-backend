import { Router } from "express";
import { crearEmpleado, cuentaEmpleado, listarEmpleados, solicitar, solicitudes } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);
rutaEmpleados.get("/cuenta", cuentaEmpleado);
rutaEmpleados.get("/solicitudes", solicitudes);
rutaEmpleados.get("/solicitar", solicitar)


export default rutaEmpleados;