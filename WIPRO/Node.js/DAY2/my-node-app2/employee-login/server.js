const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

  // Serve login page
  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join(__dirname, "login.html");
    const html = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }

  // Handle login submit
  else if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = querystring.parse(body);

      const empName = formData.empName;
      const password = formData.password;

      // Simple login check
      if (password === "admin123") {
        const logData = `
Employee Name: ${empName}
Login Time: ${new Date().toLocaleString()}
Department: IT
Status: Login Successful

`;

        fs.appendFileSync("logs.txt", logData);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h2>Login Successful</h2><p>Welcome ${empName}</p>`);
      } else {
        res.writeHead(401, { "Content-Type": "text/html" });
        res.end("<h2>Login Failed</h2>");
      }
    });
  }

  else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
