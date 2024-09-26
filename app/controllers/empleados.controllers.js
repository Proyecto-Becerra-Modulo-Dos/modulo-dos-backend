import { basedatos } from "../config/mysql.db";
import bcrypt, { hash } from "bcrypt";
import { config } from "dotenv";
config();

const saltRounds = 10;

export const crearEmpleado = async (req, res) => {
    const { identificacion, nombre, apellido, usuario, celular, direccion, email, contrasena, rol } = req.body;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    try {
        const [respuesta] = await basedatos.query(`CALL SP_CREAR_EMPLEADO('${rol}','${usuario}','${identificacion}','${nombre}','${apellido}','${celular}','${direccion}','${hashedPassword}','${email}');`);
        console.log('Respuesta base de datos:', respuesta); 
        res.status(201).json({ message: 'Empleado creado exitosamente'});
    } catch (error) {
        console.error('Error al crear empleado:', error);
        res.status(500).json({ error: 'Error al crear empleado', detalles: error });
    }
};