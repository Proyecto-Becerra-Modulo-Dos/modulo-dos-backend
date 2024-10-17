import { config } from "dotenv";
import { basedatos, pool } from "../config/mysql.db";
import mes from "../messages/mes";
config();


export const crearpermiso = async (req, res) => {
    const { permisos, estado } = req.body;

    try {
        
        const crear = await basedatos.query(`CALL SP_CREAR_PERMISO(?,?)`, [permisos, estado]);

        if (crear[0].affectedRows == 1) {
            return mes.success(req, res, 200, "Permiso creado");
        } else {
            return mes.error(req, res, 400, "No se pudo crear el permiso");
        }

    } catch (error) {
        console.error(error);
        return mes.error(req, res, 500, "Error al crear el permiso");
    }
};

export const permisos = async (req, res) => {
    const { id, permisos, estado } = req.body;

    try {
        let resultado;
        if (estado === "inactivo") {
            resultado = await basedatos.query(`CALL SP_DESACTIVAR_PERMISOS(?,?,?)`, [id, permisos, estado]);
        } else if (estado === "activo") {
            resultado = await basedatos.query(`CALL SP_ACTIVAR_PERMISOS(?,?,?)`, [id, permisos, estado]);
        } else {
            return mes.error(req, res, 400, "Estado cancelado, debe ser inactivo o activo.");
        }

        
        if (resultado[0].affectedRows == "activo") {
            const mensaje = estado === "activo" ? "Permiso activado" : "Permiso desactivado";
            return mes.success(req, res, 200, mensaje);
        } else {
            return mes.error(req, res, 400, "No se pudo actualizar el permiso.");
        }

    } catch (error) {
        console.error(error);
        return mes.error(req, res, 500, "Error");
    }
};


