import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {

    const adminKey= localStorage.getItem("adminToken")
    // console.log(userKey)
if(adminKey){
    return children
}


  return (
     <Navigate to="/admin/login" />
  )
}

export default AdminPrivateRoute