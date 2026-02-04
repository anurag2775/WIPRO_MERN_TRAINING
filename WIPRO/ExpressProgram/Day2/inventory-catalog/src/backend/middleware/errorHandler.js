const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);

  res.status(500).render("admin/error", {
    message: err.message
  });
};

module.exports = errorHandler;
