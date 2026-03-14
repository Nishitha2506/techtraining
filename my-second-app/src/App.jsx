import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Course from "./Components/Course";
import Subject from "./Components/Subject";
import GPA from "./Components/GPA";
import Attendance from "./Components/Attendance";
import UseExample from "./Components/UseExample";
import Weather from "./Components/Weather";




function App() {
      console.log("Loop ✅")
  return (

    <BrowserRouter>
      <Routes>
 
        <Route path="/weather" element={<Weather />} />   

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}/>

        <Route path="/course" element={<Course />  }/>

        <Route path="/subject" element={<Subject />}/>
        <Route path="/gpa" element={ <GPA /> }/>
        <Route path="/exm" element={ <UseExample /> }/>
        <Route path="/attendance" element={<Attendance />}/>
        
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
