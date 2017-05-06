var fs = require('fs');
var http = require('http');
var dataSet = [];


var url = process.argv[2];

try{
    var request = http.get(url, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (chunk) {
            dataSet += chunk + '\n';
        });
        
        response.on('end',function(){
         console.log(dataSet);
        });
   }).on("error", function(error) {le
        console.log(error.message);
    });
} catch(e) {
    console.log(e);
}
       

           

        
    


