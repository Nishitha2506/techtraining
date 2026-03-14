import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../styles/Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [courseCount, setCourseCount] = useState(0);
  const [subjectCount, setSubjectCount] = useState(0);
  const [avgGpa, setAvgGpa] = useState(0);
  const [attendancePercent, setAttendancePercent] = useState(0);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const courses = await axios.get("https://techtraining-5um0.onrender.com/courses");
      const subjects = await axios.get("https://techtraining-5um0.onrender.com/subjects");
      const gpas = await axios.get("https://techtraining-5um0.onrender.com/gpas");
      const attendance = await axios.get("https://techtraining-5um0.onrender.com/attendance");

      setCourseCount(courses.data.length);
      setSubjectCount(subjects.data.length);

    
      if (gpas.data.length > 0) {
        const total = gpas.data.reduce((sum, g) => sum + g.gpa, 0);
        setAvgGpa((total / gpas.data.length).toFixed(2));
      }

      
      if (attendance.data.length > 0) {
        const totalPresent = attendance.data.reduce(
          (sum, a) => sum + a.presentDays,
          0
        );
        const totalAbsent = attendance.data.reduce(
          (sum, a) => sum + a.absentDays,
          0
        );
        const percent = (totalPresent / (totalPresent + totalAbsent)) * 100;
        setAttendancePercent(percent.toFixed(2));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1>Welcome, {user.username} 👋</h1>
        <p className="subtitle">Student Management Dashboard</p>

        <div className="card-grid">
          <div className="card">
            <h3>Total Courses</h3>
            <p>{courseCount}</p>
          </div>

          <div className="card">
            <h3>Total Subjects</h3>
            <p>{subjectCount}</p>
          </div>

          <div className="card">
            <h3>Average GPA</h3>
            <p>{avgGpa || "N/A"}</p>
          </div>

          <div className="card">
            <h3>Attendance %</h3>
            <p>{attendancePercent || "N/A"}%</p>
          </div>
        </div>

        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <a href="/course">Manage Courses</a>
            <a href="/subject">Manage Subjects</a>
            <a href="/gpa">View GPA</a>
            <a href="/attendance">Attendance</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
