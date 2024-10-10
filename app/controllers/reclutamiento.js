import { config } from "dotenv";
import { pool } from "../config/mysql.db";
import mes from "../messages/mes";

config();


export const mostrarNombre = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_NOMBRE_RECLUTAMIENTO();`)
        mes.success(req, res, 200, respuesta[0])
    } catch (error) {
        mes.error(req, res, 500 ,"no se puede mostrar")
    }
}