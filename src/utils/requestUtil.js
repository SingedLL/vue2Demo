// axios 封装
/**
  axios中拦截器
  1. 请求拦截器
     在请求发出去之前，将请求拦截下来， 对请求的信息进行进行加工处理，然后再让请求继续发送
     使用场景： 在请求发送的时候将jwt等需要发送给服务器的数据一并携带
     axios.interceptors.request.use((cft) => {
       return cft;
     })
  2. 响应拦截器
     在接收到响应的时候将响应拦截下来， 对相应进行处理， 然后再返回给axios请求代码的then方法
     使用场景：可以在响应拦截器中保存服务器签发的jwt, 简化操作等
     axios.interceptors.response.use((res) => {
       return res;
     })
*/
import EventBus from './eventbus'

const request = window.axios.create({
  baseURL: process.env.VUE_BASE_API
})

request.interceptors.request.use(config => {
  EventBus.$emit('showloading', { show: true })
  return config
})

request.interceptors.response.use(
  response => {
    EventBus.$emit('showloading', { show: false })
    console.log('L__response', response)
    if (response.status === 200 && response.data.code === 200) {
      return Promise.resolve(response)
    } else {
      if (response.data.code === 200) {
        console.log('请求出错', 'http error')
        EventBus.$emit('apiRequestError', 'http error')
      } else {
        console.log('请求出错', response.data.msg)
        EventBus.$emit('apiRequestError', response.data.msg)
        if (response.data.code === 406) { // token失效， 重新登录
          EventBus.$emit('tokenFail')
        }
      }
      return Promise.reject(response)
    }
  },
  error => {
    EventBus.$emit('showloading', { show: false })
    console.log('error.response', error.response)
    return Promise.reject(error.response)
  }
)

function get (url, params) {
  return new Promise((resolve, reject) => {
    request.get(url, { params: params })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

function post (url, params, contentType) {
  return new Promise((resolve, reject) => {
    if (contentType === 'multipart/form-data') {
      const headers = { 'Content-Type': 'multipart/form-data' }
      const data = new FormData()
      Object.keys(params).forEach(key => {
        data.append(key, params[key])
      })
      request.post(url, data, { headers: headers })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    } else {
      request.post(url, params)
        .then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err.data)
        })
    }
  })
}

export {
  get,
  post
}
