import { Router } from "express";
import { mostrarrol } from "../controllers/organizacional";

const rutaorganizacional = Router();


rutaorganizacional.get("/rol", mostrarrol);


export default rutaorganizacional;