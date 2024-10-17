import { Router } from "express";
import { uploadFile } from "../controllers/documentos.controllers";

const rutaDocumentos = Router();

rutaDocumentos.post("/upload", uploadFile);

export default rutaDocumentos;