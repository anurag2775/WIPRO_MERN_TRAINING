import React from "react";
import Employee from "./Employee";

function EmployeeList1() {
  const employees = [
    { name: "Anurag", role: "Software Engineer" },
    { name: "Rahul", role: "Frontend Developer" },
    { name: "Priya", role: "Backend Developer" },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Employee List
      </h2>

      {employees.map((emp, index) => (
        <Employee
          key={index}
          name={emp.name}
          role={emp.role}
        />
      ))}
    </div>
  );
}

export default EmployeeList1;
