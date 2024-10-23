import { basedatos } from "../config/mysql.db";
import mes from "../messages/mes";
import { config } from "dotenv";
config();




export const mostrarrol = async (req, res)=>{
    try {
        const result = await basedatos.query(`CALL SP_MOSTRAR_ROL();`)
        mes.success(req,res,200,result[0])
    } catch (error) {
        mes.error(req,res,500,error);
    }
}