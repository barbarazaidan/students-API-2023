const express = require('express');
const studentRouter = require('./router/studentRouter');
const swaggerUi = require('swagger-ui-express');

const app = express();
  
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json')));

app.use('/students', studentRouter);

module.exports = app;