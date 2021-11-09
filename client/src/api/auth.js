import callAPI from "./base";

export const login = (username, password) => {
    return callAPI.post('/login', { username, password })
}

export const fetchUser = () => {
    return callAPI.post('/fetch-user')
}

export const register = (payload) => {
    return callAPI.post('/signup', payload)
}