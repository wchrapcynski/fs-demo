const fs = require("fs");

// rename Method
fs.rename("openFile.txt", "openFile2.txt", function(err) {
  if (err) throw err;
  console.log("File Renamed!");
});