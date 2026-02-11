const pool = require("../db/connection");
const validator = require("validator");

const employeeValidator = async (req, res, next) => {
  try {
    const { name, email, department } = req.body;


    if (!name || !email || !department) {
      return res.status(400).json({
        error: "All fields are required"
      });
    }

    
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        error: "Invalid email format"
      });
    }

    
    const [rows] = await pool.query(
      "SELECT id FROM employees WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      return res.status(400).json({
        error: "Email already exists"
      });
    }

    next(); 

  } catch (error) {
    res.status(500).json({
      error: "Validation failed"
    });
  }
};

module.exports = employeeValidator;
