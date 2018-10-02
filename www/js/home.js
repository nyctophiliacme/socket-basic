var imported = document.createElement('script');
imported.src = "/socket.io/socket.io.js";
document.head.appendChild(imported);

var socket = io();

socket.emit('chat-message', "asdfasdfas");