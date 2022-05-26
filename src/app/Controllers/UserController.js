//const r4m_rotas = require('../models/Rotas');
const r4m = require('../models/rotas2');
const axios = require('axios');

/**
 * Class controle app
 * 
 */
class UserController {

    show(req, res) {
        var users = ["junior", "pecista", "kaizen"]        
        return res.status(200).json({
            error: false,
            users
        })
    }
      
    async store (req, res) {

      const event = req.body;

        if(event.activity_type == 'route-optimized' ) {
          const { route_id } = req.body;
          //{ CD_LOJA, DT_ROTA, CODCLI,  NOMECLI, TRACKING_NUMBER, ROUTE_ID, ROUTE_DESTINATION_ID, API_KEY, PEDIDO } = rota;
          const data = { ROUTE_ID: route_id }
          //{ CD_LOJA, DT_ROTA, CODCLI, NOMECLI, TRACKING_NUMBER, ROUTE_ID, ROUTE_DESTINATION_ID, API_KEY, PEDIDO }
          
    /** 
      * Inserir dados no banco Mysql
      */
       
    await r4m.create(data, (err) => {
        next();
        })   
    }
}}

module.exports = new UserController();