import { useEffect, useState } from "react";
import Card from "./Card";

function CardSection() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="w-full py-12 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Popular Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CardSection;


