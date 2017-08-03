module.exports = function(socket){
    console.log('a user connected');
    socket.on('disconnect', disconnectHandler);
    socket.on('chat message', require('./message.js').chatMessage);
    socket.emit('initial connection', require('./message.js').messageRegistry);
};

function disconnectHandler(){
    console.log('user disconnected');
}
