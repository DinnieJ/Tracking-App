import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import '@/assets/snackbar.scss'
import { HIDE_NOTIFICATION } from "@/store/notification/notificationAction"

const Snackbar = () => {

  const toggle = useSelector(state => state.notification.toggle)
  const message = useSelector(state => state.notification.message)
  const dispatch = useDispatch()

  useEffect(() => {
    if(toggle) {
      setTimeout(() => {
        dispatch({ type: HIDE_NOTIFICATION })
      }, 1000)
    }
  }, [toggle])

  return (
    <div className={`fixed flex snackbar transform -translate-x-1/2 -translate-y-1/2 flex-col justify-start p-5 max-w-sm w-96 top-32 left-1/2 bg-white rounded-xl shadow-2xl ${toggle ? 'show-notification' : 'hide-notification'}`}>
      <div className="flex items-center justify-start font-light text-xl">
        <span className="pr-2">
          <i className="fas fa-bell text-blue-400 text-3xl"></i>
        </span>
      Notification
      </div>
      <p className="py-1 break-all">{message}</p>
    </div>
  )
}

export default Snackbar
