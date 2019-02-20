const http = require('http');

const server = http.createServer((req, res) => {
  res.end('this is the first response.');
});

server.listen(process.env.PORT || 3000);// should be 3000 or whatever the default is from the hosting provider
