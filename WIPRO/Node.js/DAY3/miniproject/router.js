const fs = require("fs").promises;
const path = require("path");
const events = require("./events");

async function router(req, res) {

    // HEALTH
    if (req.method === "GET" && req.url === "/health") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("Server is healthy");
    }

    // LOGIN  ✅ FIXED
    if (req.method === "GET" && req.url === "/login") {
        await new Promise(resolve => setTimeout(resolve, 1000));

        events.emit("userLogin");

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
            JSON.stringify({ message: "User logged in successfully" })
        );
    }

    // USERS
    if (req.method === "GET" && req.url === "/users") {
        try {
            const data = await fs.readFile(
                path.join(__dirname, "users.json"),
                "utf-8"
            );

            events.emit("dataFetched");

            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(data);

        } catch {
            res.writeHead(500, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ error: "Failed to read users" }));
        }
    }

    // 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
}

module.exports = router;

