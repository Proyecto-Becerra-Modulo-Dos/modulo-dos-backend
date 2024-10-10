import {Router} from "express";
import inicio from "../controllers/controllers";
import rutaEmpleados from "./empleados.routes";
import rutaCompensaciones from "./compensaciones.routes";
import rutaNomina from "./nomina.routes";
import rutaOferta from "./oferta.routes";
import rutareculta from "./reclutamiento";

const ruta = Router();

ruta.use("/empleados", rutaEmpleados);
ruta.use("/compensaciones", rutaCompensaciones);
ruta.use("/nomina", rutaNomina);
ruta.use("/oferta", rutaOferta);
ruta.use("/reclutamiento", rutareculta);

export default ruta