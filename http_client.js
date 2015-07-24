// Write a program that performs an HTTP GET request to a URL provided as the first command-line argument.
// Write the String contents of each 'data' event from the response to a new line on the console.

var http = require('http');

// Better solution
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on("data", console.log);
  response.on("error", console.error);
});

// My solution
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on("data", function (data) {
    console.log(data);
  });
});