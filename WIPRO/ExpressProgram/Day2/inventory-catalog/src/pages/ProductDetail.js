import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    if (found) setProduct(found);
  }, [id, products]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>
      <Link to="/">⬅ Back</Link>
    </div>
  );
}

export default ProductDetail;


