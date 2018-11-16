import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/api'

// 请求发送拦截，把数据发送给后台之前做些什么......
axios.interceptors.request.use((request) => {
  let obj = sessionStorage.getItem('user')
  if (obj) {
    let us = JSON.parse(obj)
    request.url = request.url + '?token=' + us.token
  }
  // 再发送给后台
  return request
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 请求返回拦截，把数据返回到页面之前做些什么...
axios.interceptors.response.use((res) => {
  let jsonObj = res.data
  if (jsonObj.pageResult) {
    let page = jsonObj.pageResult
    delete jsonObj['pageResult']
    jsonObj.total = page.total
    jsonObj.per_page = page.pageSize
    jsonObj.data = page.data
    jsonObj.current_page = page.currentPage
    jsonObj.last_page = Math.ceil(page.total / page.pageSize)
    jsonObj.from = (page.currentPage - 1) * page.pageSize + 1
    jsonObj.to = jsonObj.from + page.pageSize - 1
  }

  return res
}, function (error) {
  return Promise.reject(error)
})
export default axios

export const requestLogin = params => { return axios.get(`/login`, { params: params }).then(res => res.data) }

export const addUser = params => { return axios.post(`/users/save`, params) }

export const delUser = params => { return axios.post(`/users/delete`, params) }
