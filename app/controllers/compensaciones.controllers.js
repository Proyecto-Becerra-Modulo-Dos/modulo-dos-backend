import { basedatos } from "../config/mysql.db";
import { config } from "dotenv";
config();

export const listarCompensaciones = async (req, res) => {
    try {
        const [rows] = await basedatos.query("CALL SP_VER_COMPENSACIONES()");
        res.status(200).json({ compensaciones: rows[0] });
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error);
    }
};

export const crearCompensacion = async (req, res) => {
    const { cedula, salario, bonificaciones, incentivos, tiempoLibre } = req.body;

    try {
        const [respuesta] = await basedatos.query(`CALL SP_CREAR_COMPENSACION('${tiempoLibre}','${salario}','${cedula}','${bonificaciones}','${incentivos}');`);
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
        const respuesta = await basedatos.query(`CALL LL_OBTENER_COMPENSACION('${id}');`);
        if (respuesta.length > 0) {
            res.status(200).json(respuesta[0]);
        } else {
            res.status(404).json({ mensaje: "Plan no encontrado" });
        }
    } catch (error) {
        console.error('Error obteniendo el plan:', error);
        res.status(500).json({ error: 'Error al obtener el plan' });
    }
};

export const editarCompensacion = async (req, res) => {
    const { salario, bonificaciones, incentivos, tiempoLibre, id } = req.body;

    try {
        const respuesta = await basedatos.query(`CALL LL_EDITAR_COMPENSACION('${salario}', '${bonificaciones}','${incentivos}', '${tiempoLibre}', '${id}');`);
        res.status(200).json({ mensaje: 'Plan editado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

export const desactivarCompensacion = async (req, res) => {
    const id = req.body.id;

    try {
        const [respuesta] = await basedatos.query(`CALL LL_DESACTIVAR_COMPENSACION('${id}')`);
        res.json(respuesta);
    } catch (error) {
        res.status(500).json(error);
    }
};