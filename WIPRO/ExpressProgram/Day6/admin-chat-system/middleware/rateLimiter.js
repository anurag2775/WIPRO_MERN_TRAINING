const rateLimit = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // max 5 messages per minute
  message: { error: "Too many messages. Please slow down." }
});
