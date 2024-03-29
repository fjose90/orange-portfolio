import express from "express";
import cors from "cors";

import usersRouter from "./routes/users-router";

// porta do servidor
const PORT = process.env.PORT ?? 4000;

// Host do servidor
const HOST = process.env.HOST ?? "http://localhost";
// App Express
const app = express();

// Endpoint raiz
app.get("/", (req, res) => {
  res.send("Bem-vindo!");
});
// Cors
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// Rotas
app.use("/api", usersRouter);

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
  res.status(404);
});
// Inicia o sevidor
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOST}:${PORT}`);
});
