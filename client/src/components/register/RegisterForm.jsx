import React, { useState, useEffect, useRef } from "react"
import Loading from "@/components/common/Loading"
import { register } from "@/api/auth"
import { useDispatch } from "react-redux"
import { SHOW_NOTIFICATION } from "../../store/notification/notificationAction"
import { useHistory } from "react-router"

const RegisterForm = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const _isMounted = useRef(true)

  useEffect(() => {
    return () => {
      _isMounted.current = false
    }
  })

  const onSubmitForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    await register({ name, username, password })
      .then((res) => {
        dispatch({ type: SHOW_NOTIFICATION, payload: { message: "Register successful!" } })
        history.push("/login")
      })
      .catch((err) => {
        dispatch({ type: SHOW_NOTIFICATION, payload: { message: `${err.response.data.message}` } })
      })
      .finally(() => {
        if(_isMounted) setLoading(false)
      })
  }

  return (
    <form id="form" className="flex flex-col items-center max-w-sm p-4 py-11  mx-auto bg-white rounded-xl shadow-2xl" onSubmit={onSubmitForm}>
      <h1 className="font-light text-3xl">Sign Up</h1>
      <input
        type="text"
        className="border-4 rounded-2xl focus:border-green-400 h-12 p-2 m-3"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="border-4 rounded-2xl focus:border-green-400 h-12 p-2 m-3"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border-4 rounded-2xl focus:border-green-400 h-12 p-2 m-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className={`flex justify-center items-center rounded-full w-40 px-4 py-2 my-2 cursor-pointer text-lg font-light text-white 
        ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-900"}`}
        disabled={loading}
      >
        {loading ? <Loading /> : "Register"}
      </button>
    </form>
  )
}

export default RegisterForm
