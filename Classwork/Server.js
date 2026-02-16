const users= {
    name: "Shweta",
    Age:20
}
const http =require("http");
const fs=require("fs");
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (method === "GET" && url === "users/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
  else if(method=="POST" && url=="/data"){
    let body="";
    req.on("data",(chunk)=>{
        body+=chunk;
    })
    req.on("end",()=>{
        fs.appendFile("./file.txt" ,body,()=> {
            res.writeHead(201,"data are save succesfully");
            res.end();
        })
    })
}
})

server.listen(3000,() => {
console.log("Server is running on 3000");
});