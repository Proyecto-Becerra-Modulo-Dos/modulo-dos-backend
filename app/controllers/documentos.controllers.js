import { config } from "dotenv";
config();

export const uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No se ha subido ningún archivo.' });
    }
    res.json({ file: req.file.filename, message: 'Archivo subido con éxito!' });
};
