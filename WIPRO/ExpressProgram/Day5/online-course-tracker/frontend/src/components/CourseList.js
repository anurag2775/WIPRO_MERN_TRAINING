import Button from "./Button";

const CourseList = ({ courses, onDelete }) => {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          {course.title}
          <Button text="Delete" onClick={() => onDelete(course.id)} />
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
