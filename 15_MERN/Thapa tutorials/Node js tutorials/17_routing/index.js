const { count } = require('console');
const http = require('http');


// for response 
const server = http.createServer((req, res) => {

    // console.log(req.url);

    if(req.url == '/'){
        res.end('home')
    }else if(req.url == '/about'){
        res.end('about');
    }else{

        // res.writeHead(404);
        // res.end("404 Not Found");   


        //html 
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1> 404 Not Found </h1>");

    }

    // res.end("response is here");
});



// for request 
server.listen(8000, '127.0.0.1', ()=>{
    console.log("listening 8000 port")
});