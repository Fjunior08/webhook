const Sequelize = require('sequelize');
const { sequelize } = require('../../config/db');

/**
 * Table Structure
 */
const r4m = sequelize.define('r4m_rotas2s', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  CD_LOJA: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  DT_ROTA: {
    type: Sequelize.DATE(11),
    allowNull: true
  },
  CODCLI: {
      type: Sequelize.STRING(6),
      allowNull: true
    },
  NOMECLI: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
  TRACKING_NUMBER: {
      type: Sequelize.STRING(8),
      
    },
  ROUTE_ID: {
      type: Sequelize.STRING(32),
      
  },
  ROUTE_DESTINATION_ID: {
      type: Sequelize.INTEGER(11),
      allowNull: true
  },
  API_KEY: {
      type: Sequelize.STRING(32),
      allowNull: true
    },
  PEDIDO: {
    type: Sequelize.STRING(8),
    allowNull: null    
  },
  
  });
  //Criar a tabela se não existir
  //r4m.sync();
  //Altera a tabela
  //r4m.sync({ Alter: true})
module.exports = r4m;