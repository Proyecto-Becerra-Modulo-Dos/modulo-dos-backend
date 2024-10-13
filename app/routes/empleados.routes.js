import { Router } from "express";
import { crearEmpleado, listarEmpleados, verNomina } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);
rutaEmpleados.post("/vernomina", verNomina);

export default rutaEmpleados;