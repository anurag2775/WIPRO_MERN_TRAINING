
const express = require("express");
const path = require("path");
const multer = require("multer");

const adminAuth = require("./middleware/auth");
const rateLimiter = require("./middleware/rateLimiter");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


let messages = [];

// File upload settings
const storage = multer.diskStorage({
  destination: "uploads/", // save files here
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // unique name
  }
});

// Allow only images and pdf
const fileFilter = (req, file, cb) => {
  const allowed = ["image/png", "image/jpeg", "application/pdf"];
  allowed.includes(file.mimetype)
    ? cb(null, true)
    : cb(new Error("Invalid file type"));
};

const upload = multer({ storage, fileFilter });

// Admin sends message (with rate limit + auth)
app.post(
  "/admin/send",
  adminAuth,
  rateLimiter,
  upload.single("file"),
  (req, res) => {
    const message = {
      text: req.body.message,
      file: req.file ? `/uploads/${req.file.filename}` : null,
      time: new Date()
    };

    messages.push(message); // broadcast to all users
    res.json({ success: true, message });
  }
);

// Users can only read messages
app.get("/user/messages", (req, res) => {
  res.json(messages);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
