const Sequelize = require('sequelize');
const { sequelize } = require('../../config/db');



const r4m = sequelize.define('r4m_rotas2s', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  CD_LOJA: {
    type: Sequelize.INTEGER,
    
  },
  DT_ROTA: {
    type: Sequelize.DATE,
    
  },
  CODCLI: {
      type: Sequelize.INTEGER,
      
    },
  NOMECLI: {
      type: Sequelize.STRING,
      
    },
  TRACKING_NUMBER: {
      type: Sequelize.STRING,
      
    },
  ROUTE_ID: {
      type: Sequelize.STRING,
      
  },
  ROUTE_DESTINATION_ID: {
      type: Sequelize.INTEGER,
      
  },
  API_KEY: {
      type: Sequelize.STRING,
      
    },
  PEDIDO: {
    type: Sequelize.STRING,
    
  },
  // STATUS: {
  //   type: Sequelize.INTEGER,
  // },
  // ETA: {
  //   type: Sequelize.DATE,
  // },
  // CD_MOTORISTA: {
  //   type: Sequelize.INTEGER,
  // },
  //  MODIFIED_DATE: {
  //   type: Sequelize.DATE,
  // }
  
  });

  //Criar a tabela se não existir
  //r4m.sync();
  //Alter table
  //r4m.sync({ Alter: true})
  

module.exports = r4m;