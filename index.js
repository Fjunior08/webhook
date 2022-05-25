const app = require('./src/routes');
const http = require('http');
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(PORT, () => {console.log(`App listenner in port ${PORT}`)})