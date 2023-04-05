import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacts from './contacts/Contacts'
import MainNavbar from './layouts/MainNavbar'
import AddContact from './pages/AddContact'
import ContactDetails from './pages/ContactDetails'
import EditContact from './pages/EditContact'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Registration from './pages/Registration'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="add-contact" element={<AddContact />} />
          <Route path="edit-contact/:id" element={<EditContact />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="contacts/:id" element={<ContactDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
