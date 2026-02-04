const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());   

const PORT = 5000;

let products = [           
  { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
  { id: 2, name: "Chair", price: 3000, category: "Furniture" },
  { id: 3, name: "Mobile", price: 20000, category: "Electronics" }
];

// GET /products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET /products/:id
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// POST /products
app.post("/products", (req, res) => {
  const newProduct = {
    id: Date.now(),
    ...req.body
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Products API → http://localhost:${PORT}/products`);
});


