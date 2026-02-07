import { useEffect, useState } from "react";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";

function App() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/courses");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const deleteCourse = async (id) => {
    await fetch(`http://localhost:5000/api/courses/${id}`, {
      method: "DELETE"
    });
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div>
      <h1>Online Course Tracker</h1>
      {error && <p style={{color:"red"}}>{error}</p>}
      <CourseForm onAdd={addCourse} />
      <CourseList courses={courses} onDelete={deleteCourse} />
    </div>
  );
}

export default App;

