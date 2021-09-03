import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-white fixed w-full shadow-2xl">
      <h1 className="text-3xl px-3"><Link to="/">aSStRACKER</Link></h1>
      <ul className="flex flex-row">
        <li className="px-2 py-3 border-gray-500 hover:bg-green-400 hover:text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 py-3  border-gray-500 hover:bg-green-400 hover:text-white">
          <Link to="/login">Login</Link>
        </li>
        <li className="px-2 py-3  border-gray-500 hover:bg-green-400 hover:text-white">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
