import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();
app.use(express.json());
app.use("/api/tasks", tasksRouter);

export default app;
