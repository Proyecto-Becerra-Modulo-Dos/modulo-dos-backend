import { Router } from "express";
import {
  aprobarHorasExtra,
  aprobarHorasTrabajadas,
  aprobarPermiso,
  aprobarTrabajoRemoto,
  rechazarHorasExtra,
  rechazarHorasTrabajadas,
  rechazarPermiso,
  verHorasExtra,
  verHorasExtraAprobados,
  verHorasExtraRechazados,
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

rutaSupervisor.get("/verHorasExtra", verHorasExtra);
rutaSupervisor.post("/aprobarHorasExtra", aprobarHorasExtra);
rutaSupervisor.post("/rechazarHorasExtra", rechazarHorasExtra);
rutaSupervisor.get("/verHorasExtraAprobados", verHorasExtraAprobados);
rutaSupervisor.get("/verHorasExtraRechazados", verHorasExtraRechazados);

export default rutaSupervisor;
