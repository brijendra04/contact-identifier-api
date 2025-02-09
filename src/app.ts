import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", contactRoutes);

export default app;
