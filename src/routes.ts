import {getRepository} from 'typeorm';

import Plans from './models/Plans';

import {Router} from 'express';

import PlansController from './controllers/plansController';




const routes = Router();


routes.post('/plans', PlansController.create);
routes.get('/plans', PlansController.index);
routes.get('/plans/:id', PlansController.show);


export default routes;