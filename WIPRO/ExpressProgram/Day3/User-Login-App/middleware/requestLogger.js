function requestLogger(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;

  console.log(`[${timestamp}] ${method} ${url}`);

  next(); // move to next middleware
}

export default requestLogger;
