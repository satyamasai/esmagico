import { Button, Img } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./user.css";
const UserDashboard = () => {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState([]);
  const [active, setActive] = useState(true);
  const token = JSON.parse(localStorage.getItem("userToken")) || null;
  //   ----------update ---user-----------

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


 

  // --------------------------------------

  // -----------------getting user data--------
  const userData = async (token) => {
    // console.log(token, "haha token");
    await fetch("http://localhost:8080/user/dashboard", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUser(res.user[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    userData(token);
   
  },[token]);



  // ------------------------------------------------------------
  // ------------------------------------------------------------

  // ---------------Update info---------------------

  const handleUpdate = async () => {
    // console.log("INNNN update");
    setLoader(true);
    const updatedData = {
      name,
      email,
      password,
    };
    const id = user._id;
    // console.log(id);
    // console.log(updatedData)
    try {
      const response = await axios.put(`http://localhost:8080/user/update/${id}`, {
        updatedData,
      });
      // return response.data;
      setLoader(false);
      setActive(true)
      alert("user information updated..!!")
      window.location.reload()
      console.log(response);
    } catch (error) {
        // setActive(false)
      setLoader(false);
      console.log(error);
    }
  };

  return (
    <div className="user_dashboard">
      <div style={{ color: "white" }}>
        Welcome to UserDashboard Mr. {user.name?.toUpperCase()}
      </div>
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
{/* -----------update data--------------------------------------------------------*/ }
{/* ------------------------------------------------------------------------------*/ }
        <div className={active ? "hidden_div" : "unhidden_div"}>
          <div className="update_container">
            <form className="update_form" >
              <label>Update user </label>
              <br />
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder={user.name}
                onChange={handleNameChange}
                />
                
                <label htmlFor="email">Email:</label>
              <input
              type="email"
              id="email"
              placeholder={user.email}
              value={email}
              onChange={handleEmailChange}
              />
              
              <label htmlFor="password">Password:</label>
              <input
              placeholder={user.password}
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {loader ? (
                <img
                className="loader"
                  src="https://i.gifer.com/origin/f5/f5b59d966ecb539b3154e87d8f42ae0e.gif"
                  alt="loader"
                />
              ) : (
                <Button
                  size="sm"
                  colorScheme={"yellow"}
                  className="update_button"
                  type="submit"
                  onClick={handleUpdate}
                >
                  Update info.
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
