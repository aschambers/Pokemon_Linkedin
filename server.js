// requires express and path
var express = require("express");
var path = require("path");
// creates the app express
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./client")));
app.get('/', function(req, res) {
  res.send("<h1>Hello World!</h1>");
})

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})

// server and port listener come before socket connection, this line 
// will not work without the variable server.
var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
	console.log('Sockets!!');
	console.log(socket.id);
	// socket code here
	socket.on("button_clicked", function (data){
    console.log('Someone clicked a button!  Reason: ' + data.reason);
    socket.emit('server_response', {response: "sockets are the best!"});
})
});

