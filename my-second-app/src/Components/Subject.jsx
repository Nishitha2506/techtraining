import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../styles/Subject.css";

function Subject() {
  const [subjectName, setSubjectName] = useState("");
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = async () => {
    const res = await axios.get("http://localhost:8080/subjects");
    setSubjects(res.data);
  };

  const addSubject = async () => {
    await axios.post("http://localhost:8080/subject", { subjectName });
    setSubjectName("");
    fetchSubjects();
  };

  const deleteSubject = async (id) => {
    if (window.confirm("Delete this subject?")) {
      await axios.delete(`http://localhost:8080/subject/${id}`);
      fetchSubjects();
    }
  };

  const searchSubject = async (name) => {
    if (!name) {
      fetchSubjects();
      return;
    }
    const res = await axios.get(
      `http://localhost:8080/subject/search?name=${name}`
    );
    setSubjects(res.data);
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <>
      <Navbar />
      <div className="subject-container">
        <h2>Subject Management</h2>

        <div className="subject-form">
          <input
            placeholder="Enter Subject Name"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <button onClick={addSubject}>Add Subject</button>
        </div>

        <input
          className="search-box"
          placeholder="Search subject..."
          onChange={(e) => searchSubject(e.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.subjectName}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteSubject(s.id)}>
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

export default Subject;
