const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "logs", "requests.log");

function logger(req) {
    const log = `${new Date().toISOString()} | ${req.method} ${req.url}\n`;
    fs.appendFile(logPath, log, err => {
        if (err) console.error("Logging error");
    });
}

module.exports = logger;
