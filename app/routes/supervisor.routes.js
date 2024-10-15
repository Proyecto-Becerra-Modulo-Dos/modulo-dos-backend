import { Router } from "express";
import {
  aprobarPermiso,
  aprobarTrabajoRemoto,
  rechazarPermiso,
  verPermisos,
  verPermisosAprobados,
  verPermisosRechazados,
  verTrabajoRemoto,
} from "../controllers/supervisor.controllers";

const rutaSupervisor = Router();

rutaSupervisor.get("/verPermisos", verPermisos);
rutaSupervisor.post("/rechazarPermiso", rechazarPermiso);
rutaSupervisor.post("/aprobarPermiso", aprobarPermiso);
rutaSupervisor.get("/verPermisosAprobados", verPermisosAprobados);
rutaSupervisor.get("/verPermisosRechazados", verPermisosRechazados);

rutaSupervisor.get("/verTrabajoRemoto", verTrabajoRemoto);
rutaSupervisor.post("/aprobarTrabajoRemoto", aprobarTrabajoRemoto);

export default rutaSupervisor;
