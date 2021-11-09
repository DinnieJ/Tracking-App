import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { SHOW_NOTIFICATION } from "../store/notification/notificationAction"
import { Redirect, useHistory } from "react-router"

const Index = () => {

  // const history = useHistory()
  // const token = useSelector(state => state.auth.token)

  
  const dispatch = useDispatch()
  return (
    <div className={`container mx-auto min-h-screen relative`}>
      <button onClick={() => dispatch({ type: SHOW_NOTIFICATION, payload: { message: 'Dit me may' } })}>OK</button>
    </div>
  )
}

export default Index
