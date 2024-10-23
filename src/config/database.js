const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão efetuada no db com suvecesso');
        return sequelize.sync();
    });

module.exports = sequelize;