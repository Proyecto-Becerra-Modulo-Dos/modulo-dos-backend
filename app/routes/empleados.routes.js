import { Router } from "express";
import { crearEmpleado, listarEmpleados, permisoAusencia, verNomina } from "../controllers/empleados.controllers";
import { cuentaEmpleado, solicitar, solicitudes } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);
rutaEmpleados.post("/vernomina", verNomina);
rutaEmpleados.get("/cuenta", cuentaEmpleado);
rutaEmpleados.get("/solicitudes", solicitudes);
rutaEmpleados.get("/solicitar", solicitar)
rutaEmpleados.post("/permisoAusencia", permisoAusencia)

export default rutaEmpleados;
