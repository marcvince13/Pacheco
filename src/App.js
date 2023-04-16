import React from 'react'
import Login from './pages/Login'
import Home from "./pages/Home"
import Profile from './pages/Profile'
import RegistrationScreen from './pages/RegistrationScreen'
import Navigationbar from './Navigationbar'
import { Route, Routes } from "react-router-dom"
export const RegistrationContext = createContext();

function App() {
  return (
    <>
      <Navigationbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RegistrationScreen" element={<RegistrationScreen />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div> 
    </>
  )
}

export default App