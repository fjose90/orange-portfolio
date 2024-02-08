import express from "express";

const usersRouter = express.Router();

usersRouter.post("/users", (req, res) => {
  res.send("Cria novo usuário");
});

export default usersRouter;
