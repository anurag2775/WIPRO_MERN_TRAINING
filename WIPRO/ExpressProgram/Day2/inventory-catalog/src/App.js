import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import AddProductForm from "./pages/AddProductForm";
import InventoryList from "./components/InventoryList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/inventory" element={<InventoryList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;







