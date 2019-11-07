const fs = require("fs");

// unlink Method
fs.unlink("openFile.txt", function(err) {
  if (err) throw err;
  console.log("File deleted!");
});