import { Router } from "express";
import { crearEmpleado, FormularioInscripcion, listarEmpleados } from "../controllers/empleados.controllers";
import { verNomina } from "../controllers/empleados.controllers";
import { cuentaEmpleado, solicitar, solicitudes } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);
rutaEmpleados.put("/inscripcion", FormularioInscripcion);
rutaEmpleados.post("/vernomina", verNomina);
rutaEmpleados.get("/cuenta", cuentaEmpleado);
rutaEmpleados.get("/solicitudes", solicitudes);
rutaEmpleados.get("/solicitar", solicitar)


export default rutaEmpleados;