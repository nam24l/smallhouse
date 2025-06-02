import axios, { AxiosRequestConfig } from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const postRequest = async ({
  url,
  body,
  options
}: {
  url: string
  body?: object | string
  options?: AxiosRequestConfig<object>
}) => {
  try {
    const response = await axiosClient.post(`${url}`, body, options)
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

const patchRequest = async ({
  url,
  body,
  options
}: {
  url: string
  body?: object | string
  options?: AxiosRequestConfig<object>
}) => {
  try {
    const response = await axiosClient.patch(`${url}`, body, options)
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

const getRequest = async ({
  url,
  options
}: {
  url: string
  options?: AxiosRequestConfig<object>
}) => {
  try {
    const response = await axiosClient.get(`${url}`, options)
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

const deleteRequest = async ({
  url,
  options
}: {
  url: string
  options?: AxiosRequestConfig<object>
}) => {
  try {
    const response = await axiosClient.delete(`${url}`, options)
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default { postRequest, getRequest, patchRequest, deleteRequest }
