import { Router } from "express";
import rutaCompensaciones from "./compensaciones.routes";
import rutaEmpleados from "./empleados.routes";
import rutaNomina from "./nomina.routes";
import rutaDocumentos from "./documentos.routes";
import rutaSupervisor from "./supervisor.routes";
import rutaTrabajoRemoto from "./trabajo.remoto.routes";

const ruta = Router();

ruta.use("/documentos", rutaDocumentos);
ruta.use("/empleados", rutaEmpleados);
ruta.use("/compensaciones", rutaCompensaciones);
ruta.use("/nomina", rutaNomina);
ruta.use("/supervisor", rutaSupervisor);
ruta.use("/politicas-remoto", rutaTrabajoRemoto);



export default ruta;
