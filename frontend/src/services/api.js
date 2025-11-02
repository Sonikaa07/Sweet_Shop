import axios from 'axios'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api' })

api.interceptors.request.use((config)=>{
  const token = localStorage.getItem('token')
  if(token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default {
  get: (path, opts) => api.get(path, opts),
  post: (path, data, opts) => api.post(path, data, opts),
  put: (path, data, opts) => api.put(path, data, opts),
  delete: (path, opts) => api.delete(path, opts)
}
