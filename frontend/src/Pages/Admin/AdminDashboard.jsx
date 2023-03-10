import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./admin.css";

const AdminDashboard = () => {
  const [loader, setLoader] = useState(false);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [role, setRole] = useState("");

  const admintoken = JSON.parse(localStorage.getItem("adminToken")) || null;

  useEffect(() => {}, []);

  // console.log(admins,"Admmisn")
  // console.log("users",users)

const handleAuto=async()=>{

  
    await fetch("https://esmagico-backend.onrender.com/admin/data", {
      method: "GET",
      headers: { Authorization: `Bearer ${admintoken}` },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.alladmins);
        setUsers(res.allusers);
        setRole("User");
        // setAdmins(null);
      })
      .catch((err) => console.log(err));

}
useEffect(()=>{handleAuto()},[])



  // handle users-----------------------
  const handleUsers = async () => {
    await fetch("https://esmagico-backend.onrender.com/admin/data", {
      method: "GET",
      headers: { Authorization: `Bearer ${admintoken}` },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.alladmins);
        setUsers(res.allusers);
        setRole("User");
        setAdmins(null);
      })
      .catch((err) => console.log(err));
  };

  // handle admins-----------------------
  const handleAdmins = async () => {
    await fetch("https://esmagico-backend.onrender.com/admin/data", {
      method: "GET",
      headers: { Authorization: `Bearer ${admintoken}` },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.alladmins);
        setUsers(null);
        setAdmins(res.alladmins);
        setRole("Admin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="admin_dashboard">
      <div className="admindashboard">
        <div className="adminsidebar">
          <div>
            <Button onClick={handleAdmins} colorScheme={"navy"}>
              Admins
            </Button>
            <Button onClick={handleUsers} colorScheme={"navy"}>
              Users
            </Button>
          </div>
        </div>
        {loader ? (
          <img
            src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif"
            style={{
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginTop: "200px",
            }}
            alt="loader"
          ></img>
        ) : (
          <div
            className="admindata"
            style={{ padding: "40px", color: "Yellow" }}
          >
            {`These are :${role}`}
            {admins
              ? admins.map((item) => (
                 
                      <div className="userCard">
                        <div className="userRight">
                          <div>
                            <div>
                              <h2><span> Name:</span> {item.name}</h2>
                            </div>
                            <div>
                              <h3><span> Email:</span> {item.email}</h3>
                            </div>

                            <div><span>User ID :</span>{item._id}</div>
                            <div><span>Role :</span> {role}</div>
                          </div>
                          <div className="userImage">
                            <img
                              className="user_img"
                              src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png"
                              alt="userImage"
                            />
                          </div>
                        </div>
                      </div>
                  
                ))
              : ""}

            {users
              ? users.map((user) => (
                  <div className="userCard">
                    <div className="userRight">
                      <div>
                        <div>
                          <h2> <span> Name :</span> {user.name}</h2>
                        </div>
                        <div>
                          <h3><span> Email :</span> {user.email}</h3>
                        </div>

                        <div><span>USer ID : </span>  { user._id}</div>
                        <div><span> Role : </span> {role}</div>
                      </div>
                      <div className="user_img">
                        <img
                          src="https://student.hfe.co.uk/ui/assets/images/publichome/user_avatar_1.png"
                          alt="userImage"
                        />
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
