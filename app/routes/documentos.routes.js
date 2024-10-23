import { Router } from "express";
import { uploadFile } from "../controllers/documentos.controllers";
import path from "path"; 
import multer from "multer";

const rutaDocumentos = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads')); // Ruta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Renombra el archivo para evitar duplicados
    }
});

const upload = multer({ storage });
rutaDocumentos.post("/uploads", upload.array('documento[]'), uploadFile);

export default rutaDocumentos;