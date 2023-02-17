import axios, { AxiosInstance } from 'axios'
//import cookies from 'js-cookie'

export const axiosEx: AxiosInstance = axios.create({
  baseURL: `/`,
  headers: {
    //access_token: cookies.get('access_token'),
  },
})