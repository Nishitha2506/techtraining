import { useState } from 'react';
import '../App.css'
import axios from 'axios';
function Register(){
    const[data,setData]=useState({
        username:"",
        email:"",
        password:""


    })
    function HandleChange(e){
        setData({...data,[e.target.name]:e.target.value})
    }
   async function submitForm(){
       const res=await axios.post("http://localhost:8080/register",data)
       alert("User Registered Successfully")
       console.log(res.status)
    }
    return(

        <div className='Third-div'>
        <h1>Register Here</h1>
      
        <input type="text" name="username" placeholder="Enter UserName"onChange={HandleChange}/>
        <input type="text" name="email" placeholder="Enter email"onChange={HandleChange}/>
        <input type="password" name="password" placeholder="Enter password"onChange={HandleChange}/>
        <button onClick={submitForm}>Submit</button>
         <a href="/login">Already Have AN Account</a>
        </div>

    )
}
export default Register;