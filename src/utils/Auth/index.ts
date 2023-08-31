export class AuthUtils {
  /**
   *  token LocalStorage 健名
   */
  private static LOCAL_STORAGE_TOKEN = 'access_token'

  /**
   * 获取token
   */
  static getToken() {
    return localStorage.getItem(this.LOCAL_STORAGE_TOKEN)
  }

  /**
   * 获取 authorization
   */
  static getAuthorization() {
    return `Bearer ${this.getToken()}`
  }

  /**
   * 设置token
   * @param token
   */
  static setToken(token: string) {
    localStorage.setItem(this.LOCAL_STORAGE_TOKEN, token)
  }

  /**
   * 清除token
   */
  static clearToken() {
    localStorage.removeItem(this.LOCAL_STORAGE_TOKEN)
  }

  /**
   * 判断是否登录
   */
  static isAuthenticated(): boolean {
    return true
    // return !!localStorage.getItem(this.LOCAL_STORAGE_TOKEN)
  }
}
