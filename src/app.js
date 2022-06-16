const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const morgan = require('morgan');
require('../src/config/db');
const bodyParser = require('body-parser');


class App {
    
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json()); 
        this.middlewares();
        this.routes();
    }

    middlewares(req, res, next) {
        this.app.use(express.json());
        this.app.use(morgan(":method :url :response-time"));
        this.app.use((req, res, next) => {            
            res.header("Access-Controll-Allow-Origin", "*");
            res.header("Access-Controll-Allow-Methods", "Get, POST, PUT, DELETE");
            res.header("Access-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, x-Requested-with");
            res.header("user-agent", "Mozilla/4.0");
            
            
            this.app.use(cors());
            next();
        })
        this.app.use((req, res, next) => {
        try{
            const event = req.body;
            if(event.activity_type == 'route-optimized') { 
            this.app.use(cors());
            next(event.store);
            }else{
            res.status(202).json({
            //   error: false,
            //   message: "valid request"
            })      
            }
        }catch{
                res.status(400).json({
                    message: "ok"
                })
            }    
        })
    }
    routes () {
        this.app.use(routes);
    }
}

module.exports = new App().app;