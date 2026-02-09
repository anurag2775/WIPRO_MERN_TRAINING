module.exports = (req, res, next) => {
  // Simple demo auth
  const isAdmin = req.headers["x-admin"] === "true";

  if (!isAdmin) {
    return res.status(403).json({ error: "Admins only" });
  }

  next();
};
