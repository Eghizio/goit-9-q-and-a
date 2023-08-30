// import http from "node:http";
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if(req.method === "GET" && req.url === "/something/abc") {
    // app.get("/something/abc", () => {});
  }

  const filePath = "./kakarotto.png";
  const contentType = 'image/png';

  fs.readFile(filePath, function(error, content) {
    if (error && error.code == 'ENOENT') return console.log(error);
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content, 'utf-8');
  });

});

server.listen(3001, () => {
  console.log("Server running on 3001");
});
