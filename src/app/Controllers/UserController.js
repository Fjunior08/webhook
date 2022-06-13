//const r4m_rotas = require('../models/Rotas');
const r4m = require('../models/rotas2');
const axios = require('axios');

/**
 * Class controle app
 * 
 */
class UserController {

    show(req, res) {
        return res.status(200).json({
            users: "ok"
        })
    }

    async store (req, res) {
       
      const rotas_url = [];
      
      
      
        const r4mAPI = '7C065C7459059F5B676FE486E6B544A4';
        const route_id = req.body.route_id;
        const name = await axios.get(`https://api.route4me.com/api.v4/route.php?api_key=${r4mAPI}&&route_id=${route_id}`)

        rotas_url.push(name.data.addresses);

        console.log(rotas_url)


        // const { custom_fields_str_json } = req.rotas_url;
        // console.log(custom_fields_str_json);
    }
           // const { route_destination_id } = req.rotas_url;
        //         console.log(route_destination_id);
        //const user = req.name;
}
module.exports = new UserController();