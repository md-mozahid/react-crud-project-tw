import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pricing from './components/Pricing'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Counter from './components/Counter'

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Pricing /> */}
      {/* <Home />
      <Contact /> */}
      <Counter />
    </>
  )
}

export default App
