const http = require("http");
let port = 8000;
const fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./data1.json", "utf-8", (error, data) => {
      if (error) {
        res.writeHead(500);
        res.end("<h1>Internal server Error</h1>");
      } else {
        res.end(data);
      }
    });
  }else{
    res.writeHead(404)
    res.end("<h1>Page not found</h1>")
  }
});

server.listen(port, "localhost", () => {
  console.log(`server is runnig on port ${port}`);
});

// const http=require("http")
// const data=require("./Data")
// let port =8000

// let server=http.createServer((req,res)=>{
//     if(req.url==="/"){

//         res.end(JSON.stringify(data))
//     }else{
//         res.writeHead(404)
//         res.end("<h1>Page not found</h1>")
//     }
// })
// server.listen(port,"localhost",()=>console.log(`server is runnig on port ${port}`))

// const http=require("http")
// let port=8000
// const server=http.createServer((req,res)=>{

//     if(req.url==="/"){
//         res.end("<h1>This is Home Page</h1>")
//     }else  if(req.url==="/about"){
//         res.end("<h1>This is about Page</h1>")
//     }else  if(req.url==="/contact"){
//         res.end("<h1>This is contact Page</h1>")
//     }else  if(req.url==="/profile"){
//         res.end("<h1>This is profile Page</h1>")
//     }else

//     {
//         res.writeHead(404)
//         res.end("<h1>Page not found</h1>")}

// })
// server.listen(port,"localhost",()=>console.log(`Server is Running on port ${port}`));
