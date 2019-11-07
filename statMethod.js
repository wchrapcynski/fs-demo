const fs = require("fs");

// Stat Method
const pathsToCheck = ["./openFile.txt"];

for (let i = 0; i < pathsToCheck.length; i++) {
  fs.stat(pathsToCheck[i], function(err, stats) {
    console.log(stats);
  });
}