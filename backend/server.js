import express from "express";
import connectDB from "../databases/db.js";
import userRouter from "./routers/user.router.js";
import cors from "cors";

//aplicacion express y puerto de servidor node
const app = express();
const PORT = process.env.PORT || 3006;

//procesar las solicitudes JSON
app.use(express.json());

//interactuar con el puerto de React dev
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
//rutas
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Express server run: http://localhost:${PORT}`);
});
connectDB();
