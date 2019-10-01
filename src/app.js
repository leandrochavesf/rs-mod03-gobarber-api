/**
 * O arquivo app.js buscara organizar a estrutura da aplicacao, bem
 * como todos as outras funciolidades e plugins dentro de seus middlewares e rotas
 */
import express from 'express';
import routes from './routes';

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

export default new App().server;
