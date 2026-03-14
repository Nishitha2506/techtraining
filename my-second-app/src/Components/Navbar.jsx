import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/course">Course</Link>
      <Link to="/subject">Subject</Link>
      <Link to="/gpa">GPA</Link>
      <Link to="/attendance">Attendance</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
