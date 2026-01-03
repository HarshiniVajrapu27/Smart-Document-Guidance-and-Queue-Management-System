import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RoleSelect from './pages/RoleSelect'
import Home from './pages/Home'
import Services from './pages/Services'
import Details from './pages/Details'
import Appointments from './pages/Appointments'
import QueueStatus from './pages/QueueStatus'
import Officer from './pages/Officer'

function App(){
  const selectedRole = localStorage.getItem('selectedRole');
  return (
    <div className="min-h-screen pb-20">
      <Header />
      <main className="pt-4">
        <Routes>
          <Route path="/" element={selectedRole ? <Home/> : <Navigate to="/role-select" />} />
          <Route path="/role-select" element={<RoleSelect/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/details/:key" element={<Details/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/queue" element={<QueueStatus/>} />
          <Route path="/officer" element={<Officer/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
