var socket = io();   // connect from client to server "server.js"

socket.on('connect', function () {
    console.log('Client connected to server');
});

socket.on('disconnect', function () {
    console.log('Client disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});
