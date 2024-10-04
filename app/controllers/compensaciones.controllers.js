import dayjs from "dayjs";
import { basedatos, pool } from "../config/mysql.db";
import 'dayjs/locale/es.js';
import { config } from "dotenv";
config();

dayjs.locale('es');

export const listarCompensaciones = async (req, res) => {
    try {
        const [rows] = await pool.query("CALL SP_VER_COMPENSACIONES()");
        const compensaciones = rows[0].map(compensacion => {
            const fechaInicio = new Date(compensacion.fechaInicio).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            const fechaFin = new Date(compensacion.fechaFin).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            return {
                ...compensacion,
                fechaInicio,
                fechaFin
            };
        })
        console.log(compensaciones);
        res.status(200).json({ compensaciones });
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error);
    }
};

export const crearCompensacion = async (req, res) => {
    const { nombre, salario, bonificacion, incentivo, fechaInicio, fechaFin } = req.body;

    try {
        const [respuesta] = await pool.query(`CALL SP_CREAR_COMPENSACION('${salario}','${incentivo}','${bonificacion}','${fechaInicio}', '${fechaFin}','${nombre}');`);
        console.log('Respuesta base de datos:', respuesta); 
        res.status(201).json({ message: 'Plan creado exitosamente'});
    } catch (error) {
        console.error('Error al crear plan:', error);
        res.status(500).json({ error: 'Error al crear plan', detalles: error });
    }
};

export const obtenerCompensacion = async (req, res) => {
    const id = req.params.id;

    try {
        const respuesta = await pool.query(`CALL SP_OBTENER_COMPENSACION('${id}');`);
        const compensaciones = respuesta[0][0].map(compensacion => {
            const fechaInicio = new Date(compensacion.fechaInicio).toISOString().split('T')[0]; // Formato yyyy-MM-dd
            const fechaFin = new Date(compensacion.fechaFin).toISOString().split('T')[0]; // Formato yyyy-MM-dd
            return {
                ...compensacion,
                fechaInicio,
                fechaFin
            };
        });
        if (respuesta.length > 0) {
            res.status(200).json(compensaciones[0]);
        } else {
            res.status(404).json({ mensaje: "Plan no encontrado" });
        }
    } catch (error) {
        console.error('Error obteniendo el plan:', error);
        res.status(500).json({ error: 'Error al obtener el plan' });
    }
};

export const editarCompensacion = async (req, res) => {
    const { salario, bonificacion, incentivo, fechaInicio, fechaFin, id } = req.body;

    try {
        const respuesta = await pool.query(`CALL SP_EDITAR_COMPENSACION('${salario}', '${incentivo}', '${bonificacion}', '${fechaInicio}', '${fechaFin}', '${id}');`);
        res.status(200).json({ mensaje: 'Plan editado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

export const desactivarCompensacion = async (req, res) => {
    const id = req.body.id;

    try {
        const [respuesta] = await pool.query(`CALL SP_DESACTIVAR_COMPENSACION('${id}')`);
        res.json(respuesta);
    } catch (error) {
        console.log(error);        
        res.status(500).json(error);
    }
};

export const listarEmpleadosCompensacion = async (req, res) => {
    const id = req.params.id;

    try {
        const [respuestaCompensacion] = await pool.query(`CALL SP_BUSCAR_COMPENSACION('${id}')`);
        const [respuestaEmpleados] = await pool.query(`CALL SP_BUSCAR_EMPLEADO_COMPENSACION('${id}')`);
        
        const empleadoIds = respuestaEmpleados[0].map(emp => emp.id_empleado).join(',');

        const [empleados] = await basedatos.query(`CALL SP_BUSCAR_EMPLEADOS_INFO('${empleadoIds}')`);
        
        res.status(200).json({
            compensaciones: respuestaCompensacion[0],
            empleados: empleados[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

