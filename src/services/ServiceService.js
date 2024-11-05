import axios from "axios";

export const getAllServices = async () => {
  const {data} = await axios.get('https://localhost:7153z/api/Service/all')
  return data
}

export const getServiceById = async (id) => {
  const {data} = await axios.get('https://localhost:7153/api/Service/' + id)
  return data
}