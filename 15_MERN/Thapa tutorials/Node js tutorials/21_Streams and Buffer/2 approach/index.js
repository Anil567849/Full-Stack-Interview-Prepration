const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on('request', (req, res) => {

    const rstream = fs.createReadStream('inputs.txt');


    // read data chunk my chunk (jese recyclerView kaam krta h android m) it won't load all data at one time
    // jese youtube thoda thoda buffer krta h vo bhi buffer and streaming h
    // data, end, error inbuilt keyword h 
    rstream.on('data', (chunkData) => {
        res.write(chunkData);
    });

    // when read is complete 
    rstream.on('end', () => {
        res.end();
    });

    // if there is any error 
    rstream.on('error', (err) => {
        console.log(err);
        res.end("file not found");
    });


});


server.listen(8000, '127.0.0.1', () => {
    console.log('connected');
});


