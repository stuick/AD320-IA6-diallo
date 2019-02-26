var fs = require('fs');
var path= require('path');
var filename=process.argv[2];
var extInput="."+process.argv[3];
var extOutput;
var number=[];
var j=0;


function findnumber(callback) {
  fs.readdir(filename, function finishedReading(error, data) {
    if (error){
      console.log(error);
      return;
    }

    for(i=0;i<data.length;i++){
      extOutput=path.extname(data[i]);
      if(extOutput==extInput){
        number[j]=data[i];
        j++;
      }
    }
    callback();
 });
};
function myFunction(currentValue){
  console.log(currentValue);
};

function showNumber() {
  for(i=0;i<number.length;i++){
    console.log(number[i]);
  }
};
findnumber(showNumber);
