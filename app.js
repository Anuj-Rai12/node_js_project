const http=require('http');
const rounts=require('./rounte');

console.log(rounts.someText);
const server=http.createServer(rounts.requestHandler);

server.listen(4000);
