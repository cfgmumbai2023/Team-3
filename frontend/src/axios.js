import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:5002/api',
});

axiosClient.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token')
    config.headers.Authorization = `Bearer ${token}`
  
    return config
})

export { axiosClient }