import { Router } from "express";
import { crearEmpleado, listarEmpleados, registrarHoras, verNomina } from "../controllers/empleados.controllers";
import { cuentaEmpleado, solicitar, solicitudes } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);
rutaEmpleados.post("/vernomina", verNomina);
rutaEmpleados.get("/cuenta", cuentaEmpleado);
rutaEmpleados.get("/solicitudes", solicitudes);
rutaEmpleados.get("/solicitar", solicitar)
rutaEmpleados.post("/registrarHoras", registrarHoras)


export default rutaEmpleados;