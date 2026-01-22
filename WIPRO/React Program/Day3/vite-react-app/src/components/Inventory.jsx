import { useState } from "react";

function Inventory() {
  const [stock, setStock] = useState(0);

  const addStock = () => {
    setStock(stock + 1);
  };

  const removeStock = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Inventory Management
        </h2>

        <p className="text-lg mb-6">
          Current Stock:{" "}
          <span className="font-bold">{stock}</span>
        </p>

        <div className="flex justify-between gap-4">
          <button
            onClick={addStock}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add Stock
          </button>

          <button
            onClick={removeStock}
            disabled={stock === 0}
            className={`flex-1 py-2 rounded-lg transition
              ${
                stock === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-red-700"
              }
            `}
          >
            Remove Stock
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
