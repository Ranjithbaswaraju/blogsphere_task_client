import React from "react"
import Signup from "../components/signup"
import Login from "../components/login"
import { Route, Routes } from "react-router-dom"
import AdminDashBoard from "../components/AdminDashBoard"
import AuthorDashBoard from "../components/AuthorDashBoard"


 export const baseURL="https://blogsphere-task-server-2.onrender.com"


function App() {
  

  return (
    <>
      <Routes>
         <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="admin" element={<AdminDashBoard/>}/>
        <Route path="author" element={<AuthorDashBoard/>}/>
    
      </Routes>
    </>
  )
}

export default App
