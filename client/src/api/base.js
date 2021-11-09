import axios from "axios"
import { getToken } from "@/utils/token"

const callAPI = axios.create({
  baseURL: `${process.env.API_URL}`,
})

callAPI.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    Promise.reject(err)
  }
)

export default callAPI
