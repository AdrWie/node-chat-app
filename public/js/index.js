var socket = io();   // connect from client to server "server.js"

socket.on('connect', function () {
    console.log('Client connected to server');
 
    socket.emit('createMessage', {
        from: 'anna@mail.com',
        text: 'Det är din babe!'
    });
});

socket.on('disconnect', function () {
    console.log('Client disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
})