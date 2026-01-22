import React from "react";
function Employee({ name, role }) {
  const handlePromote = () => {
    alert(`${name} has been promoted! 🎉`);
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm flex justify-between items-center">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>

      <button
        onClick={handlePromote}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Promote
      </button>
    </div>
  );
}

export default Employee;
