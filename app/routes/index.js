import { Router } from "express";
import rutaCompensaciones from "./compensaciones.routes";
import rutaEmpleados from "./empleados.routes";
import rutaNomina from "./nomina.routes";
import rutaDocumentos from "./documentos.routes";
import rutaSupervisor from "./supervisor.routes";
import rutaOferta from "./oferta.routes";
import rutareculta from "./reclutamiento";
import rutaEntrevista from "./entrevista";
import rutaorganizacional from "./organizacional";
import rutaTrabajoRemoto from "./trabajo.remoto.routes";

const ruta = Router();

ruta.use("/documentos", rutaDocumentos);
ruta.use("/empleados", rutaEmpleados);
ruta.use("/compensaciones", rutaCompensaciones);
ruta.use("/nomina", rutaNomina);
ruta.use("/supervisor", rutaSupervisor);
ruta.use("/oferta", rutaOferta);
ruta.use("/reclutamiento", rutareculta);
ruta.use("/entrevista", rutaEntrevista);
ruta.use("/mostrar", rutaorganizacional);
ruta.use("/politicas-remoto", rutaTrabajoRemoto);



export default ruta;
