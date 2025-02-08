import express from "express";
import tasksRouter from "./routes/tasks.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasksRouter);

export default app;
