const fs = require("fs");

// Open Method
// takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
fs.open("openFile.txt", "w", function(err, file) {
  if (err) throw err;
  console.log("Saved!");
});