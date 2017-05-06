

var fs = require('fs');
var string;
var lines = undefined;

function readNewLines(callback) {
    var str = fs.readFile(process.argv[2], 'utf8', function (err, fileContents) {
        lines = fileContents.split('\n').length - 1;
        callback();
    })
}
        

    function logNewLines() {
        console.log(lines);
    }


    readNewLines(logNewLines);
