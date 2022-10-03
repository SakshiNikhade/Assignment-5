var http = require("http");

let server = http.createServer((req , res)=>{
    if(req.url==="/welcome"){
        res.writeHead(200 , {"content-text" : "text/plain"})
        res.end("Welcome to Dominos!")
    }
    else if(req.url === "/contact"){
        res.writeHead(200 , {"content-text" : "application/json"})
        res.end(JSON.stringify({   phone: '18602100000',   email: 'guestcaredominos@jublfood.com' }))
    }
    else{
        res.writeHead(404 , {"content-text" : "text/plain"})
        res.end("File not found ")
    }
})

server.listen(8081 , ()=>{console.log("server up at 8081 port")})