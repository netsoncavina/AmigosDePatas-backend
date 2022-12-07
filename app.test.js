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

describe("Usuários", () => {
  describe("POST tests", () => {
    it("POST /users --> cadastra um usuário", async () => {
      const response = await supertest(app).post("/users").send({
        name: "Teste",
        email: "email@email.com",
        password: "123456",
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("GET tests", () => {
    it("GET /users --> Array de usuários", async () => {
      const response = await supertest(app).get("/users");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
    });

    it("GET /users/:email --> Usuário especifico por email", async () => {
      const response = await supertest(app).get("/users/email@email");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("email");
    });

    it("GET /users/:email --> Array vazio se não encontrado", async () => {
      const response = await supertest(app).get("/users/email@naoexiste");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(0);
    });

    it("GET /users/:name --> Usuário especifico por nome", async () => {
      const response = await supertest(app).get("/users/Teste");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("name");
    });

    it("GET /users/:name --> Array vazio se não encontrado", async () => {
      const response = await supertest(app).get("/users/naoexiste");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(0);
    });
  });

  describe("UPDATE tests", () => {
    it("UPDATE /users/:id --> atualiza os dados de um usuário", async () => {
      const response = await supertest(app).put("/users/1").send({
        name: "Teste",
        email: "teste@teste.com",
        password: "123456",
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("DELETE tests", () => {
    it("DELETE /users/:id --> Excluir um usuário", async () => {
      const response = await supertest(app).delete("/users/1");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(0);
    });
  });
});
