

var fs = require('fs');
var number=undefined;
var filename=process.argv[2];


function findnumber(callback) {
  fs.readFile(filename, "utf8",function finishedReading(error, data) {
    if (error){
      console.log(error);
      return;
    }

    var arr=data.split("\n");
    number=arr.length-1;
    callback();
 });
};

function showNumber() {
  console.log(number)
};
findnumber(showNumber);
