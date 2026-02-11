const pool = require("../db/connection");

exports.employeeRegistration = async (req, res) => {
  try {
    const { name, email, department } = req.body;

    await pool.query(
      "INSERT INTO employees (name, email, department) VALUES (?, ?, ?)",
      [name, email, department]
    );

    res.status(201).json({
      message: "Employee Registration Successful"
    });

  } catch (error) {
    res.status(500).json({
      error: "Server error"
    });
  }
};

