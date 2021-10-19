import axios from 'axios'
 
const api = axios.create({
    baseURL: 'http://tarefa-backend.herokuapp.com'
})
 
export default api;