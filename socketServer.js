// 调用 socketio 来实现后端双向传输.
var socketio = require('socket.io');

var socketioServer = function(server) {
    var io = socketio(server);

    io.on('connection', function(socket) {
        socket.broadcast.emit('new message', '新用户登录');
        console.log('a user conencted');
        console.log(socket.id);
        socket.join('room1');
        // socket.broadcast.emit('new message', {message: 'hello socket'});
        socket.on('new message', function(data) {
            console.log('message: ' + data);
            io.to('room1').emit('new message', data);
        })
    });

    
}

module.exports = socketioServer;