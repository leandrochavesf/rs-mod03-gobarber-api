/**
 * Onde se encontra o cadastro de todas as rotas da aplicacao
 */
import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
