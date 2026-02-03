const http = require("http");
const fs = require("fs");
const path = require("path");
const router = require("./router");
const logger = require("./logger");

const server = http.createServer((req, res) => {
    logger(req);

    
    if (req.url === "/" && req.method === "GET") {
        const filePath = path.join(__dirname, "public", "index.html");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error loading index.html");
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
    else {
        router(req, res);
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("Open  http://localhost:3000");
});

