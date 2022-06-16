//const r4m_rotas = require('../models/Rotas');
const r4m = require('../models/rotas2');
const axios = require('axios');
const bodyParser = require('body-parser');

/**
 * Class controle app
 * 
 */
class UserController {

    show(req, res, next) {
        return res.status(200).json({
            users: "ok"
        })
    }

    async store (req, res, next) {                      
        try {
            const event = req.body;
               if(event.activity_type == 'route-optimized') {
                
                
            const r4mAPI = '7C065C7459059F5B676FE486E6B544A4';
            const route_id = req.body.route_id;        
            const member_id = req.body.member_id;
            //const route_opt_ID = req.body.optimization_problem_id;
            //const name = await axios.get(`https://api.route4me.com/api.v4/optimization_problem.php?optimization_problem_id=${route_opt_ID}&&api_key=${r4mAPI}&&member_id=${member_id}`)
            const name = await axios.get(`https://api.route4me.com/api.v4/route.php?api_key=${r4mAPI}&&route_id=${route_id}&&member_id=${member_id}`);
            
           

            for(let user of name.data.addresses) {
                console.log(user)

            const data = JSON.parse(JSON.stringify(user));                
            const use = user.parameters;
            
                const rota =(use,{                     
                    CD_LOJA: data.custom_fields["cdloja"],
                    DT_ROTA: new Date(), 			
                    CODCLI:  data.custom_fields["codcli"],		
                    NOMECLI: data["alias"],		
                    TRACKING_NUMBER: data["tracking_number"],
                    ROUTE_ID: data["route_id"],			
                    ROUTE_DESTINATION_ID: data["route_destination_id"],
                    API_KEY: data.null,	
                    PEDIDO: data.custom_fields["pedido"],                
                })

                 r4m.create(rota, (error) => {
                    if(error) return res.status(400).json({
                        error: true,
                        message: "erro ao gravar no banco"
                        })
                        return res.status(200).json({
                        error: false,
                        message: 'inserido com sucesso'
                        })                                      
                    }) 
            
            }                        
            res.status(200).json({
                error: false,
                message: 'ok'
        })
        }else{
            res.status(202).json({
                error: false,
                message: 'ok'
            })   
        }
        
        



        }catch (error) {
        // Trate o erro aqui.
        console.log('Whoops! Houve um erro.', error.message || error)
            res.status(404).json({
            })      
        }          
    }
}
module.exports = new UserController();