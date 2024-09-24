import Router from "express";
import { inicio } from "../controllers/controllers.js";
import rutaEmpleados from "./empleados.routes.js";

const ruta = Router();

ruta.use("/", inicio);
ruta.use("/empleados", rutaEmpleados);

export default ruta