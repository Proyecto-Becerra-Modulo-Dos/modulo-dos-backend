import { basedatos } from "../config/mysql.db";
import bcrypt, { hash } from "bcrypt";
import { config } from "dotenv";
config();

export const crearEmpleado = async (req, res) => {
    const { identificacion, nombre, apellido, usuario, celular, direccion, email, contrasena, rol } = req.body;

    console.log('Datos recibidos:', req.body); // Para depuración

    try {
        const [respuesta] = await basedatos.query(`CALL SP_CREAR_EMPLEADO('${rol}','${usuario}','${identificacion}','${nombre}','${apellido}','${celular}','${direccion}','${contrasena}','${email}');`);
        console.log('Respuesta de la base de datos:', respuesta); 
    } catch (error) {
        console.error('Error al crear empleado:', error);
        res.status(500).json({ error: 'Error al crear empleado', detalles: error });
    }
};

    // const hashedPassword = await bcrypt.hash(contrasena, saltRounds);
