import { pool } from "../config/mysql.db";

export const mostrarPoliticasTrabajoRemoto = async (req, res) => {
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_POLITICAS()`);

        res.json(respuesta[0][0]);
    } catch (error) {
        console.log(error);        
        res.status(500).json(error);
    }
};