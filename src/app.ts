import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes";
import { PrismaClient } from "@prisma/client";
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use("/api", contactRoutes);

export default app;
