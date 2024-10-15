import { Router } from "express";
import {
  aprobarHorasTrabajadas,
  aprobarPermiso,
  aprobarTrabajoRemoto,
  rechazarHorasTrabajadas,
  rechazarPermiso,
  verHorasTrabajadas,
  verHorasTrabajadasAprobados,
  verHorasTrabajadasRechazados,
  verPermisos,
  verPermisosAprobados,
  verPermisosRechazados,
  verTrabajoRemoto,
} from "../controllers/supervisor.controllers";

const rutaSupervisor = Router();

rutaSupervisor.get("/verPermisos", verPermisos);
rutaSupervisor.post("/aprobarPermiso", aprobarPermiso);
rutaSupervisor.post("/rechazarPermiso", rechazarPermiso);
rutaSupervisor.get("/verPermisosAprobados", verPermisosAprobados);
rutaSupervisor.get("/verPermisosRechazados", verPermisosRechazados);

rutaSupervisor.get("/verTrabajoRemoto", verTrabajoRemoto);
rutaSupervisor.post("/aprobarTrabajoRemoto", aprobarTrabajoRemoto);

rutaSupervisor.get("/verHorasTrabajadas", verHorasTrabajadas);
rutaSupervisor.post("/aprobarHorasTrabajadas", aprobarHorasTrabajadas);
rutaSupervisor.post("/rechazarHorasTrabajadas", rechazarHorasTrabajadas);
rutaSupervisor.get("/verHorasTrabajadasAprobados", verHorasTrabajadasAprobados);
rutaSupervisor.get(
  "/verHorasTrabajadasRechazados",
  verHorasTrabajadasRechazados
);

export default rutaSupervisor;
