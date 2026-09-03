const  http = require("http");
http.createServer((req , resp)=>{
    console.log(req.method);
    
resp.setHeader("Content_Type" , "application/json")
resp.write("<h1>hello</h1>");
if (req.url == "/home") 
    {
    resp.write("Home")
}else if(req.url == "/login"){
    resp.write("Login")
}else
resp.write("Other")
resp.end();
}).listen(4100);