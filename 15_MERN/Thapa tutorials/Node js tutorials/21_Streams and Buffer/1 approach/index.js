const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile('input.txt', 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.end(data);
        }
    });
});

server.listen(8000, '127.0.0.1', () => {
    console.log('connected');
});
