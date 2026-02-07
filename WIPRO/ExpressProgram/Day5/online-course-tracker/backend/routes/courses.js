const express = require("express");
const router = express.Router();

let courses = require("../data/courses");

// GET all courses
router.get("/", (req, res) => {
  res.json(courses);
});

// ADD course
router.post("/", (req, res) => {
  const newCourse = {
    id: Date.now(),
    title: req.body.title
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// DELETE course
router.delete("/:id", (req, res) => {
  courses = courses.filter(c => c.id != req.params.id);
  res.json({ message: "Course deleted" });
});

module.exports = router;
