import React, { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "@/api/auth"
import { useHistory } from "react-router-dom"
import { SAVE_AUTH } from "@/store/auth/authAction"
import { SHOW_NOTIFICATION } from "@/store/notification/notificationAction"
import Loading from "@/components/common/Loading"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const __isMounted = useRef(true)

  useEffect(() => () => {
    __isMounted.current = false
  })

  const submitForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    await login(username, password)
      .then((res) => {
        dispatch({ type: SAVE_AUTH, payload: res.data })
        dispatch({
          type: SHOW_NOTIFICATION,
          payload: {
            message: `Welcome back, ${res.data.user.name}`,
          },
        })
        localStorage.setItem("TOKEN", res.data.token)
        history.push("/")
      })
      .catch((err) => {
        dispatch({
          type: SHOW_NOTIFICATION,
          payload: {
            message: `Wrong username or password`,
          },
        })
      })
      .finally(() => {
        if (__isMounted) {
          setLoading(false)
        }
      })
  }
  return (
    <form className="flex flex-col items-center max-w-sm p-4 py-11  mx-auto bg-white rounded-xl shadow-2xl" onSubmit={submitForm}>
      <h1 className="font-light text-3xl">Login</h1>
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
        {loading ? <Loading /> : "Login"}
      </button>
    </form>
  )
}

export default LoginForm
