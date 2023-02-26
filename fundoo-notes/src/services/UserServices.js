import axios from 'axios'

export const SignInApi = (loginObj) => {
    console.log("before")
    const response = axios.post('https://localhost:44386/api/User/UserLogin',loginObj)
    console.log("after")
    return response
}