const http = require("http");
const fs= require("fs");
const path=require("path");
const server=http.createServer((req ,res)=> {
    const method=req.method;
    const url=req.url;
    const date=new Date().toISOString();
    const log= `new log - ${date} | method =${method} | url=${url}\n`
    fs.appendFile("./log.txt",log, (err) => {
        if (err) {
            res.writeHead(500, {"Content-Type":"text/plain"});
            res.end("Error saving log");
            return;
        }

        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Log saved successfully");
    });

});

server.listen(3000, () => console.log("Server running"));
