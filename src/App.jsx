import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './pages/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <Contact /> */}
    </>
  )
}

export default App
