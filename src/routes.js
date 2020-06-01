import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SaleController from './app/controllers/SaleController';

const routes = new Router();

routes.post('/users', UserController.create);

routes.post('/sessions', SessionController.create);

routes.post('/sales', SaleController.create);

export default routes;
