const fs = require('fs');
var content;
// readFile Method
// utf8 converts the buffer into 'normal text. 
fs.readFile('demofile.html','utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    console.log(content);   
});
