import { pool } from "../config/mysql.db.js";
import bcrypt, { hash } from "bcrypt";
import { config } from "dotenv";
config();

export const crearEmpleado = async (req, res) => {
    const identificacion = req.body.identificacion;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const celular = req.body.celular;
    const direccion = req.body.direccion;
    const email = req.body.email;
    const contrasena = req.body.contrasena;
    const rol = req.body.rol;

    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    try {
        const [respuesta] = await pool.query(`CALL SP_CREAR_EMPLEADO('${identificacion}','${nombre}','${apellido}','${celular}','${direccion}','${email}','${hashedPassword}','${rol}');`);
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json(error);
    }
};