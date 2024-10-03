import {Router} from "express";
import inicio from "../controllers/controllers";
import rutaEmpleados from "./empleados.routes";
import rutaCompensaciones from "./compensaciones.routes";

const ruta = Router();

ruta.use("/empleados", rutaEmpleados);
ruta.use("/compensaciones", rutaCompensaciones);

export default ruta