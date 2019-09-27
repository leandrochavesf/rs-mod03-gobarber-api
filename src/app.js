/**
 * O arquivo app.js buscara organizar a estrutura da aplicacao, bem
 * como todos as outras funciolidades e plugins dentro de seus middlewares e rotas
 */
const express = require("express");
const routes = require("./routes");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
