import Router from "express";
import { inicio } from "../controllers/controllers";

const ruta = Router();

ruta.use("/", inicio);

export default ruta