import { basedatos } from "../config/mysql.db";
import bcrypt, { hash } from "bcrypt";
import { pool } from "../config/mysql.db";
import { config } from "dotenv";
config();

const saltRounds = 10;

export const listarEmpleados = async (req, res) => {
    try {
        const [rows] = await basedatos.query("CALL SP_VER_EMPLEADOS()");
        res.status(200).json({ empleados: rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const crearEmpleado = async (req, res) => {
    const { tipoId, identificacion, nombre, apellido, email, salario, contrasena, rol } = req.body;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    try {
        const [respuesta] = await basedatos.query(`CALL SP_CREAR_EMPLEADO('${rol}','${identificacion}','${tipoId}','${nombre}','${apellido}','${hashedPassword}','${email}','${salario}');`);
        console.log('Respuesta base de datos:', respuesta); 
        res.status(201).json({ message: 'Empleado creado exitosamente'});
    } catch (error) {
        console.error('Error al crear empleado:', error);
        res.status(500).json({ error: 'Error al crear empleado', detalles: error });
    }
};

export const cuentaEmpleado = async (req, res) => {
    try {
        const [rows] = await pool.query("CALL SP_VER_CUENTA_BANCARIA()");
        res.status(200).json({ cuenta: rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const solicitudes = async (req, res) => {
    try {
        const [rows] = await pool.query("CALL SP_VER_SOLICITUDES()");
        res.status(200).json({ cuenta: rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};