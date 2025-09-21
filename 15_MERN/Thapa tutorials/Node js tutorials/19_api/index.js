const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url == '/api'){  
        fs.readFile('api.json', 'utf-8', (err, data) => {
            if(err){
                console.log(err);
            }else{

                // reading all data of json 
                // res.end(data);


                //reading single data from json
                res.writeHead(200, {"Content-type" : "application/json"});
                const objData = JSON.parse(data);
                res.end(objData[0].name);   

            }
        });
    }
});


server.listen(8000, '127.0.0.1', () =>{
    console.log("connected");
})