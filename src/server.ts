import express from 'express';

const app = express();

app.get('/', (request, response) => console.log( 'hello world'));

app.listen(3333);

