const express = require("express");
const router = express.Router();

const { employeeRegistration } = require("../controllers/employeeController");
const employeeValidator = require("../middleware/employeeValidator");

router.post("/register", employeeValidator, employeeRegistration);

module.exports = router;

