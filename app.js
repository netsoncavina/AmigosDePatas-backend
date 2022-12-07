// Modulos
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

// Rotas
import postRoutes from "./routes/postsRoute.js";
import userRoutes from "./routes/userRoute.js";

const app = express();

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

export default app;
