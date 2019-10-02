/**
 * Onde se encontra o cadastro de todas as rotas da aplicacao
 */
import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.put('/users', UserController.update);

export default routes;
