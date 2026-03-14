import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../styles/Attendance.css";

function Attendance() {
  const [present, setPresent] = useState("");
  const [absent, setAbsent] = useState("");
  const [attendanceList, setAttendanceList] = useState("");
  const [filterDays, setFilterDays] = useState("");

  const fetchAttendance = async () => {
    const res = await axios.get("https://techtraining-5um0.onrender.com/attendance");
    setAttendanceList(res.data);
  };

  const saveAttendance = async () => {
    await axios.post("https://techtraining-5um0.onrender.com/attendance", {
      presentDays: present,
      absentDays: absent
    });
    setPresent("");
    setAbsent("");
    fetchAttendance();
  };

  const filterAttendance = async () => {
    const res = await axios.get(
      `https://techtraining-5um0.onrender.com/attendance/filter?days=${filterDays}`
    );
    setAttendanceList(res.data);
  };

  const calculatePercentage = (p, a) => {
    const total = p + a;
    return total === 0 ? 0 : ((p / total) * 100).toFixed(2);
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <>
      <Navbar />
      <div className="attendance-container">
        <h2>Attendance Management</h2>

        <div className="attendance-form">
          <input
            placeholder="Present Days"
            value={present}
            onChange={(e) => setPresent(Number(e.target.value))}
          />
          <input
            placeholder="Absent Days"
            value={absent}
            onChange={(e) => setAbsent(Number(e.target.value))}
          />
          <button onClick={saveAttendance}>Save</button>
        </div>

        <div className="filter-box">
          <input
            placeholder="Min Present Days"
            onChange={(e) => setFilterDays(e.target.value)}
          />
          <button onClick={filterAttendance}>Filter</button>
          <button onClick={fetchAttendance}>Reset</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Percentage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceList &&
              attendanceList.map((a) => {
                const percent = calculatePercentage(
                  a.presentDays,
                  a.absentDays
                );
                return (
                  <tr
                    key={a.id}
                    className={percent < 75 ? "low-attendance" : ""}
                  >
                    <td>{a.id}</td>
                    <td>{a.presentDays}</td>
                    <td>{a.absentDays}</td>
                    <td>{percent}%</td>
                    <td>
                      {percent >= 75 ? "Eligible" : "Not Eligible"}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Attendance;
