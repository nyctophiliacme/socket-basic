var app = require('express')();
var http = require('http').Server(app);

// app.get('/', function(req, res){
// 	res.send('<h1>Hello World</h1>');
// });

http.listen(3007, function(){
	console.log("Listening on 3007");
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '\\index.html');
});