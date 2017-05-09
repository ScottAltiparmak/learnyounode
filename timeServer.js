
//this is the offical solution from learnyounode

var net = require('net');

    function zeroFill (i) {
        return (i < 10 ? '0' : '') + i    //new syntax for me (think of '?' as then and ':' as else)
    }

    function now () {
        var d = new Date()
        return d.getFullYear() + '-' +
          zeroFill(d.getMonth() + 1) + '-' +
          zeroFill(d.getDate()) + ' ' +
          zeroFill(d.getHours()) + ':' +
          zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
        socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]));


