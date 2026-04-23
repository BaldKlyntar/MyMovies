import axios from 'axios'

const customFetch = axios.create({
    baseURL:'http://18.211.183.102:8000/api/',
    withCredentials: true
})

export default customFetch;
