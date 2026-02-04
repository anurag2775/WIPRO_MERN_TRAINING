import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import InventoryCard from "./InventoryCard";

function InventoryList() {
  const { products } = useContext(ProductContext);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((p) => (
          <InventoryCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default InventoryList;


