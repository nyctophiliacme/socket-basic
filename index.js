var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3007, function(){
	console.log("Listening on 3007");
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '\\index.html');
});

io.on('connection', function(socket){
	console.log("A user has connected");

	socket.on('chat-message', function(msg){
		console.log("Message --> " + msg);
		io.emit('chat-message', msg);
	});

	socket.on('disconnect', function(){
		console.log("User disconnected");
	});
});