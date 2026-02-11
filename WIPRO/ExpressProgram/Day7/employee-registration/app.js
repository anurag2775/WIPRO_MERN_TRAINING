const express = require("express");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Employee Registration Server running on port ${process.env.PORT}`);
});

