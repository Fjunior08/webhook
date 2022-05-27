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

      const event = req.body;
        if(event.activity_type == 'route-optimized') { 
          res.status(200).json({
            error: false,
            message: "valid request"
          })        
      }else{
        res.status(202).json({
          error: false,
          message: "valid request"
        })
      }
}}

module.exports = new UserController();