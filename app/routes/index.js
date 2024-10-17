import {Router} from "express";
import inicio from "../controllers/controllers";
import rutaEmpleados from "./empleados.routes";
import rutaCompensaciones from "./compensaciones.routes";
import rutaNomina from "./nomina.routes";
import rutaDocumentos from "./documentos.routes";
import rutaPoliticas from "./politicas.routes";

const ruta = Router();

ruta.use("/documentos", rutaDocumentos);
ruta.use("/empleados", rutaEmpleados);
ruta.use("/compensaciones", rutaCompensaciones);
ruta.use("/nomina", rutaNomina);
ruta.use("/politicas", rutaPoliticas)

export default ruta