import Request from '../axios'
import { LoginModel, SignupModel, BaseResponse, responseUser } from '@/types'

export class AuthAPI {
  /**
   * 用户名登录
   */
  static loginByUsername(data: LoginModel) {
    return Request.post<BaseResponse<responseUser>>('/auth/login', { ...data })
  }
  /**
   * 用户名注册
   */
  static signup(data: SignupModel) {
    return Request.post<BaseResponse<responseUser>>('/auth/signup', { ...data })
  }
  /**
   * Github登录
   */
  static loginWithGitHub(code: string, abortSignal: unknown) {
    return Request.post(`/auth/github/login?code=${code}`, {
      signal: abortSignal
    })
  }
}
