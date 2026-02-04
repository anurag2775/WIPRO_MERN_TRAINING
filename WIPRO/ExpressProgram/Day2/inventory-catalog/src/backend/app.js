const express = require("express");
const path = require("path");
const cors = require("cors");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const products = require("./data/products");

const app = express();

/*  VIEW ENGINE  */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* MIDDLEWARE */
app.use(logger);

/*  ROUTES  */
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});


// Admin dashboard (Server Rendered)
app.get("/admin", (req, res, next) => {
  try {
    res.render("admin/dashboard", { products });
  } catch (err) {
    next(err);
  }
});

/*  ERROR HANDLER  */
// Must be LAST
app.use(errorHandler);

/* SERVER  */
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}/admin`);
});
