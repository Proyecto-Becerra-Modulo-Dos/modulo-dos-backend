import { Router } from "express";
import { crearEmpleado, listarEmpleados, verNomina } from "../controllers/empleados.controllers";
import { cuentaEmpleado, solicitar, solicitudes } from "../controllers/empleados.controllers";
import { FormularioInscripcion } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);
rutaEmpleados.put("/inscripcion", FormularioInscripcion);
rutaEmpleados.post("/vernomina", verNomina);
rutaEmpleados.get("/cuenta", cuentaEmpleado);
rutaEmpleados.get("/solicitudes", solicitudes);
rutaEmpleados.get("/solicitar", solicitar);
rutaEmpleados.put("/inscripcion", FormularioInscripcion);


export default rutaEmpleados;