import { pool } from "../config/mysql.db";
import mes from "../messages/mes";
import { config } from "dotenv";
config();


export const agregarOferta =async(req, res)=>{
    const { idBeneficio, fecha_fin_oferta, titulo_puesto, descripcion_puesto, ano_experiencia, salario_oferta } = req.body;

    try {
        const respuesta = await pool.query(`CALL SP_AGREGAR_OFERTA(?,?,?,?,?,?);`,[idBeneficio,
            fecha_fin_oferta,
            titulo_puesto,
            descripcion_puesto,
            ano_experiencia,
            salario_oferta])
        if(respuesta[0].affectedRows == 1){
            mes.success(req,res, 200, "oferta agregada")
        }else{
            mes.error(req,res, 400, "oferta no agregada")
        }
    } catch (error) {
        mes.error(req,res, 500, error)
    }

}

export const verBeneficios =async(req, res)=>{

    try {
        const respuesta = await pool.query(`CALL SP_VER_BENEFICIOS();`);
        mes.success(req,res, 200, respuesta[0][0])
    } catch (error) {
        mes.error(req,res, 400, "Error, no se pueden mostrar las ofertas")
    }

}