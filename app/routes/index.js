import {Router} from "express";
import inicio from "../controllers/controllers";
import rutaEmpleados from "./empleados.routes";

const ruta = Router();

ruta.use("/empleados", rutaEmpleados);

export default ruta