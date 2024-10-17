import { Router } from "express";
import { crearpermiso, permisos } from "../controllers/permisos.controllers";

const rutaPermiso = Router();

rutaPermiso.post("/rutapermiso", permisos);
rutaPermiso.post("/crearpermiso", crearpermiso);

export default rutaPermiso;