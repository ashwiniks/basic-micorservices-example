const server = require('express')();
const { databaseFunction } = require('./database');

server.get('/', (req, res, next) => {
        
          res.send( databaseFunction());
});

server.get('/test', (req, res, next) => {
          res.send('hello world from test');
});


server.listen(3000, () => {
          console.log("working on port 3000");
})