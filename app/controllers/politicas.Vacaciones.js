import { basedatos } from "../config/mysql.db";
import bcrypt, { hash } from "bcrypt";
import { pool } from "../config/mysql.db";
import { config } from "dotenv";
config();


export const politicasVacaciones = async (req, res) => {
    try {
        const [rows] = await pool.query("CALL SP_POLITICAS_VACACIONES()");
        res.status(200).json({ politicas: rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};