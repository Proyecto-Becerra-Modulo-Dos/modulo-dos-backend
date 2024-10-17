import { config } from "dotenv";
import { basedatos, pool } from "../config/mysql.db";
import mes from "../messages/mes";
config();

export const permisos = async (req, res) => {
    const {id, permisos, estado} = req.body.id;

    try {
        const respuesta = await pool.query(`CALL SP_DESACTIVAR_PERMISOS(?,?,?)`, [id, permisos, estado])

        if (respuesta[0].affectedRows == 1){
            mes.success(req, res, 200, )
            
        } else {
            
        }
    } catch (error) {
        
    }
}