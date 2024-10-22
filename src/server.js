const express = require('express');
const userController = require('./controllers/userController');

const app = express();
app.use(express.json());
app.use('/api/user', userController);

// TODO - Configurar Swagger

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});