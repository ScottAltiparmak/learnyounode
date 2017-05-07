
var fs = require('fs');
var http = require('http');
bl = require('bl');

var url = process.argv[2];

var request = http.get(url, function (response){
    response.pipe(bl(function (err,data){
        if(err){
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
        
    }))
    })
