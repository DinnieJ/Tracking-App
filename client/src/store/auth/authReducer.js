import { clearToken } from "../../utils/token"
import { LOGGED_IN, SAVE_AUTH, LOGOUT } from "./authAction"

const initState = {
    token: '',
    user: {}
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGGED_IN:
            return {
                ...state
            }
        case SAVE_AUTH:
            return {
                token: action.payload.token,
                user: action.payload.user
            }
        case LOGOUT:
            clearToken()
            return {
                token: '',
                user: {}
            }
        default: return state
    }
}

export default authReducer