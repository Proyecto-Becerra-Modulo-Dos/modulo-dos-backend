import { config } from "dotenv";
import { basedatos, pool } from "../config/mysql.db";
config();

// Permiso Ausencia
export const verPermisos = async (req, res) => {
  try {
    const [datosDB1] = await basedatos.query(`call sp_ver_empleados();`);

    const [datosDB2] = await pool.query(`call sp_ver_permisos();`);

    const resultados = [];

    for (let i = 0; i < datosDB1[0].length; i++) {
      for (let j = 0; j < datosDB2[0].length; j++) {
        if (
          datosDB1[0][i].id === datosDB2[0][j].empleadoid &&
          datosDB2[0][j].estado === "En proceso"
        ) {
          resultados.push({
            idSoli: datosDB2[0][j].idSolicitudes,
            nombre: datosDB1[0][i].nombre,
            apellido: datosDB1[0][i].apellido,
            email: datosDB1[0][i].email,
            descripcion: datosDB2[0][j].descripcion,
            rol: datosDB1[0][i].rol,
            estado: datosDB2[0][j].estado,
          });
        }
      }
    }

    res.json(resultados);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const aprobarPermiso = async (req, res) => {
  const id = req.body.id;

  try {
    const [respuesta] = await pool.query(`call sp_aprobar_permiso(${id})`);
    res.json(respuesta);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const rechazarPermiso = async (req, res) => {
  const id = req.body.id;

  try {
    const [respuesta] = await pool.query(`call sp_rechazar_permiso('${id}')`);
    res.json(respuesta);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const verPermisosAprobados = async (req, res) => {
  try {
    const [datosDB1] = await basedatos.query(`call sp_ver_empleados();`);

    const [datosDB2] = await pool.query(`call sp_ver_permisos();`);

    const resultados = [];

    for (let i = 0; i < datosDB1[0].length; i++) {
      for (let j = 0; j < datosDB2[0].length; j++) {
        if (
          datosDB1[0][i].id === datosDB2[0][j].empleadoid &&
          datosDB2[0][j].estado === "Aprobado"
        ) {
          resultados.push({
            idSoli: datosDB2[0][j].idSolicitudes,
            nombre: datosDB1[0][i].nombre,
            apellido: datosDB1[0][i].apellido,
            email: datosDB1[0][i].email,
            descripcion: datosDB2[0][j].descripcion,
            rol: datosDB1[0][i].rol,
            estado: datosDB2[0][j].estado,
          });
        }
      }
    }

    res.json(resultados);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const verPermisosRechazados = async (req, res) => {
  try {
    const [datosDB1] = await basedatos.query(`call sp_ver_empleados();`);

    const [datosDB2] = await pool.query(`call sp_ver_permisos();`);

    const resultados = [];

    for (let i = 0; i < datosDB1[0].length; i++) {
      for (let j = 0; j < datosDB2[0].length; j++) {
        if (
          datosDB1[0][i].id === datosDB2[0][j].empleadoid &&
          datosDB2[0][j].estado === "Rechazado"
        ) {
          resultados.push({
            idSoli: datosDB2[0][j].idSolicitudes,
            nombre: datosDB1[0][i].nombre,
            apellido: datosDB1[0][i].apellido,
            email: datosDB1[0][i].email,
            descripcion: datosDB2[0][j].descripcion,
            rol: datosDB1[0][i].rol,
            estado: datosDB2[0][j].estado,
          });
        }
      }
    }

    res.json(resultados);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Trabajo Remoto
export const verTrabajoRemoto = async (req, res) => {
  try {
    const [datosDB1] = await basedatos.query(`call sp_ver_empleados();`);

    const [datosDB2] = await pool.query(`call sp_ver_trabajo_remoto();`);

    const resultados = [];

    for (let i = 0; i < datosDB1[0].length; i++) {
      for (let j = 0; j < datosDB2[0].length; j++) {
        if (
          datosDB1[0][i].id === datosDB2[0][j].empleadoid &&
          datosDB2[0][j].estado === "En proceso"
        ) {
          resultados.push({
            idSoli: datosDB2[0][j].idSolicitudes,
            nombre: datosDB1[0][i].nombre,
            apellido: datosDB1[0][i].apellido,
            email: datosDB1[0][i].email,
            descripcion: datosDB2[0][j].descripcion,
            rol: datosDB1[0][i].rol,
            estado: datosDB2[0][j].estado,
          });
        }
      }
    }

    res.json(resultados);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const aprobarTrabajoRemoto = async (req, res) => {
  const id = req.body.id;

  try {
    const [respuesta] = await pool.query(
      `call sp_aprobar_trabajo_remoto(${id})`
    );
    res.json(respuesta);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
