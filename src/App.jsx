import React from 'react'
import './App.css'
import { Route, Routes,Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Dashboard from './pages/Dashbord'


function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>

    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/register' element={<SignUp/>}></Route>
  </Routes>
    </>
  )
}
// root component
const Root = ()=>{
  // check token exist
  const isAuthenticated = !!localStorage.getItem("token")
  // redirect dashboard
  return isAuthenticated ? (
    <Navigate to={'/dashboard'}/>
  ) :(
    <Navigate to={'/login'}/>
  )
}

export default App
