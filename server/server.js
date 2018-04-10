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

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'adde@mail.com',
        text: 'Hey, its me lets ut lunch',
        createdAt: '17:15'
    });

    socket.on('createMessage', (message) => {
        console.log('Createmessage', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected...');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});