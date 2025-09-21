import express from 'express';
import { Server } from 'socket.io';
const app = express();
const server = app.listen(8000);
const io = new Server(server, { cors: { origin: '*' } });

const users = {};

io.on("connection", socket => {
    // console.log("hello")
    socket.on("new-user-joined", name => {
        // console.log("new user ", name);


        // add in object 
        // console.log("new user id ", socket.id);
        users[socket.id] = name;

        // tell remaining all people that new user joined 
        socket.broadcast.emit("user-joined", name);
    });

    socket.on("send", message => {
        socket.broadcast.emit("receive", {message : message, name : users[socket.id]});
    });


    socket.on("disconnect", ()=>{
        socket.broadcast.emit('leave',{name :  users[socket.id]});
        delete users[socket.id];
    })
})


