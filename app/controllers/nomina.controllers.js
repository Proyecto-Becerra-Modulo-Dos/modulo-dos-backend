import { basedatos, pool } from "../config/mysql.db";
import { config } from "dotenv";
config();

export const listarEmpleadosNomina = async (req, res) => {
    try {
        const [respuestaNomina] = await pool.query(`CALL SP_EMPLEADOS_NOMINA()`);
        const empleadoIds = respuestaNomina[0].map(emp => emp.id_empleado).join(',');
        const [empleados] = await basedatos.query(`CALL SP_BUSCAR_EMPLEADOS_INFO('${empleadoIds}')`);

        const [respuestaNominaAprobada] = await pool.query(`CALL SP_EMPLEADOS_NOMINA_APROBADA()`);
        const empleadoIdsAprobada = respuestaNominaAprobada[0].map(emp => emp.id_empleado).join(',');
        const [empleadosAprobada] = await basedatos.query(`CALL SP_BUSCAR_EMPLEADOS_INFO('${empleadoIdsAprobada}')`);

        const [respuestaNominaDesaprobada] = await pool.query(`CALL SP_EMPLEADOS_NOMINA_APROBADA()`);
        const empleadoIdsDesaprobada = respuestaNominaDesaprobada[0].map(emp => emp.id_empleado).join(',');
        const [empleadosDesaprobada] = await basedatos.query(`CALL SP_BUSCAR_EMPLEADOS_INFO('${empleadoIdsDesaprobada}')`);
        
        res.status(200).json({
            nominas: respuestaNomina[0],
            empleados: empleados[0],
            nominasAprobada: respuestaNominaAprobada[0],
            empleadosAprobada: empleadosAprobada[0],
            nominasDesaprobada: respuestaNominaDesaprobada[0],
            empleadosDesaprobada: empleadosDesaprobada[0]
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
