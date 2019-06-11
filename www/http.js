var exec = require("cordova/exec");

exports.request = function (method, url) {
  return new Promise(function (resolve, error) {
    console.log(method, url)
    exec(resolve, error, "request", "uwp", [method, url]);
  });
};