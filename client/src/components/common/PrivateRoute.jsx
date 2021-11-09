import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = (props) => {
  const token = useSelector((state) => state.auth.token)
  return <Route {...props}>{token ? props.children : <Redirect to="/login" />}</Route>
}

export default PrivateRoute
