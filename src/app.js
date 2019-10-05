/**
 * O arquivo app.js buscara organizar a estrutura da aplicacao, bem
 * como todos as outras funciolidades e plugins dentro de seus middlewares e rotas
 */
import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uplads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
