const server = require('express')();
const axios = require('axios');
server.get('/', async (req, res, next) => {
          const result = await axios.get('http://localhost:4000/db');
          console.log("sdsdsddd", result);
          res.send(result.data);
});

server.get('/test', (req, res, next) => {
          res.send('hello world from test');
});


server.listen(3000, () => {
          console.log("working on port 3000");
})