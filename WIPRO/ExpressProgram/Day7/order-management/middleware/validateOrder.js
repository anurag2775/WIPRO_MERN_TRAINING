const validateOrder = (req, res, next) => {
  const { custname, items } = req.body;

  if (!custname || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      error: "Customer name and items are required"
    });
  }

  for (let item of items) {
    if (!item.product_id || !item.quantity || item.quantity <= 0) {
      return res.status(400).json({
        error: "Invalid product_id or quantity"
      });
    }
  }

  next();
};

module.exports = validateOrder;
