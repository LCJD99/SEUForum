import axios from 'axios'
import  rootUrl  from '../utils/baseurl'
const baseUrl = `${rootUrl}/${"login"}`

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
