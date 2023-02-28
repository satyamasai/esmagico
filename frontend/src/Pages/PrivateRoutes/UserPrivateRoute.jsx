import React from 'react'
import { Navigate } from 'react-router-dom'

const UserPrivateRoute = ({children}) => {

    const userKey= localStorage.getItem("userToken")
    console.log(userKey)
if(userKey){
    return children
}


  return (
     <Navigate to="/user/login" />
  )
}

export default UserPrivateRoute