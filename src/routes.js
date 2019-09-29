/**
 * Onde se encontra o cadastro de todas as rotas da aplicacao
 */
import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

export default routes;
