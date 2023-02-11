const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const port = 80;

const server = http.createServer((req, res) => {
  let reqUrl = url.parse(req.url, true);
  let pathname = reqUrl.pathname;
  let imagePath = __dirname + "/images/ec2.png";

  console.log("Requested Path: " + pathname);

  if (pathname === "/images/ec2.png") {
    fs.readFile(imagePath, function (err, data) {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data);
    });
  } else {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
