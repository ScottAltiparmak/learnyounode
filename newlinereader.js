

var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

str.split();
var newLineCounter = 0;

for (var i = 0; i < str.length; i++) {
    if (str[i] == "\n") {
        newLineCounter += 1;
    }
}
console.log(newLineCounter);