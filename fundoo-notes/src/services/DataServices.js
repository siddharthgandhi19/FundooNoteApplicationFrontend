import axios from 'axios'
const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem("token")}`}
}

    const BaseUrl = 'https://localhost:44386/api/Note'

export const getListApi = () => {
    let response= axios.get(`${BaseUrl}/RetrieveAllNote`,HeaderConfig)
    return response
}

export const createNewNoteApi = (data) => {
    let response= axios.post(`${BaseUrl}/NoteRegistration` , data ,HeaderConfig)
    return response
}
export const NoteArchieveApi = (data) => {
    let response = axios.put(`${BaseUrl}/ArchieveNote`, data, HeaderConfig)
    return response
}
export const NoteTrashApi = (data) => {
    let response= axios.put(`${BaseUrl}/TrashNote`, data ,HeaderConfig)
    return response
}
export const NotePinApi = (data) => {
    let response= axios.put(`${BaseUrl}/PinNote`, data ,HeaderConfig)
    return response
}
export const NoteColorApi = (data) => {
    let response= axios.put(`${BaseUrl}/BackgroundColor`, data ,HeaderConfig)
    return response
}
export const updateNoteAPI =(id, data) => {
    let response= axios.put(`${BaseUrl}/NoteUpdate?NoteID=${id}`, data ,HeaderConfig)
    return response
}
