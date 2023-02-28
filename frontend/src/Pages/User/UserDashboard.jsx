import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./user.css";
const UserDashboard = () => {
    const [user,setUser]= useState([]);
  const [active, setActive] = useState(true);
  const token = JSON.parse(localStorage.getItem("userToken")) || null;
  //   ----------update ---user-----------

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
      console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
      //  let signupData={name,email,password}
      //  axios.post("http://localhost:8080/user/signup",signupData)
      //  .then((res)=>{console.log(res)})
      //  .catch(err=>console.log(err))
    } else {
      alert("please enter correct credintials");
    }
  };

  // --------------------------------------

  // -----------------getting user data--------
  const userData = async (token) => {
    // console.log(token, "haha token");
    await fetch('http://localhost:8080/user/dashboard', {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`}
      })
      .then((res) => res.json())
      .then(res=>{

      console.log(res)
      setUser(res.user[0])})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    userData(token);
  }, [token]);

  return (
    <div className="user_dashboard">
      UserDashboard
      <div className="user_card">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              <Button
                onClick={() => setActive(!active)}
                colorScheme={"yellow"}
                size="sm"
              >
                Update
              </Button>
            </td>
          </tr>
        </table>

        <div className={active ? "hidden_div" : "unhidden_div"}>
          <div className="update_container">
            <form className="update_form" onSubmit={handleSubmit}>
              <label>Update user </label>
              <br />
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />

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

              <Button
                size="sm"
                colorScheme={"yellow"}
                className="update_button"
                type="submit"
              >
                Update info.
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
