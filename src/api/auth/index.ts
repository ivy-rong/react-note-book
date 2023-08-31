import Request from '../axios'
import { LoginModel, SignupModel } from '@/type'

export class AuthAPI {
  /**
   * 用户名登录
   */
  static loginByUsername(data: LoginModel) {
    // return axiosService({
    //   method: 'POST',
    //   url: 'auth/username/login',
    //   data: data
    // })
    return Request.post('auth/username/login', { ...data })
  }
  /**
   * 用户名注册d
   */
  static signup(data: SignupModel) {
    return Request.post('auth/username/signup', { ...data })
  }
  /**
   * Github登录
   */
  static loginWithGitHub(code: string, abortSignal: unknown) {
    return Request.post(`auth/github/login?code=${code}`, {
      signal: abortSignal
    })
  }
}
