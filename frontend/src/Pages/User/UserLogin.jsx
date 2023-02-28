import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const UserLogin = () => {
   const navigate= useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (email && password) {
        // console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
     let loginData={email,password}
     axios.post("http://localhost:8080/user/login",loginData)
     .then((res)=>{console.log(res)
        localStorage.setItem("userToken",JSON.stringify(res.data.document.token))

          navigate("/user/dashboard")
    })
     .catch(err=>console.log(err))
     
     
      } else {
        alert("please enter correct credintials");
      }
    };


  return (
    <div className="signup-container">
    <form className='login_form' onSubmit={handleSubmit}>
      <label>USER LOG-IN </label>
      <br />
    

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <button className='login_button' type="submit">Log in</button>
    </form>
  </div>
  )
}

export default UserLogin