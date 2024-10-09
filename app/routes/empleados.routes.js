import { Router } from "express";
import { crearEmpleado, cuentaEmpleado, listarEmpleados, solicitudes } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);
rutaEmpleados.get("/cuenta", cuentaEmpleado);
rutaEmpleados.get("/solicitudes", solicitudes);


export default rutaEmpleados;