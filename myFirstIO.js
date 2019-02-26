var fs=require('fs');
var filename=process.argv[2];

var data=fs.readFileSync(filename).toString();

var arr=data.split("\n");
var number=arr.length-1;
console.log(number);
