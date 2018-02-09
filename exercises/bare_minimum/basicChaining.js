/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var helper2 = require('./promisification');
var helper1 = require('./promiseConstructor');

var writeFile = function(writeFilePath, body) {
  return new Promise((res, rej) => {
    fs.writeFile(writeFilePath, JSON.stringify(body), (err) => {
      rej(err);
      res();
    });
  });
};

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return helper1.pluckFirstLineFromFileAsync(readFilePath)
  .then(userName => {
    return helper2.getGitHubProfileAsync(userName);
  })
  .then(body => {
    return writeFile(writeFilePath, body);
  });

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

// module.exports = {
//   getGitHubProfileAsync: getGitHubProfileAsync,
//   generateRandomTokenAsync: generateRandomTokenAsync,
//   readFileAndMakeItFunnyAsync: readFileAndMakeItFunnyAsync
// };

// module.exports = {
//   getStatusCodeAsync: getStatusCodeAsync,
//   pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
// };