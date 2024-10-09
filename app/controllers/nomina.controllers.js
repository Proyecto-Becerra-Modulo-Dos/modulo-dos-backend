import { basedatos, pool } from "../config/mysql.db";
import { config } from "dotenv";
config();

export const listarEmpleadosNomina = async (req, res) => {
    try {
        const [respuestaNomina] = await pool.query(`CALL SP_EMPLEADOS_NOMINA()`);
        const empleadoIds = respuestaNomina[0].map(emp => emp.id_empleado).join(',');
        const [empleados] = await basedatos.query(`CALL SP_BUSCAR_EMPLEADOS_INFO('${empleadoIds}')`);
        
        console.log("NOMINA: ",respuestaNomina[0]);
        console.log("EMPLEADOS: ",empleados[0]);
        
        res.status(200).json({
            nominas: respuestaNomina[0],
            empleados: empleados[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const desaprobarNomina = async (req, res) => {
    const id = req.body.id;

    try {
        const [respuesta] = await pool.query(`CALL SP_DESAPROBAR_NOMINA('${id}')`);
        res.json(respuesta);
    } catch (error) {
        console.log(error);        
        res.status(500).json(error);
    }
};

export const aprobarNomina = async (req, res) => {
    const id = req.body.id;

    try {
        const [respuesta] = await pool.query(`CALL SP_APROBAR_NOMINA('${id}')`);
        res.json(respuesta);
    } catch (error) {
        console.log(error);        
        res.status(500).json(error);
    }
};