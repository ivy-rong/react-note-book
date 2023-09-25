import type { AxiosRequestConfig } from 'axios'
export const axiosConfig = <AxiosRequestConfig>{
  // baseURL: 'https://taskward-api.bit-ocean.studio/api',
  // baseURL: import.meta.env.VITE_BRUCE_WORLD_BASE_URL,
  baseURL: '/api-note-book',
  timeout: 30000
}
