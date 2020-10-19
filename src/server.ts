import express from 'express';

import './infraStructure/database/connection';

import path from 'path';

import 'express-async-errors';

import errorHandler from './infraStructure/errors/hander';

import cors from 'cors';

import routes from './routes';




const app = express();



app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333);
    