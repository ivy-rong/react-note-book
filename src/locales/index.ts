import en_auth from '@/locales/en_us/auth.json'
import en_global from '@/locales/en_us/global.json'
import zh_auth from '@/locales/zh_cn/auth.json'
import zh_global from '@/locales/zh_cn/global.json'

export const EN_US = {
  Global: en_global,
  Auth: en_auth
} as const

export const ZH_CN = {
  Global: zh_global,
  Auth: zh_auth
} as const
