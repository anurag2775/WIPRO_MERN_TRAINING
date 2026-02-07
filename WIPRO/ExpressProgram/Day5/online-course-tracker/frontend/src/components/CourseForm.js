import { useState } from "react";
import Button from "./Button";

const CourseForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
      });

      if (!res.ok) throw new Error("Add failed");

      const data = await res.json();
      onAdd(data);
      setTitle("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter course"
      />
      <Button text="Add Course" />
    </form>
  );
};

export default CourseForm;
