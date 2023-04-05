import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-700 text-white ">
        <div className="h-12 mx-auto max-w-7xl px-2">
          <nav className="flex items-center justify-between">
            <div className="">
              <img className="block h-8 w-auto" src={Logo} alt="Logo" />
            </div>
            <div className="">
              <div className="flex space-x-4">
                <Link to="home">Home</Link>
                <Link to="edit-contact">Edit</Link>
                <Link to="add-contact">Add</Link>
                <Link to="contact">Contact</Link>
                <Link to='login'>Login</Link>
                <Link to='registration'>Registration</Link>
              </div>
            </div>
            <div>
              <img className="h-5 w-auto" src={Logo} alt="" />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
