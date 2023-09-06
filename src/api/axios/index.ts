import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError
} from 'axios'
import { HttpStatusCode } from 'axios'
import axios from 'axios'

import { axiosConfig } from './config'
import { AuthUtils } from '@/utils'

// public：类的所有成员都可以被类的实例获取。
// private：类成员只能在类中被访问。
// protected：类成员在类以及子类中可以被访问

class Request {
  // static navigate = useNavigate()
  instance: AxiosInstance

  public constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (req: InternalAxiosRequestConfig) => {
        if (AuthUtils.isAuthenticated()) {
          req.headers.Authorization = AuthUtils.getAuthorization()
        }
        return req
      },
      (error: AxiosError) => Promise.reject(error)
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => res.data,
      (error: AxiosError) => {
        const { response } = error
        const { data, status } = response || {}
        if (response) {
          Request.handleCode(status as number)
        }
        //网络错误
        if (!window.navigator.onLine) {
          //跳转页面404
        }
        return Promise.reject(data)
      }
    )
  }

  /**
   * 处理状态码
   * @param code 响应状态码
   * @description 根据响应状态进行处理
   * - 401 未授权，清除Token 跳转到登录页
   * - 403 禁止访问，
   * - 404 未找到，跳转到404页面
   * - 500 服务器错误
   * - 其他提示错误信息
   */
  static handleCode(code: number): void {
    const errorMessage = HttpStatusCode[code] || 'Unknown Error'
    switch (code) {
      case HttpStatusCode.Unauthorized:
        //401
        location.href = '/login'
        // this.navigate('/login')
        break
      case HttpStatusCode.NotFound:
        //404
        console.log('404')
        location.href = '/not-found'
        // this.navigate('/not-found')
        break
      case HttpStatusCode.BadRequest:
        //400
        if (location.pathname !== '/login' && location.pathname !== '/signup') {
          location.href = '/not-found'
        }
        // location.href = '/not-found'
        // this.navigate('/bad-request')
        break
      default:
        console.log(errorMessage)
    }
  }

  /**
   * 通用请求
   * @param config请求配置
   */
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  /**
   * GET 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param config 请求配置
   */
  get<T>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.get(url, { params, ...config })
  }

  /**
   * POST 请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 请求配置
   */
  post<T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.post(url, data, config)
  }

  /**
   * PUT 请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 请求配置
   */
  put<T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.put(url, data, config)
  }

  /**
   * DELETE 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param config 请求配置
   */
  delete<T>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.put(url, { params, ...config })
  }

  /**
   * PATCH 请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 请求配置
   */
  patch<T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.patch(url, data, config)
  }
}

export default new Request(axiosConfig)
