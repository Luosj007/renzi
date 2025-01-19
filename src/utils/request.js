import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/api', // 基础地址
  timeout: 10000
})// 创建一个新的axios实例

// 请求拦截器
service.interceptors.request.use((config) => {
  // 注入Token
  if (store.getters.token) {
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  // axios默认包裹了data
  const { data, message, success } = response.data // 默认json格式
  if (success) {
    return data
  } else {
    Message({ type: 'error', message })
    return Promise.reject(new Error(message))
  }
}, (error) => {
  // error.message
  Message({ type: 'error', message: error.message })
  return Promise.reject(error)
})
export default service
