import React, { useEffect, useState } from "react"
import useInput from "../../hooks/useInput"

const LoginForm = () => {

  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  const submitForm = (e) => {
    e.preventDefault()
    alert('Logged in')
  }
  return (
    <form className="flex flex-col items-center max-w-sm p-4 py-11  mx-auto bg-gray-300 rounded-xl shadow-2xl" onSubmit={submitForm}>
      <h1 className="font-light text-3xl">Login</h1>
      <input type="text" className="border-4 rounded-2xl focus:border-green-400 h-12 p-2 m-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className="border-4 rounded-2xl focus:border-green-400 h-12 p-2 m-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" value="Login" className="rounded-full w-40 px-4 py-2 my-2 bg-green-600 hover:bg-green-900 cursor-pointer text-lg font-light text-white"/>
    </form>
  )
}

export default LoginForm
