import axios from 'axios'
import  rootUrl  from '../utils/baseurl'
const baseUrl = `${rootUrl}/${"user"}`

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }
