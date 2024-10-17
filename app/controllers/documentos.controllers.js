import { config } from "dotenv";
import { pool } from "../config/mysql.db";
import multer from 'multer';
config();

// Configuración de multer para almacenar los archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/'); // Carpeta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Nombre único del archivo con timestamp
    }
});

const upload = multer({ storage: storage }).single('documento');

export const uploadFile = async (req, res) => {
    const { tipoDocumento } = req.body;
    const empleadoId = 1;  // Este valor podría provenir de la sesión o ser dinámico
    
    // Manejar la subida de archivos
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error al subir el archivo', details: err });
        }

        const documento = req.file ? req.file.filename : null; // Verifica si hay archivo subido
        
        if (!documento) {
            return res.status(400).json({ error: 'No se ha recibido ningún archivo' });
        }

        try {
            // Llamada al procedimiento almacenado para guardar en la base de datos
            const [respuesta] = await pool.query(`CALL SP_CARGAR_DOCUEMNTOS(?, ?, ?)`, [tipoDocumento, documento, empleadoId]);
            console.log('Respuesta base de datos:', respuesta);
            res.status(201).json({ message: 'Guardado exitosamente' });
        } catch (error) {
            console.error('Error al guardar en la base de datos:', error);
            res.status(500).json({ error: 'Error al guardar en la base de datos', details: error });
        }
    });
};
