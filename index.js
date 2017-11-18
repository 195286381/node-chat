var express = require('express');
var http = require('http');
var fs = require('fs');
var cfg = require('./config');
var socketServer = require('./socketServer');

var port = cfg.PORT;

var app = express();
var server = http.Server(app);

socketServer(server);

app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
})

server.listen(port, function() {
    console.log('server start at: ' + port);
})

