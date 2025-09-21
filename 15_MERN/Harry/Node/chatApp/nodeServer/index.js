//node server

const io = require('socket.io')(8000)
    
const users = {};

console.log("chla ");

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('new-user-joined', name => {
        
        users[socket.id] = name;

        socket.broadcast.emit("user-joined", name);

    });

    socket.on("send", message =>{
        socket.broadcast.emit("receive", {message :  message, name : users[socket.id]} );
    });
    
  });