const fs = require('fs');
const http = require('http');


const server = http.createServer();


server.on('request', (req, res) => {


    // The readable.pipe() method attaches a Writable stream to the readable, causing it to switch automatically into flowing mode and push all of its data to the attached Writable. The flow of data will be automatically managed so that the destination Writable stream is not overwhelmed by a faster Readable stream.
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);
});


server.listen(8000, '127.0.0.1', () => {
    console.log('connected');
});