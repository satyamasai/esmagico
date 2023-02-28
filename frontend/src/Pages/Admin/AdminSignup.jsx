import React, { useState } from "react";
import axios from "axios"
import "../User/user.css";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader,setLoader] = useState(false)
  const navigate= useNavigate()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && password) {
        setLoader(true)
      // console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
   let signupData={name,email,password}
   axios.post("http://localhost:8080/admin/signup",signupData)
   .then((res)=>{console.log(res)
    setLoader(false)
    alert("Sign up successfull")
    navigate("/admin/login")
}

)
   .catch(err=>{console.log(err)
setLoader(false)})
   
   
    } else {
      alert("please enter correct credintials");
    }
  };

  return (
    <div className="signup-container">
      <form className="login_form" onSubmit={handleSubmit}>
        <label>Admin SIGN-UP </label>
        <br />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

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
{
    loader?<img className='loader' src="https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif" alt="loader"/> :
    <button className="login_button" type="submit">Sign Up</button>
}
      </form>
    </div>
  );
};

export default AdminSignup;
