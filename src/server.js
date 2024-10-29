const express = require('express');
const swaggerUI = require('swagger-ui-express');
const userController = require('./controllers/userController');

const app = express();
app.use(express.json());
app.use('/api/user', userController);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')))

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});