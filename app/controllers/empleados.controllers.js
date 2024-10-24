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

export const solicitar = async (req, res) => {
    try {
        const [rows] = await pool.query("CALL SP_VER_CUENTA_BANCARIA()");
        res.status(200).json({ cuenta: rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const permisoAusencia = async(req, res) =>{
  const { fecha_ausencia, tipo_permiso, motivo, id_empleado } = req.body;
  try {
    const [resultado] = await pool.query(
      `INSERT INTO Permiso_Ausencia (fecha_ausencia, tipo_permiso, motivo,empleadoid) VALUES (?, ?, ?, ?)`,
      [
          fecha_ausencia,
          tipo_permiso,
          motivo,
          id_empleado
      ]
    );
    res.status(201).json({ success: true, message: 'Permiso creado exitosamente', data: resultado.insertId});
  }catch (error) {
    console.log(error);

    res.status(500).json({
        mensaje: "Error en las operaciones",
        error: error.message
    });
  }
}
