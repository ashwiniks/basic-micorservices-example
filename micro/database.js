const server = require('express')();

server.get('/db',(req,res,next) => {
          const config =  { "title": "this is test" };
          const data = { "title": "this is test" };

          res.send(data);

})


server.listen(4000,()=>{
console.log("server is listening on 4000");
})