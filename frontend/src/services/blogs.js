import axios from 'axios'
import rootUrl from "../utils/baseurl"
const baseUrl = `${rootUrl}/${"blogs"}`

let token = null
let config

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  config = {
    headers: { Authorization: token }
  }
}

const getAll = async () => {
  const response = await axios.get(baseUrl, config)
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (objectToUpdate) => {
  const response = await axios.put(

    `${baseUrl}/${objectToUpdate.id}`,
    objectToUpdate,
    config
  )
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { getAll, create, update, setToken, remove }
