const User = require('./src/routes');
const http = require('http');
 
const server = http.createServer((req, res) => {
    console.log('server rodando!')
})

server.listen(8080);

// const app = require('./src/app');

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {console.log(`App listenner in port ${PORT}`)})