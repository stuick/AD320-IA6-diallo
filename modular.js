
var MyModule = require('./mymodule.js');
var filename=process.argv[2];
var extInput=process.argv[3];

MyModule(filename, extInput, function (err, data) {
  if (err)
    return console.error(err);

  data.forEach(function (file) {
    console.log(file);
  });
});
