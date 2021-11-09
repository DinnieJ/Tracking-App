import React, { useEffect } from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Index from "./pages/index"
import { GRADIENT_BG } from "./constants/tailwind.constant"
import Navbar from "./components/common/Navbar"
import Snackbar from "./components/common/Snackbar"
import { useDispatch } from "react-redux"
import { fetchUser } from "./api/auth"
import { SAVE_AUTH } from "./store/auth/authAction"
import { SHOW_NOTIFICATION } from "./store/notification/notificationAction"
import PrivateRoute from "./components/common/PrivateRoute"
import io from 'socket.io-client'

const App = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const socket = io("ws://localhost:3000")
  console.log('ok')
  socket.on("connect", () => {
    socket.emit("connected", "hello from me")
  })

  socket.on("test", (arg) => {
    dispatch({ type: SHOW_NOTIFICATION, payload: { message: arg } })
  })

  useEffect(() => {
    ;(async () => {
      const token = localStorage.getItem("TOKEN")
      if (token) {
        await fetchUser()
          .then((res) => {
            dispatch({
              type: SAVE_AUTH,
              payload: {
                token,
                user: res.data,
              },
            })
            dispatch({ type: SHOW_NOTIFICATION, payload: { message: `Welcome back, ${res.data.name}` } })
          })
          .catch((err) => {
            dispatch({ type: SHOW_NOTIFICATION, payload: { message: `Token expired` } })
            localStorage.removeItem("TOKEN")
            window.location.href = "/login"
          })
      }
    })()
  })
  return (
    <React.Fragment>
      <Router>
        <div className={GRADIENT_BG}>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/">
              <Index/>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
      <Snackbar />
    </React.Fragment>
  )
}

export default App
