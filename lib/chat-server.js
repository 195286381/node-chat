
// 利用 socket.io 创建聊天室.
var socketio = require('socket.io');
// 用户数
var guestNumber = 1;
// 别名
var nickName = [];
// 已经被使用的名字
var nameUsed = [];
// 当前房间号
var currentRoom =  [];

exports.listen = function(server) {
    io = socketio.listen(server); // 监听服务
    io.set('log level', 1);

};