import request from "supertest";
import app from "../server.js";
import { pool } from "../db.js";

beforeAll(async () => {
  await pool.query("DELETE FROM tasks");
});

afterAll(async () => {
  await pool.end();
});

describe("Tasks API", () => {
  it("should create a new task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ name: "Test Task", description: "Test Desc" });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Test Task");
  });

  it("should get all tasks", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it("should delete a task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ name: "Task to Delete", description: "Delete me" });
    const taskId = res.body.id;
    const deleteRes = await request(app).delete(`/api/tasks/${taskId}`);
    expect(deleteRes.statusCode).toBe(204);
  });

  it("should mark a task as completed", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ name: "Task to Complete", description: "Complete me" });
    const taskId = res.body.id;
    const updateRes = await request(app).patch(`/api/tasks/${taskId}`);
    expect(updateRes.statusCode).toBe(200);
    expect(updateRes.body.completed).toBeTruthy();
  });
});
