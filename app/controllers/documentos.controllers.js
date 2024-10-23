import { config } from "dotenv";
import { pool } from "../config/mysql.db";
config();

export const uploadFile = async(req, res) => {
    const { tipoDocumento, documento } = req.body;
    const empleadoId = 1;
    try {
        const [respuesta] = await pool.query(`CALL SP_('${tipoDocumento}','${documento}','${empleadoId}');`);
        console.log('Respuesta base de datos:', respuesta); 
        res.status(201).json({ message: 'Guardado exitosamente'});
    } catch (error) {
        console.error('Error al guardar:', error);
        res.status(500).json({ error: 'Error al guardar', error });
    }
};
