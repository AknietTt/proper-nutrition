import axios from "axios";

export const getAllItems = async () => {
  const {data} = await axios.get('https://localhost:7153/api/Item/all')
  return data
}

export const getItemById = async (id) => {
  const {data} = await axios.get('https://localhost:7153z/api/Item/' + id)
  return data
}