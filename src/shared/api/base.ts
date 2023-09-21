import axios from 'axios'

export const baseInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
})
