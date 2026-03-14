import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../styles/Course.css";

function Course() {
  const [courseName, setCourseName] = useState("");
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await axios.get("https://techtraining-5um0.onrender.com/courses");
    setCourses(res.data);
  };

  const addCourse = async () => {
    if (!courseName.trim()) return;
    await axios.post("https://techtraining-5um0.onrender.com/course", { courseName });
    setCourseName("");
    fetchCourses();
  };

  const deleteCourse = async (id) => {
    if (window.confirm("Delete this course?")) {
      await axios.delete(`https://techtraining-5um0.onrender.com/course/${id}`);
      fetchCourses();
    }
  };

  const searchCourse = async (name) => {
    if (!name) {
      fetchCourses();
      return;
    }
    const res = await axios.get(
      `https://techtraining-5um0.onrender.com/course/search?name=${name}`
    );
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />
      <div className="course-container">
        <h2>Course Management</h2>

        <div className="course-form">
          <input
            placeholder="Enter Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <button onClick={addCourse}>Add Course</button>
        </div>

        <input
          className="search-box"
          placeholder="Search course..."
          onChange={(e) => searchCourse(e.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.courseName}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteCourse(c.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Course;
