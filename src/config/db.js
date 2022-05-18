const { Sequelize } = require('sequelize');

class Database {
    constructor(){
        this.mysqlDataBase();
        this.sequelize;
    }

    mysqlDataBase(){
        this.sequelize = new Sequelize('pain1521_rastreio', 'pain1521_pecista', '@Pecista2021', {
            host: '162.241.62.177',
            port: '3306',
            dialect: 'mysql',
            timestamps: false
        });

        this.sequelize.authenticate()
        .then(() => {
            console.log("Conexão com MySQL realizado com sucesso");
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = new Database();