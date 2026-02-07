const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const auth = require("./middleware/auth");
const authorize = require("./middleware/authorize");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/Challenge6")
  .then(() => console.log("MongoDB connected for UserStory6"));


app.get("/create-users", async (req, res) => {
  await User.deleteMany({});

  await User.create({
    username: "admin",
    password: await bcrypt.hash("123", 10),
    role: "admin"
  });

  await User.create({
    username: "user",
    password: await bcrypt.hash("123", 10),
    role: "user"
  });

  res.send("Admin & User created");
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(401).send("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "jwt_secret_key",
    { expiresIn: "1h" }
  );

  res.json({ token });
});


app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Profile accessed",
    user: req.user
  });
});


app.get("/admin", auth, authorize("admin"), (req, res) => {
  res.send("Welcome Admin");
});


app.get("/user", auth, authorize("user"), (req, res) => {
  res.send("Welcome User");
});

app.listen(5000, () => {
  console.log("UserStory6 Auth Server running on http://localhost:5000");
});
