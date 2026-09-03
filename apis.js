const http = require("http");
const userData=[
    {
        name:"Maryam",
        age:25,
        email:"maryam.com"
    },
     {
        name:"Talal",
        age:23,
        email:"talal.com"
    },
     {
        name:"Talha",
        age:26,
        email:"talha.com"
    }
]
http.createServer((req , resp)=>{
    resp.setHeader("Content_Type" , "application/json")
resp.write(JSON.stringify(userData));
resp.end();
}).listen(4000);