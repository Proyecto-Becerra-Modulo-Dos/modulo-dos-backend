import { basedatos } from "../config/mysql.db";
import bcrypt, { hash } from "bcrypt";
import { config } from "dotenv";
config();

const saltRounds = 10;

//Ver objetivo
export const verObjetivos = async(req, res) => {
    try {
        const [rows] = await basedatos.query("CALL SP_LISTAR_OBJETIVOS()");
        res.status(200).json({ message: rows[0] });
    } catch (err) {
        res.status(500).json(err);
    }
}

//Crear objetivo
export const crearObjetivo = async (req, res) => {
    const { objetivo, empleadoid, estado } = req.body;

    try {
        const [respuesta] = await basedatos.query(`CALL SP_CREAR_OBJETIVO('${objetivo}','${empleadoid}','${estado}');`);
        console.log('Respuesta base de datos:', respuesta);
        res.status(201).json({ message: 'Objetivo creado exitosamente' });
    } catch (error) {
        console.error('Error al crear objetivo:', error);
        res.status(500).json({ error: 'Error al crear objetivo', detalles: error });
    }
};


//Eliminar objetivo
export const eliminarObjetivo = async (req, res) => {
    const { idDesarrollo_Profesional } = req.body;
    console.log(idDesarrollo_Profesional);
    

    try {
        const [respuesta] = await basedatos.query(`CALL SP_ELIMINAR_OBJETIVOS('${idDesarrollo_Profesional}');`);
        console.log('Respuesta base de datos:', respuesta);
        res.status(201).json({ message: 'Objetivo eliminado exitosamente' });
    } catch (error) {
        console.error('Error al crear objetivo:', error);
        res.status(500).json({ error: 'Error al eliminar objetivo', detalles: error });
    }
};

//Editar objetivo
export const editarObjetivo = (req, res) => {
    const { idDesarrollo_Profesional, objetivo} = req.body;
    try {
        const request = basedatos.query("CALL SP_EDITAR_OBJETIVOS(?, ?)", [idDesarrollo_Profesional, objetivo])
        res.status(201).json({ message: 'Objetivos actualizados' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al editar objetivo', detalles: err });
    }
};

//msotrar objetivo
export const mostrarObjetivo = async (req, res) => {
    const { idDesarrollo_Profesional } = req.body;

    try {
        const [respuesta] = await basedatos.query(`CALL SP_MOSTRAR_OBJETIVO('${idDesarrollo_Profesional}');`);
        console.log('Respuesta base de datos:', respuesta);
        res.status(200).json({ message: respuesta[0] });
    } catch (error) {
        console.error('Error al crear objetivo:', error);
        res.status(500).json({ error: 'Error al crear objetivo', detalles: error });
    }
};

export const listarEmpleados = async (req, res) => {
    try {
        const [rows] = await basedatos.query("CALL SP_VER_EMPLEADOS()");
        res.status(200).json({ empleados: rows[0] });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const crearEmpleado = async (req, res) => {
    const { tipoId, identificacion, nombre, apellido, email, salario, contrasena, rol } = req.body;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    try {
        const [respuesta] = await basedatos.query(`CALL SP_CREAR_EMPLEADO('${tipoId}','${rol}','${identificacion}','${nombre}','${apellido}','${email}','${salario}','${hashedPassword}');`);
        console.log('Respuesta base de datos:', respuesta);
        res.status(201).json({ message: 'Empleado creado exitosamente' });
    } catch (error) {
        console.error('Error al crear empleado:', error);
        res.status(500).json({ error: 'Error al crear empleado', detalles: error });
    }
};

export const verNomina = async (req, res) => {
    const { empleadoid } = req.body;

    try {
        const [rows] = await basedatos.query(`CALL SP_VER_NOMINA('${empleadoid}');`);
        let fecha_pago = rows[0][0].fecha_pago 
        rows[0][0].fecha_pago = fecha_pago.toDateString("es-ES")

        let salario_base = parseInt(rows[0][0].salario_base)
        rows[0][0].salario_base = `$${salario_base.toLocaleString("es-ES")}`

        let descuentos = parseInt(rows[0][0].descuentos)
        rows[0][0].descuentos = `$${descuentos.toLocaleString("es-ES")}`

        let bonificaciones = parseInt(rows[0][0].bonificaciones)
        rows[0][0].bonificaciones = `$${bonificaciones.toLocaleString("es-ES")}`

        let salario_neto = parseInt(rows[0][0].salario_neto)
        rows[0][0].salario_neto = `$${salario_neto.toLocaleString("es-ES")}`

        res.status(200).json({ empleados: rows[0] });
        console.log('Respuesta base de datos:', rows[0][0]);
    } catch (error) {
        res.status(500).json(error);
        console.error('Error al ver nomina:', rows);
    }

};