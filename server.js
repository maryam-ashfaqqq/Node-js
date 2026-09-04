// const colors = require('colors/safe');

const http = require("http");

http.createServer((req , resp)=>{
    resp.setHeader("Content-Type" , "text/html");
    resp.write("<h1>Hello</h1>" )
      resp.write("<h1>Words</h1> ")

resp.end("Maryam");
}).listen(4800);

console.log('server');

http.createServer((req , resp)=>{

    resp.write("<h1>Server</h1> ")
    
resp.end("Maryam");
}).listen(9000);
