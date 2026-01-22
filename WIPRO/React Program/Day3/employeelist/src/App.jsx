import { useState } from "react";
import React from "react";
import tailwindcss from "tailwindcss";
import EmployeeList1  from "./components/EmployeeList1";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <EmployeeList1 />
    </div>
  );
}

export default App;
