const fs = require("fs");

// Append Method
fs.appendFile("openFile2.txt", " This is my text.", function(err) {
  if (err) throw err;
  console.log("Updated!");
});