import axios from 'axios'

// axios.interceptors.response.use(res => {
//   if (res.status === 200)
// })

// axios.interceptors.request.use(options => {
//   options
// })

function processUrl (url) {
  return 'http://localhost:8888' + url
}

const myAxios = {
  get (url, params, config) {
    return axios.get(processUrl(url), params, config)
  },
  post (url, params, config) {
    return axios.post(processUrl(url), params, config)
  }
}

export default myAxios