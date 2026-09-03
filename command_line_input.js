const http = require("http");

const arg = process.argv;
const port = arg[2];
http.createServer((req , resp)=>{
   resp.write("<h1>command_line_input.js</h1>")
    resp.end() 
}).listen(port);
console.log('kkk');
