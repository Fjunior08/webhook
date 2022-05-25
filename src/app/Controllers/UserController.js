//const r4m_rotas = require('../models/Rotas');
const r4m = require('../models/rotas2');
const axios = require('axios');

/**
 * Class controle app
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

      
    
      //   res.status(404).json({
      //     error: true,
      //     message: "requisição invalida"
      //   })
      // }else{
      //   res.status(200).json({
      //     error: false,
      //     message: "requisição valida"
      //   })
      //  }
      
      // const route_id = req.body.route_id;
      // const r4mAPI = '7C065C7459059F5B676FE486E6B544A4';
      // const name = await axios.get(`https://api.route4me.com/api.v4/route.php?api_key=${r4mAPI}&&route_id=${route_id}`)

    /**
     * json de resposta da URL 
     */
      
        // .then(rotas = {
        //   CD_LOJA: data.custom_fields.cdloja, 
        //   DT_ROTA: data.route_date.format("YYYY-MM-DD HH:mm:ss"),
        //   CODCLI: data.custom_fields.codcli,
        //   NOMECLI: data.route_name,
        //   TRACKING_NUMBER: data.tracking_number,          
        //   ROUTE_ID: data.route_id,
        //   ROUTE_DESTINATION_ID: data.route_destination_id,
        //   ROUTE_NAME: data.ROUTE_NAME,
        //   API_KEY: data.api_key,
        //   PEDIDO: data.custom_fields.pedido
        //  })
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
          if(err)
          return res.status(400).json({
            error: true,
            message: "Error ao inserir no banco de dados"
          })

          return res.status(200).json({
            errr: false,
            message: "Inserido com sucesso!"
          })
        })  
      


      // const r4m = {name}

      //  async function getData(){ 
      //    try {
      //      r4m.select().from('r4m_rotas2s')
      //      //database.select().where('STATUS', '<', 4 ).orWhere({STATUS: 4, VISITED: null}).table('r4m_rotas').orderBy("ID", "DESC").limit(5)
      //      .then(response=>{
      //        const results = JSON.parse(JSON.stringify(response));
      //        let numInserts = 0;
      //        let rotasErro = 0;  
            
     
       
      //        results.map(data=>{
      //         const ID =  data.ID;
      //         const API_KEY = data.API_KEY;
      //         const CODCLI = data.CODCLI;
      //         const ROUTE_DE = data.ROUTE_DESTINATION_ID;
      //         const STATUS = data.STATUS;
      //         const ETA = data.ETA; 
      //         const TRACKING_NUMBER = data.TRACKING_NUMBER;     
      //         const URL = `https://api.route4me.com/api.v4/address.php?api_key=${API_KEY}&route_id=${route_id}&route_destination_id=${ROUTE_DE}`
                          
      //         async function getRota(url){
      //           try {

      //           const { data } = await axios.get(url)
      //           .catch(() => {
      //             r4m.create({
      //               CD_LOJA: data,
      //               DT_ROTA: data,
      //               CODCLI: data,
      //               NOMECLI: data,
      //               TRACKING_NUMBER: data,
      //               ROUTE_ID: data,
      //               ROUTE_DESTINATION_ID: data,
      //               API_KEY: data,
      //               PEDIDO:data
      //             }) 
      //             .then(() => {
      //               const query = r4m.create({results})
      //             })                   
      //             return;
      //           });
                
              
                                                
      //           const name = await axios.get(`https://api.route4me.com/api.v4/route.php?api_key=${r4mAPI}&&route_id=${ROUTE_ID}`)
      //           .catch(() => { 
      //             return;
      //           });
              

      //           const ROUTE_NAME = await name.data.parameters.route_name;


      //           const rota = {
      //             STATUS: data.is_visited === true  ? 4 : STATUS, 
      //             ETA: data.manifest.estimated_arrival_time_ts > 0 ? moment.unix(data.manifest.estimated_arrival_time_ts).format("YYYY-MM-DD HH:mm:ss") : ETA,
      //             SEQUENCE_NO: data.sequence_no,
      //             PRIORITY: data.priority,
      //             MEMBER_ID: data.member_id,          
      //             VISITED: data.is_visited,
      //             GRUPO: data.group,
      //             ROUTE_NAME: ROUTE_NAME,
      //             PEDIDO: data.custom_fields.pedido,

      //             LAST_VISITED: data.timestamp_last_visited > 0 ? moment.unix(data.timestamp_last_visited).format("YYYY-MM-DD HH:mm:ss") : null,
      //             LAST_DEPARTED: data.timestamp_last_departed > 0 ? moment.unix(data.timestamp_last_departed).format("YYYY-MM-DD HH:mm:ss") : null, 
                  
      //             PROJECTED_ARRIVAL_TIME: data.manifest.projected_arrival_time_ts > 0 ? moment.unix(data.manifest.projected_arrival_time_ts).format("YYYY-MM-DD HH:mm:ss") : null, 
      //             PROJECTED_DEPARTURE_TIME: data.manifest.projected_departure_time_ts > 0 ? moment.unix(data.manifest.projected_departure_time_ts).format("YYYY-MM-DD HH:mm:ss") : null, 
                  
      //             ACTUAL_ARRIVAL: data.manifest.actual_arrival_time_ts > 0 ? moment.unix(data.manifest.actual_arrival_time_ts).format("YYYY-MM-DD HH:mm:ss") : null,
      //             ACTUAL_DEPARTURE: data.manifest.actual_departure_time_ts > 0 ? moment.unix(data.manifest.actual_departure_time_ts).format("YYYY-MM-DD HH:mm:ss") : null,
                  
      //             ARRIVAL_ON_TIME: data.manifest.arrival_on_time,
      //             ARRIVAL_DEVIATION_SEC: data.manifest.arrival_deviation_seconds > 0 ? moment.unix(data.manifest.arrival_deviation_seconds).format('mm:ss') : 0,
                  
      //             GEOFENCE_VISITED: data.geofence_detected_visited_timestamp > 0 ? moment.unix(data.geofence_detected_visited_timestamp).format("YYYY-MM-DD HH:mm:ss") : null,
      //             GEOFENCE_DEPARTED: data.geofence_detected_departed_timestamp > 0 ? moment.unix(data.geofence_detected_departed_timestamp).format("YYYY-MM-DD HH:mm:ss") : null,
      //             GEOFENCE_TIME_ON_SITE: data.geofence_detected_service_time > 0 ? moment.unix(data.geofence_detected_service_time).format("mm:ss") : null,           
      //           }
                        
      //           r4m.create({rota})  
      //           .then(() => {  
      //             const query = r4m.create(rota)                                
      //           }).catch(err => console.log(err))
                          
      //         }catch(e){
              

      
      //         }} 
            
      //         getRota(URL); 
                            
      //       })
      //     }).catch(error=>{console.log(error)})     
      //   }catch(err){
      //     console.log(err)
        
      // // } 
  
}
}
}
module.exports = new UserController();