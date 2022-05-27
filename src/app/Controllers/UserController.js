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
      
    async store (req, res, next) {

      const event = req.body;

        if(event.activity_type === 'route-optimized' ) {
          res.status(200).json({
            erro: false,
            message: "valid request"            
          })
        }else{
          res.status(404).json({
            erro: true,
            message: "invalid request"
          })
        }

      const route_id  = req.body.route_id;
      const r4mAPI = '7C065C7459059F5B676FE486E6B544A4';
      const name = await axios.get(`https://api.route4me.com/api.v4/route.php?api_key=${r4mAPI}&&route_id=${route_id}`)
      console.log(name);







      //const { route_id } = req.body;
      //{ CD_LOJA, DT_ROTA, CODCLI,  NOMECLI, TRACKING_NUMBER, ROUTE_ID, ROUTE_DESTINATION_ID, API_KEY, PEDIDO } = rota;
      //const data = { ROUTE_ID: route_id }
      //{ CD_LOJA, DT_ROTA, CODCLI, NOMECLI, TRACKING_NUMBER, ROUTE_ID, ROUTE_DESTINATION_ID, API_KEY, PEDIDO }
          
    /** 
      * Inserir dados no banco Mysql
      */
       
    await r4m.create(name, (err) => {
        
        })   
    }
}

module.exports = new UserController();