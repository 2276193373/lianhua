import axios from 'axios'

const baseURL = import.meta.env.VITE_DOMAIN


const request = axios.create({
  baseURL
})
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
    return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});
function get(url, params) {
  request({
    url,
    method: 'get',
    params
  })
}
function post(url, data) {
  request({
    url,
    method: 'post',
    data
  })
}
export default {
  get,
  post
}