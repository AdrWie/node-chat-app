const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);          // websocket server - server to client

app.use(express.static(publicPath));

// socket. -> emits to a single connection
// io -> emits to all connections

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New User joined',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
         console.log('CreateMessage', message);
         io.emit('newMessage', {
             from: message.from,
             text: message.text,
             createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {   // broadcast to all except yourself
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        //}); 
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected...');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});