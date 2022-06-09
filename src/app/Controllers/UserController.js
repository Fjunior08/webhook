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
      
      const rotas_url = []
            
        
       const route_id = req.body.route_id;
        const r4mAPI = '7C065C7459059F5B676FE486E6B544A4';
        const name = await axios.get(`https://api.route4me.com/api.v4/route.php?api_key=${r4mAPI}&&route_id=${route_id}`)
        
        rotas_url.push(name)

        async function getRotas(){
        
          const fetchrotas = rotas_url.map((name) => axios.get(name)
          .then((name)=>{
            return name.data;
            })
          )
          const rm = r4m.create(fetchrotas)
          .then((values) => {
            //res.send(values)
            console.log(rm)
          })
        }

        getRotas();



    }

}
module.exports = new UserController();