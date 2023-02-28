import React, { useState } from "react";
import "./user.css";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      // console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
   
   
   
   
    } else {
      alert("please enter correct credintials");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <label>USER SIGN-UP </label>
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default UserSignup;
