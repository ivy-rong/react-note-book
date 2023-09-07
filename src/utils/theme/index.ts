import type { Theme } from '@/type'

export class ThemeUtils {
  /**
   * @description 主题名字
   */
  private static LOCAL_STORAGE_THEME = 'theme'

  /**
   * 获取主题
   */
  static getTheme() {
    return localStorage.getItem(this.LOCAL_STORAGE_THEME)
  }

  /**
   * 设置主题
   * @param theme
   */
  static setTheme(theme: Theme) {
    localStorage.setItem(this.LOCAL_STORAGE_THEME, theme)
  }

  /**
   * 清除主题
   */
  static clearTheme() {
    localStorage.removeItem(this.LOCAL_STORAGE_THEME)
  }

  /**
   * 获取默认主题
   */
  static getDefaultThemeMode(): Theme {
    if (
      this.getTheme() === 'dark' ||
      (!this.getTheme() &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return 'dark'
    } else {
      return 'dark'
    }
  }

  /**
   * 修改暗黑模式
   */
  static changeThemeMode(selectedTheme: Theme) {
    this.setTheme(selectedTheme)
    if (selectedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
