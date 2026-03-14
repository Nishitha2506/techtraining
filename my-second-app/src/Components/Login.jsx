import '../App.css'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login(){

    const[loginUser,setloginUser]= useState({
        email:"",
        password:""
    })
  const navigate=useNavigate();
    function HandleChange(e){
            setloginUser({...loginUser,[e.target.name]:e.target.value})
    }
   async function submitDetails(){
    try{
     const res= await axios.post("https://techtraining-5um0.onrender.com0/login",loginUser)
     console.log(res.data)
     alert("User Login SuccessFull")
     localStorage.setItem("user",JSON.stringify(res.data))
     navigate('/dashboard');
    

    }catch(err){
        alert("Invalid Details")
    }

    }
    return(
     <div className="Third-div">
       <h1>Login here</h1>
     
       <input type="text" name="email" placeholder="Enter UserName" onChange={HandleChange} />
       <input type="password" name="password" placeholder="Enter Password" onChange={HandleChange} />
       <button onClick={submitDetails}>Submit</button>
       <a href="/">Don't you Have AN Account</a>
     </div>
    )
}
export default Login;