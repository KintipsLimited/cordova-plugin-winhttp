var exec = require("cordova/exec");

exports.get = function(url) {
  return new Promise((resolve, error) => {
    exec(resolve, error, "getOdds", "uwp", url);
  });
};
