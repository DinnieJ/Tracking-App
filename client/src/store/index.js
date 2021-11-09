import notificationReducer from "./notification/notificationReducer"
import authReducer from "./auth/authReducer"
import { createStore, combineReducers , applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    auth: authReducer,
    notification: notificationReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export default store
