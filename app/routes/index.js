import { Router } from "express";
import rutaCompensaciones from "./compensaciones.routes";
import rutaEmpleados from "./empleados.routes";
import rutaNomina from "./nomina.routes";
import rutaSupervisor from "./supervisor.routes";

const ruta = Router();

ruta.use("/empleados", rutaEmpleados);
ruta.use("/compensaciones", rutaCompensaciones);
ruta.use("/nomina", rutaNomina);
ruta.use("/supervisor", rutaSupervisor);

export default ruta;
