import { useState } from "react";
function Courses() {
  const courses = ["React", "Java", "Python", "Cyber Security", "AWS"];

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {courses.map((course, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <h3 className="font-semibold text-lg">{course}</h3>
          <p className="text-gray-500 mt-2">
            Learn {course} from scratch.
          </p>
          <button className="mt-4 text-orange-500">View</button>
        </div>
      ))}
    </div>
  );
}

export default Courses;



