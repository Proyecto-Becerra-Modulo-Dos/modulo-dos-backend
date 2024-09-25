import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import ruta from "./routes/index.js";
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", ruta);
app.use(cookieParser())

app.set("port", process.env.PORT || 6000);

export default app;