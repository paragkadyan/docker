 const http = require("node:http")

 http.createServer((req,res)=>{
    const app = ()=> {
        if(req.url = "/"){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "parag:420" }));
     }
    }
     app();

 }).listen(3000,()=>{
    console.log("server is listening")
 })

 
 

