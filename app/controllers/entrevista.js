import { config } from "dotenv";
import { pool } from "../config/mysql.db";
import mes from "../messages/mes";
config();



export const programarEntrevista = async(req, res) =>{
    const {idReclutamiento,tipo_entrevista,fecha_entrevista,descripcion}= req.body;
    try {
        const result = await pool.query(`CALL SP_PROGRAMAR_ENTREVISTA(?,?,?,?);`, [
            idReclutamiento,
            tipo_entrevista,
            fecha_entrevista,
            descripcion]);

        if(result[0].affectedRows==1){
            mes.success(req,res,200,"entrevista agregada")
        }else{
            mes.error(req,res,400,"entrevista no agregada")
        }
    } catch (error) {
        mes.error(req,res,500,error)
    }
}


export const mostrarCandidato = async(req, res)=>{
    const idReclutamiento = req.params.idReclutamiento;
    try {
        const result = await pool.query(`CALL SP_MOSTRAR_CANDIDATO(${idReclutamiento});`)
        mes.success(req,res,200,result[0])
    } catch (error) {
        mes.error(req,res,500,error)
    }
}
