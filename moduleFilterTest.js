var fs = require('fs');
var listedDirectory;
var path = require('path');
var filteredLSMOD = require('./filteredLSMOD');

var dirpath = process.argv[2];
var ext = process.argv[3];

filteredLSMOD(dirpath, ext, function (err, list) {
    for (i = 0; i < list.length; i++) {
        console.log(list[i]);

    }
});



