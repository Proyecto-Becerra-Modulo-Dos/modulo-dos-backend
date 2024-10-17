import { Router } from "express";
import rutaCompensaciones from "./compensaciones.routes";
import rutaEmpleados from "./empleados.routes";
import rutaNomina from "./nomina.routes";
<<<<<<< HEAD
import rutaDocumentos from "./documentos.routes";
import rutaSupervisor from "./supervisor.routes";
=======
import rutaOferta from "./oferta.routes";
import rutareculta from "./reclutamiento";
import rutaEntrevista from "./entrevista";
import rutaorganizacional from "./organizacional";
>>>>>>> 58b59627582215499dfd3e8fe4b979bd412f7707

const ruta = Router();

ruta.use("/documentos", rutaDocumentos);
ruta.use("/empleados", rutaEmpleados);
ruta.use("/compensaciones", rutaCompensaciones);
ruta.use("/nomina", rutaNomina);
<<<<<<< HEAD
ruta.use("/supervisor", rutaSupervisor);
=======
ruta.use("/oferta", rutaOferta);
ruta.use("/reclutamiento", rutareculta);
ruta.use("/entrevista", rutaEntrevista);
ruta.use("/mostrar", rutaorganizacional);
>>>>>>> 58b59627582215499dfd3e8fe4b979bd412f7707

export default ruta;
