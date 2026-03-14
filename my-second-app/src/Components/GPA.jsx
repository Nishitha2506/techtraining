import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../styles/GPA.css";

function GPA() {
   const user = JSON.parse(localStorage.getItem("user"));
  const [gpa, setGpa] = useState("");
  const [gpas, setGpas] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const fetchAll = async () => {
    const res = await axios.get("https://techtraining-5um0.onrender.com/gpas");
    setGpas(res.data);
  };

  const saveGpa = async () => {
    await axios.post("https://techtraining-5um0.onrender.com/gpa", { gpa });
    fetchAll();
  };

  const searchByGpa = async () => {
    const res = await axios.get(
      `https://techtraining-5um0.onrender.com/gpa/search?value=${gpa}`
    );
    setGpas(res.data);
  };

  const filterRange = async () => {
    const res = await axios.get(
      `https://techtraining-5um0.onrender.com/gpa/range?min=${min}&max=${max}`
    );
    setGpas(res.data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <Navbar />
      <div className="gpa-container">
        <h2>Student GPA Management</h2>

        <div className="gpa-actions">
          <input
            type="number"
            placeholder="Enter GPA"
            onChange={(e) => setGpa(e.target.value)}
          />
          <button onClick={saveGpa}>Save GPA</button>
          <button onClick={searchByGpa}>Search GPA</button>
        </div>

        <div className="range-filter">
          <input
            type="number"
            placeholder="Min GPA"
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max GPA"
            onChange={(e) => setMax(e.target.value)}
          />
          <button onClick={filterRange}>Filter</button>
          <button onClick={fetchAll}>Reset</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>GPA</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {gpas.map((g) => (
              <tr key={g.id} className={g.gpa >= 9 ? "topper" : ""}>
                <td>{g.id}</td>
                <td>{user.username || "N/A"}</td>
                <td>{g.gpa}</td>
                <td>
                  {g.gpa >= 9
                    ? "Excellent"
                    : g.gpa >= 7
                    ? "Good"
                    : "Needs Improvement"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GPA;
