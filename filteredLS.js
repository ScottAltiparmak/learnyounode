

var fs = require('fs');
var listedDirectory;
var path = require('path');

var dirpath = process.argv[2];
var ext = '.' + process.argv[3];

    fs.readdir(dirpath, function (err, list) {

        list.forEach(function (fileName) {
            if (path.extname(fileName) === ext) {
                console.log(fileName);
            }

        });
    });



