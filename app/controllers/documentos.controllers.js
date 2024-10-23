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
    
    console.log(req.body);
    console.log(req.files); // Verifica que los archivos están siendo recibidos

    const empleadoId = 1;  // Este valor podría provenir de la sesión o ser dinámico
    
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No se ha recibido ningún archivo' });
    }

    const documentos = req.files.map(file => file.filename); // Extrae los nombres de los archivos

    try {
        // Llamada al procedimiento almacenado para guardar en la base de datos
        const [respuesta] = await pool.query(`CALL SP_CARGAR_DOCUEMNTOS(?, ?, ?)`, [tipoDocumento, documentos.join(', '), empleadoId]);
        console.log('Respuesta base de datos:', respuesta);
        res.status(201).json({ message: 'Guardado exitosamente' });
    } catch (error) {
        console.error('Error al guardar en la base de datos:', error);
        res.status(500).json({ error: 'Error al guardar en la base de datos', details: error });
    }
};