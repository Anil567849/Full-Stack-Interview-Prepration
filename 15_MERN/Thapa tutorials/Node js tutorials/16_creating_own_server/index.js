const http = require('http');


// for response 
const server = http.createServer((req, res) => {
    res.end("response is here");
});



// for request 
server.listen(8000, '127.0.0.1', ()=>{
    console.log("listening 8000 port")
});