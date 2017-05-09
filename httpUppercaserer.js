
var fs = require('fs');
var http = require('http');
var map = require('through2-map');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(request,response){
  
    if (request.method === 'POST') {
        request.pipe(map(function (data) {
            return data.toString().toUpperCase();
        })).pipe(response)
           
    }
})
    server.listen(port);


