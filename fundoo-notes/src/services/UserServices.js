import axios from 'axios'

export const SignInApi = (loginObj) => {
    console.log("before")
    const response = axios.post('https://localhost:44386/api/User/UserLogin',loginObj)
    console.log("after")
    return response
}

export const SignUpApi =(data) => {
    console.log("before")
    let response = axios.post('https://localhost:44386/api/User/UserRegistration',data)
    console.log("after")
    return response
}