import { Router } from "express";
import { aprobarNomina, desaprobarNomina, listarEmpleadosNomina } from "../controllers/nomina.controllers";

const rutaNomina = Router();

rutaNomina.get("/", listarEmpleadosNomina);
rutaNomina.post("/desaprobar", desaprobarNomina);
rutaNomina.post("/aprobar", aprobarNomina);

export default rutaNomina;