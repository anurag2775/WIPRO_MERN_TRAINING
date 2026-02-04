function InventoryCard({ product }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5>{product.name}</h5>
          <p>₹{product.price}</p>
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default InventoryCard;


