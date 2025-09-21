const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 8000;


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

http.listen(PORT, () => {
    console.log("server created at " + PORT);
})


//socket
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('connected');

    socket.on('message', (msg) => {
        // console.log(msg);

        //send to all clients except myself
        socket.broadcast.emit('send_msg', msg);
    })

})