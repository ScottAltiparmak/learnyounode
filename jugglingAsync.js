
var fs = require('fs');
var http = require('http');
bl = require('bl');


var url = process.argv.slice(2);
results = [];
resultsCount = 0;
        
    url.forEach(function (urls, i){
        http.get(urls, function (response) {
            response.setEncoding('utf8');
               
            response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            results[i] = data.toString();
            resultsCount++;
                
            if(resultsCount === url.length){
                results.forEach(function (result){
                    console.log(result);
               
                })
            };

        }))

    })
    
})
