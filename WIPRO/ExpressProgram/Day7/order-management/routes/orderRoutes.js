const express = require("express");
const router = express.Router();

const { placeOrder } = require("../controllers/orderController");
const validateOrder = require("../middleware/validateOrder");

router.post("/place", validateOrder, placeOrder);

module.exports = router;
