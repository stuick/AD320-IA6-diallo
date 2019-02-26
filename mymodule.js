var fs = require('fs');
var path = require('path');

module.exports = function (dirname, extInput, callback) {

  fs.readdir(dirname, function (err, data) {
    if (err)
      return callback(err);

    data = data.filter(function (filename) {
      return path.extname(filename) === '.' + extInput;
    });

    callback(null, data);
  });
};
