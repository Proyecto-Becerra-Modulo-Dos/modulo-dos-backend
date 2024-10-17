import { Router } from "express";
import { crearEmpleado, crearObjetivo, editarObjetivo, eliminarObjetivo, listarEmpleados, mostrarDescripcionRol, mostrarObjetivo, verNomina, verObjetivos } from "../controllers/empleados.controllers";

const rutaEmpleados = Router();

rutaEmpleados.get("/", listarEmpleados);
rutaEmpleados.post("/crear", crearEmpleado);
rutaEmpleados.post("/vernomina", verNomina);
rutaEmpleados.get("/verObjetivos", verObjetivos);
rutaEmpleados.post("/crearObjetivo", crearObjetivo);
rutaEmpleados.delete("/eliminarObjetivo", eliminarObjetivo);
rutaEmpleados.put("/editarObjetivo", editarObjetivo);
rutaEmpleados.post("/mostrarObjetivo", mostrarObjetivo);
rutaEmpleados.post('/mostrarDescripcionRol', mostrarDescripcionRol);

export default rutaEmpleados;