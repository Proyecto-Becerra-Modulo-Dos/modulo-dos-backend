import { Router } from "express";
import {
  aprobarPermiso,
  rechazarPermiso,
  verPermisos,
  verPermisosAprobados,
  verPermisosRechazados,
} from "../controllers/supervisor.controllers";

const rutaSupervisor = Router();

rutaSupervisor.post("/rechazarPermiso", rechazarPermiso);
rutaSupervisor.post("/aprobarPermiso", aprobarPermiso);
rutaSupervisor.get("/verPermisos", verPermisos);
rutaSupervisor.get("/verPermisosAprobados", verPermisosAprobados);
rutaSupervisor.get("/verPermisosRechazados", verPermisosRechazados);

export default rutaSupervisor;
