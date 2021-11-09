import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./notificationAction"

const initState = {
    message: '',
    toggle: false
}

const notificationReducer = (state = initState, action) => {
    switch(action.type) {
        case SHOW_NOTIFICATION:
            return {
                message: action.payload.message,
                toggle: true
            }
        case HIDE_NOTIFICATION:
            return {
                message: '',
                toggle: false
            }
        default:
            return state
    }
}

export default notificationReducer