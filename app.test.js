const supertest = require("supertest");
const app = require("./app");

describe("Posts", () => {
  describe("POST tests", () => {
    it("POST /posts --> cadastra um post", async () => {
      const response = await supertest(app).post("/posts").send({
        title: "Teste",
        content: "Teste",
        category: "Teste",
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("GET tests", () => {
    it("GET /posts --> Array de posts", async () => {
      const response = await supertest(app).get("/posts");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
    });

    it("GET /posts/:id --> Post especifico por ID", async () => {
      const response = await supertest(app).get("/posts/1");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });

    it("GET /posts/:id --> Array vazio se não encontrado", async () => {
      const response = await supertest(app).get("/posts/2");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(0);
    });
  });

  describe("UPDATE tests", () => {
    it("UPDATE /posts/:id --> atualiza os dados de um post", async () => {
      const response = await supertest(app).put("/posts/1").send({
        title: "Teste",
        content: "Teste",
        category: "Teste",
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("DELETE tests", () => {
    it("DELETE /posts/:id --> exclui um post", async () => {
      const response = await supertest(app).delete("/posts/1");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(0);
    });
  });
});
