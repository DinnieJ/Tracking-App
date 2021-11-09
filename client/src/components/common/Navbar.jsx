import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { LOGOUT } from "@/store/auth/authAction"

const Navbar = () => {
  const authRoutes = [{ title: "Home", url: "/" }]

  const normalRoutes = [
    { title: "Login", url: "/login" },
    { title: "Register", url: "/register" },
  ]

  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  return (
    <nav className="flex flex-row justify-between items-center bg-white sticky w-full shadow-2xl">
      <h1 className="text-3xl px-3">
        <Link to="/">aSStRACKER</Link>
      </h1>

      <ul className="flex flex-row">
        {token
          ? authRoutes.map((item, i) => (
              <li className="px-2 py-3 border-gray-500 hover:bg-green-400 hover:text-white" key={i}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))
          : normalRoutes.map((item, i) => (
              <li className="px-2 py-3 border-gray-500 hover:bg-green-400 hover:text-white" key={i}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
        {token ? (
          <li className="px-2 py-3 border-gray-500 hover:bg-green-400 hover:text-white">
            <button onClick={() => dispatch({ type: LOGOUT })}>Logout</button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  )
}

export default Navbar
