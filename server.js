var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('static'));
io.on('connection', require('./socket-events/connection.js'));

http.listen(3003, function(){
    console.log('listening on *:3003');
});
