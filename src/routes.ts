import {getRepository} from 'typeorm';

import Plans from './models/Plans';

import {Router} from 'express';

import PlansController from './controllers/plansController';




const routes = Router();


routes.post('/plans', PlansController.create);
routes.get('/plans', PlansController.index);
routes.get('/plans/:id', PlansController.show);

routes.get('/plans/byDddType/:ddd/:type', PlansController.showByDddType);
routes.get('/plans/byDddPlan/:ddd/:plan', PlansController.showByDddPlan);
routes.get('/plans/byDddOperator/:ddd/:operator', PlansController.showByDddOperator);


routes.put('/plans/:id', PlansController.update);
routes.delete('/plans/:id', PlansController.delete);


export default routes;
