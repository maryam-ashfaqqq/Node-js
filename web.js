const fs = require("fs");
const http = require("http");
http.createServer((req , resp)=>{
   if (req.url == "/") {
fs.readFile("web.html" , "utf-8" , (err,data)=>{
if (err) {
   console.log(err);
   
   resp.writeHead(500,{"content-type":"text/plain"})
   resp.write("internal server error") 
   resp.end();
return;
}
 resp.writeHead(200,{"content-type":"text/html"})
 
   resp.write(data);
    resp.end();
 })
}
 else if (req.url == "/submit") {
   let dataBody = [];
   req.on("data" , (chunk)=>{
      dataBody.push(chunk);
   })
req.on("end" , () =>{
   let rawData=Buffer.concat(dataBody).toString();
   console.log(rawData);
   resp.writeHead(200,{"content-type":"text/html"})
      resp.write("<h1>Data Submitted</h1")
      resp.end();
})
 
}
}).listen(3400)
