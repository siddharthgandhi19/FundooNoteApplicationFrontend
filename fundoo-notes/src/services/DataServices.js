import axios from 'axios'
const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem("token")}`}
}
export const getListApi = () => {
    let response= axios.get("https://localhost:44386/api/Note/RetrieveAllNote",HeaderConfig)
    return response
}