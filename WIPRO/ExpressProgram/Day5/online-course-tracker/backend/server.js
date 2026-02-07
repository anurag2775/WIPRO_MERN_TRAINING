const express = require("express");
const cors = require("cors");

const courseRoutes = require("./routes/courses");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
