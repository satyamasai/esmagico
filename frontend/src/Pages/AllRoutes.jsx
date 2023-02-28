import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserSignup from './User/UserSignup'

const AllRoutes = () => {
  return (
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/user/signup" element={<UserSignup/>}/>
   </Routes>
  )
}

export default AllRoutes