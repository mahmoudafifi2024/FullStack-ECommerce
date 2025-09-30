// src/app.ts
import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./modules/auth/routes/auth.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// Middlewares
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Error handler
app.use(errorHandler);

export default app;
