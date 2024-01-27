import express from "express";
import { fileURLToPath } from "url";
import connectDB from "../databases/db.js";
import userRouter from "./routers/user.router.js";
import path from "path";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//aplicacion express y puerto de servidor node
const app = express();
const PORT = process.env.PORT || 3006;

//procesar las solicitudes JSON
app.use(express.json());

// Servir archivos estaticos de la carpeta dist/
app.use(express.static(path.resolve(__dirname, "../dist")));

//rutas
app.use(userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Express server run: http://localhost:${PORT}`);
});
connectDB();
